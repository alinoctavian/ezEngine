#pragma once

#include <Graphics/Basics.h>
#include <Foundation/Strings/String.h>
#include <Foundation/Containers/Map.h>
#include <Foundation/Containers/Set.h>
#include <Foundation/Containers/Deque.h>

struct lua_State;

class EZ_GRAPHICS_DLL ezPermutationGenerator
{
public:

  struct PermutationVar
  {
    ezString m_sVariable;
    ezString m_sValue;
  };

  void AddPermutation(const char* szVariable, const char* szValue);
  ezUInt32 GetPermutationCount() const;
  void GetPermutation(ezUInt32 uiPerm, ezDeque<PermutationVar>& out_PermVars) const;
  void RemoveVariable(const char* szVariable) { m_Permutations.Erase(szVariable); }

  static ezUInt32 GetHash(const ezDeque<PermutationVar>& PermVars);

  const ezMap<ezString, ezSet<ezString> >& GetPermutationSet() const { return m_Permutations; }

  void RemoveUnusedPermutations(const ezString& sUsedPermutations);

  ezResult ReadFromFile(const char* szFile, const char* szPlatform);

  bool IsValueAllowed(const char* szVariable, const char* szValue) const;

private:
  static int LUAFUNC_add(lua_State* state);

  ezMap<ezString, ezSet<ezString> > m_Permutations;
};



