#pragma once

#include <RendererCore/Pipeline/RenderPipelinePass.h>
#include <RendererCore/Pipeline/SimpleRenderPass.h>
#include <RendererFoundation/Resources/RenderTargetSetup.h>
#include <EditorFramework/EngineProcess/ViewRenderSettings.h>

class ezSceneContext;

class ezEditorRenderPass : public ezSimpleRenderPass
{
  EZ_ADD_DYNAMIC_REFLECTION(ezEditorRenderPass, ezSimpleRenderPass);
public:
  ezEditorRenderPass(const char* szName = "EditorRenderPass");

  void SetSceneContext(ezSceneContext* pSceneContext) { m_pSceneContext = pSceneContext; }
  virtual void Execute(const ezRenderViewContext& renderViewContext) override;

  bool m_bRenderSelectionOverlay;
  bool m_bRenderShapeIcons;
  ezViewRenderMode::Enum m_ViewRenderMode;
  ezSceneContext* m_pSceneContext;
};
