#pragma once

#include <Foundation/Containers/IdTable.h>
#include <Foundation/Math/Frustum.h>
#include <Foundation/Memory/CommonAllocators.h>
#include <Core/World/SpatialData.h>

class EZ_CORE_DLL ezSpatialSystem : public ezReflectedClass
{
  EZ_ADD_DYNAMIC_REFLECTION(ezSpatialSystem, ezReflectedClass);

public:
  ezSpatialSystem();
  ~ezSpatialSystem();

  /// \name Spatial Data Functions
  ///@{

  ezSpatialDataHandle CreateSpatialData(const ezSimdBBoxSphere& bounds, ezGameObject* pObject = nullptr);
  void DeleteSpatialData(const ezSpatialDataHandle& hData);

  bool TryGetSpatialData(const ezSpatialDataHandle& hData, const ezSpatialData*& out_pData) const;

  void UpdateSpatialData(const ezSpatialDataHandle& hData, const ezSimdBBoxSphere& bounds, ezGameObject* pObject = nullptr);

  ///@}
  /// \name Simple Queries
  ///@{

  typedef ezDelegate<ezVisitorExecution::Enum(ezGameObject*)> QueryCallback;

  struct QueryStats
  {
    ezUInt32 m_uiTotalNumObjects; ///< The total number of spatial objects in this system.
    ezUInt32 m_uiNumObjectsTested; ///< Number of objects tested for the query condition.
    ezUInt32 m_uiNumObjectsPassed; ///< Number of objects that passed the query condition.
    float m_fTimeTaken; ///< Time taken to execute the query in seconds.

    EZ_ALWAYS_INLINE QueryStats()
    {
      m_uiTotalNumObjects = 0;
      m_uiNumObjectsTested = 0;
      m_uiNumObjectsPassed = 0;
      m_fTimeTaken = 0.0f;
    }
  };

  virtual void FindObjectsInSphere(const ezBoundingSphere& sphere, ezDynamicArray<ezGameObject*>& out_Objects, QueryStats* pStats = nullptr) const = 0;
  virtual void FindObjectsInSphere(const ezBoundingSphere& sphere, QueryCallback callback, QueryStats* pStats = nullptr) const = 0;

  virtual void FindObjectsInBox(const ezBoundingBox& box, ezDynamicArray<ezGameObject*>& out_Objects, QueryStats* pStats = nullptr) const = 0;
  virtual void FindObjectsInBox(const ezBoundingBox& box, QueryCallback callback, QueryStats* pStats = nullptr) const = 0;

  ///@}
  /// \name Visibility Queries
  ///@{

  virtual void FindVisibleObjects(const ezFrustum& frustum, ezDynamicArray<const ezGameObject*>& out_Objects, QueryStats* pStats = nullptr) const = 0;

  ///@}

protected:

  virtual void SpatialDataAdded(ezSpatialData* pData) = 0;
  virtual void SpatialDataRemoved(ezSpatialData* pData) = 0;
  virtual void SpatialDataChanged(ezSpatialData* pData, const ezSimdBBoxSphere& oldBounds) = 0;
  virtual void FixSpatialDataPointer(ezSpatialData* pOldPtr, ezSpatialData* pNewPtr) = 0;

  ezProxyAllocator m_Allocator;
  ezLocalAllocatorWrapper m_AllocatorWrapper;
  ezInternal::WorldLargeBlockAllocator m_BlockAllocator;

  typedef ezBlockStorage<ezSpatialData, ezInternal::DEFAULT_BLOCK_SIZE, ezBlockStorageType::FreeList> DataStorage;
  ezIdTable<ezSpatialDataId, ezSpatialData*, ezLocalAllocatorWrapper> m_DataTable;
  DataStorage m_DataStorage;
};

