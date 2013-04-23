#pragma once

#include <Foundation/Math/Vec3.h>

/// \brief A 4x4 component matrix class.
class EZ_FOUNDATION_DLL ezMat3
{
public:
  EZ_DECLARE_POD_TYPE();

// *** Data ***
public:
  // The elements are stored in column-major order.
  // That means first is column 0 (with elements of row 0, row 1, row 2),
  // then column 1, then column 2
    
  union
  {
    /// \brief The matrix as a 9-element float array (column-major)
    float m_fElementsCM[9];

    /// \brief The matrix as a 3x3 float array
    float m_fColumn[3][3];
  };

// *** Constructors ***
public:
  /// \brief Default Constructor DOES NOT INITIALIZE the matrix, at all.
  ezMat3(); // [tested]

  /// \brief Copies 9 values from pData into the matrix. Can handle the data in row-major or column-major order.
  ///
  /// \param pData
  ///   The array of float values from which to set the matrix data.
  /// \param layout
  ///   The layout in which pData stores the matrix. The data will get transposed, if necessary.
  ///   The data should be in column-major format, if you want to prevent unnecessary transposes.
  ezMat3(const float* const pData, ezMatrixLayout::Enum layout); // [tested]

  /// \brief Sets each element manually: Naming is "column-n row-m"
  ezMat3(float c1r1, float c2r1, float c3r1,
         float c1r2, float c2r2, float c3r2,
         float c1r3, float c2r3, float c3r3); // [tested]

  /// \brief Copies 9 values from pData into the matrix. Can handle the data in row-major or column-major order.
  ///
  /// \param pData
  ///   The array of float values from which to set the matrix data.
  /// \param layout
  ///   The layout in which pData stores the matrix. The data will get transposed, if necessary.
  ///   The data should be in column-major format, if you want to prevent unnecessary transposes.
  void SetFromArray(const float* const pData, ezMatrixLayout::Enum layout); // [tested]

  /// \brief Copies the 9 values of this matrix into the given array. 'layout' defines whether the data should end up in column-major or row-major format.
  void GetAsArray(float* out_pData, ezMatrixLayout::Enum layout) const; // [tested]

  /// \brief Sets each element manually: Naming is "column-n row-m"
  void SetElements(float c1r1, float c2r1, float c3r1,
                   float c1r2, float c2r2, float c3r2,
                   float c1r3, float c2r3, float c3r3); // [tested]

// *** Special matrix constructors ***
public:

  /// \brief Sets all elements to zero.
  void SetZero(); // [tested]

  /// \brief Sets all elements to zero, except the diagonal, which is set to one.
  void SetIdentity(); // [tested]

  /// \brief Sets the matrix to all zero, except the diagonal, which is set to x,y,z,1
  void SetScalingMatrix(const ezVec3& vScale); // [tested]

  /// \brief Sets this matrix to be a rotation matrix around the X-axis.
  void SetRotationMatrixX(float fAngle); // [tested]

  /// \brief Sets this matrix to be a rotation matrix around the Y-axis.
  void SetRotationMatrixY(float fAngle); // [tested]

  /// \brief Sets this matrix to be a rotation matrix around the Z-axis.
  void SetRotationMatrixZ(float fAngle); // [tested]

  /// \brief Sets this matrix to be a rotation matrix around the given axis.
  void SetRotationMatrix(const ezVec3& vAxis, float fAngle); // [tested]

  /// \brief Sets this matrix to be a look-at matrix (without the translation).
  void SetLookInDirectionMatrix(ezVec3 vLookDir, ezVec3 vUpDir = ezVec3 (0, 1, 0));

// *** Common Matrix Operations ***
public:

  /// \brief Returns an Identity Matrix.
  static const ezMat3 IdentityMatrix(); // [tested]

  /// \brief Returns a Zero Matrix.
  static const ezMat3 ZeroMatrix(); // [tested]

  /// \brief Transposes this matrix.
  void Transpose(); // [tested]

  /// \brief Returns the transpose of this matrix.
  const ezMat3 GetTranspose() const; // [tested]

  /// \brief Inverts this matrix. Return value indicates whether the matrix could be Inverted.
  ezResult Invert(float fEpsilon = ezMath_SmallEpsilon); // [tested]

  /// \brief Returns the inverse of this matrix.
  const ezMat3 GetInverse() const; // [tested]

// *** Checks ***
public:

  /// \brief Checks whether all elements are zero.
  bool IsZero(float fEpsilon = ezMath_DefaultEpsilon) const; // [tested]

  /// \brief Checks whether this is an identity matrix.
  bool IsIdentity(float fEpsilon = ezMath_DefaultEpsilon) const; // [tested]

  /// \brief Checks whether all components are finite numbers.
  bool IsValid() const; // [tested]


// *** Special Accessors ***
public:

  /// \brief Returns all 3 components of the i-th row.
  ezVec3 GetRow(ezUInt32 uiRow) const; // [tested]

  /// \brief Sets all 3 components of the i-th row.
  void SetRow(ezUInt32 uiRow, const ezVec3& row); // [tested]

  /// \brief Returns all 3 components of the i-th column.
  ezVec3 GetColumn(ezUInt32 uiColumn) const; // [tested]

  /// \brief Sets all 3 components of the i-th column.
  void SetColumn(ezUInt32 uiColumn, const ezVec3& column); // [tested]

  /// \brief Returns all 3 components on the diagonal of the matrix.
  ezVec3 GetDiagonal() const; // [tested]

  /// \brief Sets all 3 components on the diagonal of the matrix.
  void SetDiagonal(const ezVec3& diag); // [tested]


// *** Operators ***
public:

  /// \brief Matrix-vector multiplication, assuming the 4th component of the vector is zero. So, rotation/scaling only. Useful as an optimization.
  const ezVec3 TransformDirection(const ezVec3& v) const; // [tested]

  /// \brief Component-wise multiplication (commutative)
  void operator*= (float f);

  /// \brief Component-wise division.
  void operator/= (float f); // [tested]

  /// \brief Equality Check.
  bool IsIdentical(const ezMat3& rhs) const; // [tested]

  /// \brief Equality Check with epsilon.
  bool IsEqual(const ezMat3& rhs, float fEpsilon) const; // [tested]
};


// *** free functions ***

/// \brief Matrix-Matrix multiplication
const ezMat3 operator* (const ezMat3& m1, const ezMat3& m2); // [tested]

/// \brief Matrix-vector multiplication
const ezVec3 operator* (const ezMat3& m, const ezVec3& v); // [tested]

/// \brief Component-wise multiplication (commutative)
const ezMat3 operator* (const ezMat3& m1, float f); // [tested]

/// \brief Component-wise multiplication (commutative)
const ezMat3 operator* (float f, const ezMat3& m1); // [tested]

/// \brief Component-wise division
const ezMat3 operator/ (const ezMat3& m1, float f); // [tested]

/// \brief Adding two matrices (component-wise)
const ezMat3 operator+ (const ezMat3& m1, const ezMat3& m2); // [tested]

/// \brief Subtracting two matrices (component-wise)
const ezMat3 operator- (const ezMat3& m1, const ezMat3& m2); // [tested]

/// \brief Comparison Operator ==
bool operator== (const ezMat3& lhs, const ezMat3& rhs); // [tested]

/// \brief Comparison Operator !=
bool operator!= (const ezMat3& lhs, const ezMat3& rhs); // [tested]

#include <Foundation/Math/Implementation/Mat3_inl.h>




