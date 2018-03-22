﻿#include <PCH.h>
#include <EditorPluginProceduralPlacement/EditorPluginProceduralPlacement.h>
#include <EditorFramework/EditorApp/EditorApp.moc.h>
#include <ToolsFoundation/Reflection/ToolsReflectionUtils.h>
#include <GuiFoundation/Action/ActionMapManager.h>
#include <EditorFramework/Actions/ProjectActions.h>
#include <EditorFramework/Actions/AssetActions.h>
#include <GuiFoundation/Action/StandardMenus.h>
#include <GuiFoundation/Action/DocumentActions.h>
#include <GuiFoundation/Action/CommandHistoryActions.h>
#include <Foundation/Strings/TranslationLookup.h>

static void ToolsProjectEventHandler(const ezToolsProjectEvent& e);

void OnLoadPlugin(bool bReloading)
{
  ezQtEditorApp::GetSingleton()->AddRuntimePluginDependency("EditorPluginProceduralPlacement", "ezProceduralPlacementPlugin");

  //ezToolsProject::GetSingleton()->s_Events.AddEventHandler(ToolsProjectEventHandler);

  // Asset
  {
    // Menu Bar
    {
      const char* szMenuBar = "ProceduralPlacementAssetMenuBar";
      ezActionMapManager::RegisterActionMap(szMenuBar);
      ezProjectActions::MapActions(szMenuBar);
      ezStandardMenus::MapActions(szMenuBar, ezStandardMenuTypes::File | ezStandardMenuTypes::Edit | ezStandardMenuTypes::Panels | ezStandardMenuTypes::Help);
      ezDocumentActions::MapActions(szMenuBar, "Menu.File", false);
      ezCommandHistoryActions::MapActions(szMenuBar, "Menu.Edit");
    }

    // Tool Bar
    {
      const char* szToolBar = "ProceduralPlacementAssetToolBar";
      ezActionMapManager::RegisterActionMap(szToolBar);
      ezDocumentActions::MapActions(szToolBar, "", true);
      ezCommandHistoryActions::MapActions(szToolBar, "");
      ezAssetActions::MapActions(szToolBar, true);
    }
  }

#if 0

  // Scene
  {
    // Menu Bar
    {
      ezProceduralPlacementActions::RegisterActions();
      ezProceduralPlacementActions::MapMenuActions();
    }

    // Tool Bar
    {

    }
  }
#endif
}

void OnUnloadPlugin(bool bReloading)
{
  //ezProceduralPlacementActions::UnregisterActions();
  //ezToolsProject::GetSingleton()->s_Events.RemoveEventHandler(ToolsProjectEventHandler);
}

/*static void ToolsProjectEventHandler(const ezToolsProjectEvent& e)
{
  if (e.m_Type == ezToolsProjectEvent::Type::ProjectOpened)
  {
    ezFmodProjectPreferences* pPreferences = ezPreferences::QueryPreferences<ezFmodProjectPreferences>();
    pPreferences->SyncCVars();
  }
}*/


ezPlugin g_Plugin(false, OnLoadPlugin, OnUnloadPlugin, "ezEditorPluginScene");

EZ_DYNAMIC_PLUGIN_IMPLEMENTATION(EZ_EDITORPLUGINPROCEDURALPLACEMENT_DLL, ezEditorPluginProceduralPlacement);


