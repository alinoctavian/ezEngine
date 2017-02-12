#include <PCH.h>
#include <EditorFramework/Panels/LogPanel/LogWidget.moc.h>
#include <EditorFramework/Panels/LogPanel/LogModel.moc.h>
#include <QKeyEvent>
#include <QClipboard>

ezQtLogWidget::ezQtLogWidget(QWidget* parent)
  : QWidget(parent)
{
  setupUi(this);

  m_pLog = new ezQtLogModel(this);
  ListViewLog->setModel(m_pLog);
  ListViewLog->setUniformItemSizes(true);
  ListViewLog->installEventFilter(this);
  connect(m_pLog, &QAbstractItemModel::rowsInserted, this, [this](const QModelIndex &parent, int first, int last)
  {
    ScrollToBottomIfAtEnd(first);
  });

  const int logIndex = (ezLogMsgType::All - ezLogMsgType::InfoMsg);
  ComboFilter->setCurrentIndex(logIndex);

}

ezQtLogWidget::~ezQtLogWidget()
{
}

ezQtLogModel* ezQtLogWidget::GetLog()
{
  return m_pLog;
}

ezQtSearchWidget* ezQtLogWidget::GetSearchWidget()
{
  return Search;
}
bool ezQtLogWidget::eventFilter(QObject* pObject, QEvent* pEvent)
{
  if (pObject == ListViewLog)
  {
    if (pEvent->type() == QEvent::ShortcutOverride)
    {
      // Intercept copy
      QKeyEvent* keyEvent = static_cast<QKeyEvent*>(pEvent);
      if (keyEvent->matches(QKeySequence::StandardKey::Copy))
      {
        keyEvent->accept();
        return true;
      }
    }
    else if (pEvent->type() == QEvent::KeyPress)
    {
      // Copy entire selection
      QKeyEvent* keyEvent = static_cast<QKeyEvent*>(pEvent);
      if (keyEvent->matches(QKeySequence::StandardKey::Copy))
      {
        QModelIndexList selection = ListViewLog->selectionModel()->selectedRows(0);
        QStringList sTemp;
        sTemp.reserve(selection.count());
        for (const QModelIndex& index : selection)
        {
          QString sLine = m_pLog->data(index, Qt::DisplayRole).toString();
          sTemp.push_back(sLine);
        }

        QString sFullText = sTemp.join(QStringLiteral("\n"));
        QApplication::clipboard()->setText(sFullText);
        keyEvent->accept();
        return true;
      }
    }
  }

  return false;
}

void ezQtLogWidget::ScrollToBottomIfAtEnd(int iNumElements)
{
  if (ListViewLog->selectionModel()->hasSelection())
  {
    if (ListViewLog->selectionModel()->selectedIndexes()[0].row() + 1 >= iNumElements)
    {
      ListViewLog->selectionModel()->clearSelection();
      ListViewLog->scrollToBottom();
    }
  }
  else
    ListViewLog->scrollToBottom();
}

void ezQtLogWidget::on_ButtonClearLog_clicked()
{
  m_pLog->Clear();
}

void ezQtLogWidget::on_Search_textChanged(const QString& text)
{
  m_pLog->SetSearchText(text.toUtf8().data());
}

void ezQtLogWidget::on_ComboFilter_currentIndexChanged(int index)
{
  const ezLogMsgType::Enum LogLevel = (ezLogMsgType::Enum) (ezLogMsgType::All - index);

  m_pLog->SetLogLevel(LogLevel);
}

