#pragma once

/// \file

#include <Foundation/Basics.h>

template<typename Type>
const Type* ezRTTI::GetAttributeByType() const
{
  for (const auto* pAttr : m_Attributes)
  {
    if (pAttr->GetDynamicRTTI()->IsDerivedFrom<Type>())
      return static_cast<const Type*>(pAttr);
  }
  if (GetParentType() != nullptr)
    return GetParentType()->GetAttributeByType<Type>();
  else
    return nullptr;
}




/// \brief Base class of all attributes can be used to decorate a RTTI property.
class EZ_FOUNDATION_DLL ezPropertyAttribute : public ezReflectedClass
{
  EZ_ADD_DYNAMIC_REFLECTION(ezPropertyAttribute, ezReflectedClass);
};

/// \brief A property attribute that indicates that the property may not be modified through the UI
class EZ_FOUNDATION_DLL ezReadOnlyAttribute : public ezPropertyAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezReadOnlyAttribute, ezPropertyAttribute);
};

/// \brief A property attribute that indicates that the property is not to be shown in the UI
class EZ_FOUNDATION_DLL ezHiddenAttribute : public ezPropertyAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezHiddenAttribute, ezPropertyAttribute);
};

/// \brief Used to categorize types (e.g. add component menu) 
class EZ_FOUNDATION_DLL ezCategoryAttribute : public ezPropertyAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezCategoryAttribute, ezPropertyAttribute);

public:
  ezCategoryAttribute() {}
  ezCategoryAttribute(const char* szCategory)
  {
    m_sCategory = szCategory;
  }

  const char* GetCategory() const { return m_sCategory; }

private:
  ezString m_sCategory;
};

/// \brief Sets the default value of the property.
class EZ_FOUNDATION_DLL ezDefaultValueAttribute : public ezPropertyAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezDefaultValueAttribute, ezPropertyAttribute);

public:
  ezDefaultValueAttribute() {}
  ezDefaultValueAttribute(const ezVariant& value)
  {
    m_Value = value;
  }

  const ezVariant& GetValue() const { return m_Value; }

private:
  ezVariant m_Value;
};

/// \brief A property attribute that allows to define min and max values for the UI. Min or max may be set to an invalid variant to indicate unbounded values in one direction.
class EZ_FOUNDATION_DLL ezClampValueAttribute : public ezPropertyAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezClampValueAttribute, ezPropertyAttribute);

public:
  ezClampValueAttribute() {}
  ezClampValueAttribute(const ezVariant& min, const ezVariant& max)
  {
    m_MinValue = min;
    m_MaxValue = max;
  }

  const ezVariant& GetMinValue() const { return m_MinValue; }
  const ezVariant& GetMaxValue() const { return m_MaxValue; }

private:
  ezVariant m_MinValue;
  ezVariant m_MaxValue;
};


/// \brief Derive from this class if you want to define an attribute that replaces the property type widget.
///
/// Using this attribute affects both member properties as well as elements in a container but not the container widget.
/// When creating a property widget, the property grid will look for an attribute of this type and use
/// its type to look for a factory creator in ezRttiMappedObjectFactory<ezQtPropertyWidget>.
/// E.g. ezRttiMappedObjectFactory<ezQtPropertyWidget>::RegisterCreator(ezGetStaticRTTI<ezFileBrowserAttribute>(), FileBrowserCreator);
/// will replace the property widget for all properties that use ezFileBrowserAttribute.
class EZ_FOUNDATION_DLL ezTypeWidgetAttribute : public ezPropertyAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezTypeWidgetAttribute, ezPropertyAttribute);
};

/// \brief Derive from this class if you want to define an attribute that replaces the property widget of containers.
///
/// Using this attribute affects the container widget but not container elements.
/// Only derive from this class if you want to replace the container widget itself, in every other case
/// prefer to use ezTypeWidgetAttribute.
class EZ_FOUNDATION_DLL ezContainerWidgetAttribute : public ezPropertyAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezContainerWidgetAttribute, ezPropertyAttribute);
};

/// \brief Add this attribute to a tag set member property to make it use the tag set editor
/// and define the categories it will use as a ; separated list of category names.
///
/// Usage: EZ_SET_MEMBER_PROPERTY("Tags", m_Tags)->AddAttributes(new ezTagSetWidgetAttribute("Category1;Category2")),
class EZ_FOUNDATION_DLL ezTagSetWidgetAttribute : public ezContainerWidgetAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezTagSetWidgetAttribute, ezContainerWidgetAttribute);

public:
  ezTagSetWidgetAttribute() {}
  ezTagSetWidgetAttribute(const char* szTagFilter)
  {
    m_sTagFilter = szTagFilter;
  }

  const char* GetTagFilter() const { return m_sTagFilter; }

private:
  ezString m_sTagFilter;
};

/// \brief Sets the allowed actions on a container.
class EZ_FOUNDATION_DLL ezContainerAttribute : public ezPropertyAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezContainerAttribute, ezPropertyAttribute);

public:
  ezContainerAttribute(){}
  ezContainerAttribute(bool bCanAdd, bool bCanDelete, bool bCanMove)
  {
    m_bCanAdd = bCanAdd;
    m_bCanDelete = bCanDelete;
    m_bCanMove = bCanMove;
  }

  bool CanAdd() const { return m_bCanAdd; }
  bool CanDelete() const { return m_bCanDelete; }
  bool CanMove() const { return m_bCanMove; }

private:
  bool m_bCanAdd;
  bool m_bCanDelete;
  bool m_bCanMove;
};

/// \brief A property attribute that indicates that the string property should display a file browsing button.
///
/// Allows to specify the title for the browse dialog and the allowed file types.
/// Usage: EZ_MEMBER_PROPERTY("File", m_sFilePath)->AddAttributes(new ezFileBrowserAttribute("Choose a File", "*.txt")),
class EZ_FOUNDATION_DLL ezFileBrowserAttribute : public ezTypeWidgetAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezFileBrowserAttribute, ezTypeWidgetAttribute);

public:
  ezFileBrowserAttribute() {}
  ezFileBrowserAttribute(const char* szDialogTitle, const char* szTypeFilter)
  {
    m_sDialogTitle = szDialogTitle;
    m_sTypeFilter = szTypeFilter;
  }

  const char* GetDialogTitle() const { return m_sDialogTitle; }
  const char* GetTypeFilter() const { return m_sTypeFilter; }

private:
  ezString m_sDialogTitle;
  ezString m_sTypeFilter;
};

/// \brief A property attribute that indicates that the string property is actually an asset reference.
///
/// Allows to specify the allowed asset types, separated with ;
/// Usage: EZ_MEMBER_PROPERTY("Texture", m_sTexture)->AddAttributes(new ezAssetBrowserAttribute("Texture 2D;Texture 3D")),
class EZ_FOUNDATION_DLL ezAssetBrowserAttribute : public ezTypeWidgetAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezAssetBrowserAttribute, ezTypeWidgetAttribute);

public:
  ezAssetBrowserAttribute() {}
  ezAssetBrowserAttribute(const char* szTypeFilter)
  {
    ezStringBuilder sTemp(";", szTypeFilter, ";");
    m_sTypeFilter = sTemp;
  }

  const char* GetTypeFilter() const { return m_sTypeFilter; }

private:
  ezString m_sTypeFilter;
};

/// \brief Can be used on integer properties to display them as enums. The valid enum values and their names may change at runtime.
///
/// See ezDynamicEnum for details.
class EZ_FOUNDATION_DLL ezDynamicEnumAttribute : public ezTypeWidgetAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezDynamicEnumAttribute, ezTypeWidgetAttribute);

public:
  ezDynamicEnumAttribute() {}
  ezDynamicEnumAttribute(const char* szDynamicEnumName)
  {
    m_sDynamicEnumName = szDynamicEnumName;
  }

  const char* GetDynamicEnumName() const { return m_sDynamicEnumName; }

private:
  ezString m_sDynamicEnumName;
};

/// \brief Can be used on string properties to display them as enums. The valid enum values and their names may change at runtime.
///
/// See ezDynamicStringEnum for details.
class EZ_FOUNDATION_DLL ezDynamicStringEnumAttribute : public ezTypeWidgetAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezDynamicStringEnumAttribute, ezTypeWidgetAttribute);

public:
  ezDynamicStringEnumAttribute() {}
  ezDynamicStringEnumAttribute(const char* szDynamicEnumName)
  {
    m_sDynamicEnumName = szDynamicEnumName;
  }

  const char* GetDynamicEnumName() const { return m_sDynamicEnumName; }

private:
  ezString m_sDynamicEnumName;
};


//////////////////////////////////////////////////////////////////////////

class EZ_FOUNDATION_DLL ezManipulatorAttribute : public ezPropertyAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezManipulatorAttribute, ezPropertyAttribute);

public:
  ezManipulatorAttribute(const char* szProperty1, const char* szProperty2 = nullptr, const char* szProperty3 = nullptr, const char* szProperty4 = nullptr);

  ezString m_sProperty1;
  ezString m_sProperty2;
  ezString m_sProperty3;
  ezString m_sProperty4;
};

//////////////////////////////////////////////////////////////////////////

class EZ_FOUNDATION_DLL ezSphereManipulatorAttribute : public ezManipulatorAttribute
{
  EZ_ADD_DYNAMIC_REFLECTION(ezSphereManipulatorAttribute, ezManipulatorAttribute);

public:
  ezSphereManipulatorAttribute();
  ezSphereManipulatorAttribute(const char* szInnerRadius, const char* szOuterRadius = nullptr);

protected:

};






