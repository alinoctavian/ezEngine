
import __GameObject = require("TypeScript/ez/GameObject")
export import GameObject = __GameObject.GameObject;

import __Component = require("TypeScript/ez/Component")
export import Component = __Component.Component;

import __Vec2 = require("TypeScript/ez/Vec2")
export import Vec2 = __Vec2.Vec2;

import __Vec3 = require("TypeScript/ez/Vec3")
export import Vec3 = __Vec3.Vec3;

import __Mat3 = require("TypeScript/ez/Mat3")
export import Mat3 = __Mat3.Mat3;

import __Mat4 = require("TypeScript/ez/Mat4")
export import Mat4 = __Mat4.Mat4;

import __Quat = require("TypeScript/ez/Quat")
export import Quat = __Quat.Quat;

import __Transform = require("TypeScript/ez/Transform")
export import Transform = __Transform.Transform;

import __Color = require("TypeScript/ez/Color")
export import Color = __Color.Color;

import __Time = require("TypeScript/ez/Time")
export import Time = __Time.Time;

import __Angle = require("TypeScript/ez/Angle")
export import Angle = __Angle.Angle;

import Enum = require("./AllEnums")
import Flags = require("./AllFlags")

declare function __CPP_ComponentProperty_get(component: Component, id: number);
declare function __CPP_ComponentProperty_set(component: Component, id: number, value);
declare function __CPP_ComponentFunction_Call(component: Component, id: number, ...args);

export class DebugRenderComponent extends Component
{
  public static GetTypeNameHash(): number { return 2150378396; }
  get Size(): number { return __CPP_ComponentProperty_get(this, 602693538); }
  set Size(value: number) { __CPP_ComponentProperty_set(this, 602693538, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 1975722182); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 1975722182, value); }
  get Texture(): string { return __CPP_ComponentProperty_get(this, 3130406697); }
  set Texture(value: string) { __CPP_ComponentProperty_set(this, 3130406697, value); }
  get Render(): Flags.DebugRenderComponentMask { return __CPP_ComponentProperty_get(this, 1810477408); }
  set Render(value: Flags.DebugRenderComponentMask) { __CPP_ComponentProperty_set(this, 1810477408, value); }
}

export class DemoComponent extends Component
{
  public static GetTypeNameHash(): number { return 3019096534; }
  get Amplitude(): number { return __CPP_ComponentProperty_get(this, 2514465050); }
  set Amplitude(value: number) { __CPP_ComponentProperty_set(this, 2514465050, value); }
  get Speed(): number { return __CPP_ComponentProperty_get(this, 2684019077); }
  set Speed(value: number) { __CPP_ComponentProperty_set(this, 2684019077, value); }
}

export class DisplayMsgComponent extends Component
{
  public static GetTypeNameHash(): number { return 1799170045; }
}

export class SendMsgComponent extends Component
{
  public static GetTypeNameHash(): number { return 2012803944; }
}

export class AgentSteeringComponent extends Component
{
  public static GetTypeNameHash(): number { return 2433025557; }
  SetTargetPosition(position: Vec3): void { __CPP_ComponentFunction_Call(this, 4016534758, position); }
  GetTargetPosition(): Vec3 { return __CPP_ComponentFunction_Call(this, 629215995); }
  ClearTargetPosition(): void { __CPP_ComponentFunction_Call(this, 4223648572); }
}

export class RenderComponent extends Component
{
  public static GetTypeNameHash(): number { return 1331355654; }
}

export class AlwaysVisibleComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 3808449846; }
}

export class SettingsComponent extends Component
{
  public static GetTypeNameHash(): number { return 1750614835; }
}

export class AmbientLightComponent extends SettingsComponent
{
  public static GetTypeNameHash(): number { return 1655272966; }
  get TopColor(): Color { return __CPP_ComponentProperty_get(this, 4055584569); }
  set TopColor(value: Color) { __CPP_ComponentProperty_set(this, 4055584569, value); }
  get BottomColor(): Color { return __CPP_ComponentProperty_get(this, 3763477789); }
  set BottomColor(value: Color) { __CPP_ComponentProperty_set(this, 3763477789, value); }
  get Intensity(): number { return __CPP_ComponentProperty_get(this, 1142599221); }
  set Intensity(value: number) { __CPP_ComponentProperty_set(this, 1142599221, value); }
}

export class MeshComponentBase extends RenderComponent
{
  public static GetTypeNameHash(): number { return 3838468365; }
}

export class SkinnedMeshComponent extends MeshComponentBase
{
  public static GetTypeNameHash(): number { return 1464511153; }
  get Mesh(): string { return __CPP_ComponentProperty_get(this, 2274268843); }
  set Mesh(value: string) { __CPP_ComponentProperty_set(this, 2274268843, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 3981214309); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 3981214309, value); }
}

export class AnimatedMeshComponent extends SkinnedMeshComponent
{
  public static GetTypeNameHash(): number { return 1356608274; }
}

export class AnimationControllerComponent extends Component
{
  public static GetTypeNameHash(): number { return 1449604100; }
  get AnimController(): string { return __CPP_ComponentProperty_get(this, 1763743819); }
  set AnimController(value: string) { __CPP_ComponentProperty_set(this, 1763743819, value); }
}

export class AreaDamageComponent extends Component
{
  public static GetTypeNameHash(): number { return 1814801746; }
  ApplyAreaDamage(): void { __CPP_ComponentFunction_Call(this, 1626975724); }
  get OnCreation(): boolean { return __CPP_ComponentProperty_get(this, 1094944095); }
  set OnCreation(value: boolean) { __CPP_ComponentProperty_set(this, 1094944095, value); }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 3181924921); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 3181924921, value); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 425141614); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 425141614, value); }
  get Damage(): number { return __CPP_ComponentProperty_get(this, 3549017466); }
  set Damage(value: number) { __CPP_ComponentProperty_set(this, 3549017466, value); }
  get Impulse(): number { return __CPP_ComponentProperty_get(this, 2310987997); }
  set Impulse(value: number) { __CPP_ComponentProperty_set(this, 2310987997, value); }
}

export class BeamComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 3054475186; }
  get TargetObject(): string { return __CPP_ComponentProperty_get(this, 4047713065); }
  set TargetObject(value: string) { __CPP_ComponentProperty_set(this, 4047713065, value); }
  get Material(): string { return __CPP_ComponentProperty_get(this, 742360141); }
  set Material(value: string) { __CPP_ComponentProperty_set(this, 742360141, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 1592367954); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 1592367954, value); }
  get Width(): number { return __CPP_ComponentProperty_get(this, 3161639904); }
  set Width(value: number) { __CPP_ComponentProperty_set(this, 3161639904, value); }
  get UVUnitsPerWorldUnit(): number { return __CPP_ComponentProperty_get(this, 676201184); }
  set UVUnitsPerWorldUnit(value: number) { __CPP_ComponentProperty_set(this, 676201184, value); }
}

export class CameraComponent extends Component
{
  public static GetTypeNameHash(): number { return 399384073; }
  get EditorShortcut(): number { return __CPP_ComponentProperty_get(this, 3983516621); }
  set EditorShortcut(value: number) { __CPP_ComponentProperty_set(this, 3983516621, value); }
  get UsageHint(): Enum.CameraUsageHint { return __CPP_ComponentProperty_get(this, 377758853); }
  set UsageHint(value: Enum.CameraUsageHint) { __CPP_ComponentProperty_set(this, 377758853, value); }
  get Mode(): Enum.CameraMode { return __CPP_ComponentProperty_get(this, 2647822527); }
  set Mode(value: Enum.CameraMode) { __CPP_ComponentProperty_set(this, 2647822527, value); }
  get RenderTarget(): string { return __CPP_ComponentProperty_get(this, 2058514322); }
  set RenderTarget(value: string) { __CPP_ComponentProperty_set(this, 2058514322, value); }
  get RenderTargetOffset(): Vec2 { return __CPP_ComponentProperty_get(this, 217065525); }
  set RenderTargetOffset(value: Vec2) { __CPP_ComponentProperty_set(this, 217065525, value); }
  get RenderTargetSize(): Vec2 { return __CPP_ComponentProperty_get(this, 3840538309); }
  set RenderTargetSize(value: Vec2) { __CPP_ComponentProperty_set(this, 3840538309, value); }
  get NearPlane(): number { return __CPP_ComponentProperty_get(this, 2333990868); }
  set NearPlane(value: number) { __CPP_ComponentProperty_set(this, 2333990868, value); }
  get FarPlane(): number { return __CPP_ComponentProperty_get(this, 380471032); }
  set FarPlane(value: number) { __CPP_ComponentProperty_set(this, 380471032, value); }
  get FOV(): number { return __CPP_ComponentProperty_get(this, 159882140); }
  set FOV(value: number) { __CPP_ComponentProperty_set(this, 159882140, value); }
  get Dimensions(): number { return __CPP_ComponentProperty_get(this, 3619040875); }
  set Dimensions(value: number) { __CPP_ComponentProperty_set(this, 3619040875, value); }
  get CameraRenderPipeline(): string { return __CPP_ComponentProperty_get(this, 1461435618); }
  set CameraRenderPipeline(value: string) { __CPP_ComponentProperty_set(this, 1461435618, value); }
  get Aperture(): number { return __CPP_ComponentProperty_get(this, 2434424955); }
  set Aperture(value: number) { __CPP_ComponentProperty_set(this, 2434424955, value); }
  get ShutterTime(): number { return __CPP_ComponentProperty_get(this, 1229310217); }
  set ShutterTime(value: number) { __CPP_ComponentProperty_set(this, 1229310217, value); }
  get ISO(): number { return __CPP_ComponentProperty_get(this, 2015108855); }
  set ISO(value: number) { __CPP_ComponentProperty_set(this, 2015108855, value); }
  get ExposureCompensation(): number { return __CPP_ComponentProperty_get(this, 2490173364); }
  set ExposureCompensation(value: number) { __CPP_ComponentProperty_set(this, 2490173364, value); }
  get ShowStats(): boolean { return __CPP_ComponentProperty_get(this, 602803161); }
  set ShowStats(value: boolean) { __CPP_ComponentProperty_set(this, 602803161, value); }
}

export class CharacterControllerComponent extends Component
{
  public static GetTypeNameHash(): number { return 3855358184; }
  RawMove(moveDeltaGlobal: Vec3): void { __CPP_ComponentFunction_Call(this, 2989659834, moveDeltaGlobal); }
  TeleportCharacter(globalFootPosition: Vec3): void { __CPP_ComponentFunction_Call(this, 3942687383, globalFootPosition); }
  IsDestinationUnobstructed(globalFootPosition: Vec3, characterHeight: number): boolean { return __CPP_ComponentFunction_Call(this, 1759721276, globalFootPosition, characterHeight); }
}

export class CollectionComponent extends Component
{
  public static GetTypeNameHash(): number { return 1842091837; }
  get Collection(): string { return __CPP_ComponentProperty_get(this, 1385393910); }
  set Collection(value: string) { __CPP_ComponentProperty_set(this, 1385393910, value); }
}

export class ColorAnimationComponent extends Component
{
  public static GetTypeNameHash(): number { return 3982813566; }
  get Gradient(): string { return __CPP_ComponentProperty_get(this, 1405509525); }
  set Gradient(value: string) { __CPP_ComponentProperty_set(this, 1405509525, value); }
  get Duration(): number { return __CPP_ComponentProperty_get(this, 329619611); }
  set Duration(value: number) { __CPP_ComponentProperty_set(this, 329619611, value); }
  get SetColorMode(): Enum.SetColorMode { return __CPP_ComponentProperty_get(this, 3365169082); }
  set SetColorMode(value: Enum.SetColorMode) { __CPP_ComponentProperty_set(this, 3365169082, value); }
  get AnimationMode(): Enum.PropertyAnimMode { return __CPP_ComponentProperty_get(this, 850528577); }
  set AnimationMode(value: Enum.PropertyAnimMode) { __CPP_ComponentProperty_set(this, 850528577, value); }
  get RandomStartOffset(): boolean { return __CPP_ComponentProperty_get(this, 282178386); }
  set RandomStartOffset(value: boolean) { __CPP_ComponentProperty_set(this, 282178386, value); }
  get ApplyToChildren(): boolean { return __CPP_ComponentProperty_get(this, 1543662045); }
  set ApplyToChildren(value: boolean) { __CPP_ComponentProperty_set(this, 1543662045, value); }
}

export class DebugTextComponent extends Component
{
  public static GetTypeNameHash(): number { return 752500620; }
  get Text(): string { return __CPP_ComponentProperty_get(this, 676134654); }
  set Text(value: string) { __CPP_ComponentProperty_set(this, 676134654, value); }
  get Value0(): number { return __CPP_ComponentProperty_get(this, 869502225); }
  set Value0(value: number) { __CPP_ComponentProperty_set(this, 869502225, value); }
  get Value1(): number { return __CPP_ComponentProperty_get(this, 775705132); }
  set Value1(value: number) { __CPP_ComponentProperty_set(this, 775705132, value); }
  get Value2(): number { return __CPP_ComponentProperty_get(this, 1768733809); }
  set Value2(value: number) { __CPP_ComponentProperty_set(this, 1768733809, value); }
  get Value3(): number { return __CPP_ComponentProperty_get(this, 1816166542); }
  set Value3(value: number) { __CPP_ComponentProperty_set(this, 1816166542, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 1881354469); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 1881354469, value); }
}

export class DecalComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2317758174; }
  get ProjectionAxis(): Enum.BasisAxis { return __CPP_ComponentProperty_get(this, 2835729844); }
  set ProjectionAxis(value: Enum.BasisAxis) { __CPP_ComponentProperty_set(this, 2835729844, value); }
  get Extents(): Vec3 { return __CPP_ComponentProperty_get(this, 1588442994); }
  set Extents(value: Vec3) { __CPP_ComponentProperty_set(this, 1588442994, value); }
  get SizeVariance(): number { return __CPP_ComponentProperty_get(this, 2095302921); }
  set SizeVariance(value: number) { __CPP_ComponentProperty_set(this, 2095302921, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 2286083006); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 2286083006, value); }
  get EmissiveColor(): Color { return __CPP_ComponentProperty_get(this, 2763898085); }
  set EmissiveColor(value: Color) { __CPP_ComponentProperty_set(this, 2763898085, value); }
  get SortOrder(): number { return __CPP_ComponentProperty_get(this, 2393756233); }
  set SortOrder(value: number) { __CPP_ComponentProperty_set(this, 2393756233, value); }
  get WrapAround(): boolean { return __CPP_ComponentProperty_get(this, 3404680148); }
  set WrapAround(value: boolean) { __CPP_ComponentProperty_set(this, 3404680148, value); }
  get MapNormalToGeometry(): boolean { return __CPP_ComponentProperty_get(this, 2511527943); }
  set MapNormalToGeometry(value: boolean) { __CPP_ComponentProperty_set(this, 2511527943, value); }
  get InnerFadeAngle(): number { return __CPP_ComponentProperty_get(this, 4277744763); }
  set InnerFadeAngle(value: number) { __CPP_ComponentProperty_set(this, 4277744763, value); }
  get OuterFadeAngle(): number { return __CPP_ComponentProperty_get(this, 2290285157); }
  set OuterFadeAngle(value: number) { __CPP_ComponentProperty_set(this, 2290285157, value); }
  get FadeOutDuration(): number { return __CPP_ComponentProperty_get(this, 4012256443); }
  set FadeOutDuration(value: number) { __CPP_ComponentProperty_set(this, 4012256443, value); }
  get OnFinishedAction(): Enum.OnComponentFinishedAction { return __CPP_ComponentProperty_get(this, 428775208); }
  set OnFinishedAction(value: Enum.OnComponentFinishedAction) { __CPP_ComponentProperty_set(this, 428775208, value); }
  get ApplyToDynamic(): string { return __CPP_ComponentProperty_get(this, 2082908993); }
  set ApplyToDynamic(value: string) { __CPP_ComponentProperty_set(this, 2082908993, value); }
}

export class DeviceTrackingComponent extends Component
{
  public static GetTypeNameHash(): number { return 3500774039; }
  get DeviceType(): Enum.XRDeviceType { return __CPP_ComponentProperty_get(this, 1370408087); }
  set DeviceType(value: Enum.XRDeviceType) { __CPP_ComponentProperty_set(this, 1370408087, value); }
  get PoseLocation(): Enum.XRPoseLocation { return __CPP_ComponentProperty_get(this, 90502617); }
  set PoseLocation(value: Enum.XRPoseLocation) { __CPP_ComponentProperty_set(this, 90502617, value); }
  get TransformSpace(): Enum.XRTransformSpace { return __CPP_ComponentProperty_get(this, 123171866); }
  set TransformSpace(value: Enum.XRTransformSpace) { __CPP_ComponentProperty_set(this, 123171866, value); }
  get Rotation(): boolean { return __CPP_ComponentProperty_get(this, 731647032); }
  set Rotation(value: boolean) { __CPP_ComponentProperty_set(this, 731647032, value); }
  get Scale(): boolean { return __CPP_ComponentProperty_get(this, 1034704341); }
  set Scale(value: boolean) { __CPP_ComponentProperty_set(this, 1034704341, value); }
}

export class LightComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 3732905662; }
  get LightColor(): Color { return __CPP_ComponentProperty_get(this, 1934568030); }
  set LightColor(value: Color) { __CPP_ComponentProperty_set(this, 1934568030, value); }
  get Intensity(): number { return __CPP_ComponentProperty_get(this, 2874814740); }
  set Intensity(value: number) { __CPP_ComponentProperty_set(this, 2874814740, value); }
  get CastShadows(): boolean { return __CPP_ComponentProperty_get(this, 250551917); }
  set CastShadows(value: boolean) { __CPP_ComponentProperty_set(this, 250551917, value); }
  get PenumbraSize(): number { return __CPP_ComponentProperty_get(this, 3718860233); }
  set PenumbraSize(value: number) { __CPP_ComponentProperty_set(this, 3718860233, value); }
  get SlopeBias(): number { return __CPP_ComponentProperty_get(this, 3444063500); }
  set SlopeBias(value: number) { __CPP_ComponentProperty_set(this, 3444063500, value); }
  get ConstantBias(): number { return __CPP_ComponentProperty_get(this, 3565918648); }
  set ConstantBias(value: number) { __CPP_ComponentProperty_set(this, 3565918648, value); }
}

export class DirectionalLightComponent extends LightComponent
{
  public static GetTypeNameHash(): number { return 3687235078; }
  get NumCascades(): number { return __CPP_ComponentProperty_get(this, 4241707254); }
  set NumCascades(value: number) { __CPP_ComponentProperty_set(this, 4241707254, value); }
  get MinShadowRange(): number { return __CPP_ComponentProperty_get(this, 4063057648); }
  set MinShadowRange(value: number) { __CPP_ComponentProperty_set(this, 4063057648, value); }
  get FadeOutStart(): number { return __CPP_ComponentProperty_get(this, 1106469026); }
  set FadeOutStart(value: number) { __CPP_ComponentProperty_set(this, 1106469026, value); }
  get SplitModeWeight(): number { return __CPP_ComponentProperty_get(this, 2604859805); }
  set SplitModeWeight(value: number) { __CPP_ComponentProperty_set(this, 2604859805, value); }
  get NearPlaneOffset(): number { return __CPP_ComponentProperty_get(this, 1922790091); }
  set NearPlaneOffset(value: number) { __CPP_ComponentProperty_set(this, 1922790091, value); }
}

export class EventMessageHandlerComponent extends Component
{
  public static GetTypeNameHash(): number { return 2410982864; }
  get HandleGlobalEvents(): boolean { return __CPP_ComponentProperty_get(this, 363574155); }
  set HandleGlobalEvents(value: boolean) { __CPP_ComponentProperty_set(this, 363574155, value); }
}

export class FmodComponent extends Component
{
  public static GetTypeNameHash(): number { return 3900472244; }
}

export class FmodEventComponent extends FmodComponent
{
  public static GetTypeNameHash(): number { return 2814833380; }
  Restart(): void { __CPP_ComponentFunction_Call(this, 958670764); }
  StartOneShot(): void { __CPP_ComponentFunction_Call(this, 1161139504); }
  StopSound(Immediate: boolean): void { __CPP_ComponentFunction_Call(this, 502299734, Immediate); }
  SoundCue(): void { __CPP_ComponentFunction_Call(this, 366471496); }
  SetEventParameter(ParamName: string, Value: number): void { __CPP_ComponentFunction_Call(this, 2121876374, ParamName, Value); }
  get Paused(): boolean { return __CPP_ComponentProperty_get(this, 3424531128); }
  set Paused(value: boolean) { __CPP_ComponentProperty_set(this, 3424531128, value); }
  get Volume(): number { return __CPP_ComponentProperty_get(this, 4162464906); }
  set Volume(value: number) { __CPP_ComponentProperty_set(this, 4162464906, value); }
  get Pitch(): number { return __CPP_ComponentProperty_get(this, 3779070326); }
  set Pitch(value: number) { __CPP_ComponentProperty_set(this, 3779070326, value); }
  get SoundEvent(): string { return __CPP_ComponentProperty_get(this, 2550082732); }
  set SoundEvent(value: string) { __CPP_ComponentProperty_set(this, 2550082732, value); }
  get UseOcclusion(): boolean { return __CPP_ComponentProperty_get(this, 1709596494); }
  set UseOcclusion(value: boolean) { __CPP_ComponentProperty_set(this, 1709596494, value); }
  get OcclusionThreshold(): number { return __CPP_ComponentProperty_get(this, 1819793160); }
  set OcclusionThreshold(value: number) { __CPP_ComponentProperty_set(this, 1819793160, value); }
  get OcclusionCollisionLayer(): number { return __CPP_ComponentProperty_get(this, 372633314); }
  set OcclusionCollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 372633314, value); }
  get OnFinishedAction(): Enum.OnComponentFinishedAction { return __CPP_ComponentProperty_get(this, 2674070426); }
  set OnFinishedAction(value: Enum.OnComponentFinishedAction) { __CPP_ComponentProperty_set(this, 2674070426, value); }
  get ShowDebugInfo(): boolean { return __CPP_ComponentProperty_get(this, 2784458228); }
  set ShowDebugInfo(value: boolean) { __CPP_ComponentProperty_set(this, 2784458228, value); }
}

export class FmodListenerComponent extends FmodComponent
{
  public static GetTypeNameHash(): number { return 98225585; }
  get ListenerIndex(): number { return __CPP_ComponentProperty_get(this, 826440037); }
  set ListenerIndex(value: number) { __CPP_ComponentProperty_set(this, 826440037, value); }
}

export class FogComponent extends SettingsComponent
{
  public static GetTypeNameHash(): number { return 3095518117; }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 3730513872); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 3730513872, value); }
  get Density(): number { return __CPP_ComponentProperty_get(this, 3233698728); }
  set Density(value: number) { __CPP_ComponentProperty_set(this, 3233698728, value); }
  get HeightFalloff(): number { return __CPP_ComponentProperty_get(this, 1854481097); }
  set HeightFalloff(value: number) { __CPP_ComponentProperty_set(this, 1854481097, value); }
}

export class MeshComponent extends MeshComponentBase
{
  public static GetTypeNameHash(): number { return 481758555; }
  get Mesh(): string { return __CPP_ComponentProperty_get(this, 1864394775); }
  set Mesh(value: string) { __CPP_ComponentProperty_set(this, 1864394775, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 1079163548); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 1079163548, value); }
}

export class GizmoComponent extends MeshComponent
{
  public static GetTypeNameHash(): number { return 1286849521; }
}

export class GrabbableItemComponent extends Component
{
  public static GetTypeNameHash(): number { return 3683886134; }
}

export class GreyBoxComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 1977995121; }
  get Shape(): Enum.GreyBoxShape { return __CPP_ComponentProperty_get(this, 861097748); }
  set Shape(value: Enum.GreyBoxShape) { __CPP_ComponentProperty_set(this, 861097748, value); }
  get Material(): string { return __CPP_ComponentProperty_get(this, 3493112051); }
  set Material(value: string) { __CPP_ComponentProperty_set(this, 3493112051, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 457155504); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 457155504, value); }
  get SizeNegX(): number { return __CPP_ComponentProperty_get(this, 1628214514); }
  set SizeNegX(value: number) { __CPP_ComponentProperty_set(this, 1628214514, value); }
  get SizePosX(): number { return __CPP_ComponentProperty_get(this, 608676239); }
  set SizePosX(value: number) { __CPP_ComponentProperty_set(this, 608676239, value); }
  get SizeNegY(): number { return __CPP_ComponentProperty_get(this, 1931762144); }
  set SizeNegY(value: number) { __CPP_ComponentProperty_set(this, 1931762144, value); }
  get SizePosY(): number { return __CPP_ComponentProperty_get(this, 3393461640); }
  set SizePosY(value: number) { __CPP_ComponentProperty_set(this, 3393461640, value); }
  get SizeNegZ(): number { return __CPP_ComponentProperty_get(this, 2278470836); }
  set SizeNegZ(value: number) { __CPP_ComponentProperty_set(this, 2278470836, value); }
  get SizePosZ(): number { return __CPP_ComponentProperty_get(this, 3664653916); }
  set SizePosZ(value: number) { __CPP_ComponentProperty_set(this, 3664653916, value); }
  get Detail(): number { return __CPP_ComponentProperty_get(this, 509925246); }
  set Detail(value: number) { __CPP_ComponentProperty_set(this, 509925246, value); }
  get Curvature(): number { return __CPP_ComponentProperty_get(this, 3496336964); }
  set Curvature(value: number) { __CPP_ComponentProperty_set(this, 3496336964, value); }
  get Thickness(): number { return __CPP_ComponentProperty_get(this, 2680750755); }
  set Thickness(value: number) { __CPP_ComponentProperty_set(this, 2680750755, value); }
  get SlopedTop(): boolean { return __CPP_ComponentProperty_get(this, 321690466); }
  set SlopedTop(value: boolean) { __CPP_ComponentProperty_set(this, 321690466, value); }
  get SlopedBottom(): boolean { return __CPP_ComponentProperty_get(this, 1032913302); }
  set SlopedBottom(value: boolean) { __CPP_ComponentProperty_set(this, 1032913302, value); }
}

export class HeadBoneComponent extends Component
{
  public static GetTypeNameHash(): number { return 922575998; }
  SetVerticalRotation(Radians: number): void { __CPP_ComponentFunction_Call(this, 1988528221, Radians); }
  ChangeVerticalRotation(Radians: number): void { __CPP_ComponentFunction_Call(this, 2824752632, Radians); }
  get VerticalRotation(): number { return __CPP_ComponentProperty_get(this, 3837909370); }
  set VerticalRotation(value: number) { __CPP_ComponentProperty_set(this, 3837909370, value); }
}

export class InputComponent extends Component
{
  public static GetTypeNameHash(): number { return 3356365986; }
  GetCurrentInputState(InputAction: string, OnlyKeyPressed: boolean): number { return __CPP_ComponentFunction_Call(this, 203962772, InputAction, OnlyKeyPressed); }
  get InputSet(): string { return __CPP_ComponentProperty_get(this, 3122856233); }
  set InputSet(value: string) { __CPP_ComponentProperty_set(this, 3122856233, value); }
  get Granularity(): Enum.InputMessageGranularity { return __CPP_ComponentProperty_get(this, 4138318112); }
  set Granularity(value: Enum.InputMessageGranularity) { __CPP_ComponentProperty_set(this, 4138318112, value); }
}

export class InstancedMeshComponent extends MeshComponentBase
{
  public static GetTypeNameHash(): number { return 3725395076; }
  get Mesh(): string { return __CPP_ComponentProperty_get(this, 1897303241); }
  set Mesh(value: string) { __CPP_ComponentProperty_set(this, 1897303241, value); }
  get MainColor(): Color { return __CPP_ComponentProperty_get(this, 494953498); }
  set MainColor(value: Color) { __CPP_ComponentProperty_set(this, 494953498, value); }
}

export class JointAttachmentComponent extends Component
{
  public static GetTypeNameHash(): number { return 2994552942; }
  get JointName(): string { return __CPP_ComponentProperty_get(this, 3084471528); }
  set JointName(value: string) { __CPP_ComponentProperty_set(this, 3084471528, value); }
}

export class KrautTreeComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 3294337085; }
  get KrautTree(): string { return __CPP_ComponentProperty_get(this, 149428869); }
  set KrautTree(value: string) { __CPP_ComponentProperty_set(this, 149428869, value); }
}

export class LineToComponent extends Component
{
  public static GetTypeNameHash(): number { return 1533979394; }
  get Target(): string { return __CPP_ComponentProperty_get(this, 3996901481); }
  set Target(value: string) { __CPP_ComponentProperty_set(this, 3996901481, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 3876071147); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 3876071147, value); }
}

export class MarkerComponent extends Component
{
  public static GetTypeNameHash(): number { return 1601973565; }
  get Marker(): string { return __CPP_ComponentProperty_get(this, 930410843); }
  set Marker(value: string) { __CPP_ComponentProperty_set(this, 930410843, value); }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 999589493); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 999589493, value); }
}

export class MoveToComponent extends Component
{
  public static GetTypeNameHash(): number { return 1748098642; }
  SetTargetPosition(position: Vec3): void { __CPP_ComponentFunction_Call(this, 214604455, position); }
  get Running(): boolean { return __CPP_ComponentProperty_get(this, 279845198); }
  set Running(value: boolean) { __CPP_ComponentProperty_set(this, 279845198, value); }
  get TranslationSpeed(): number { return __CPP_ComponentProperty_get(this, 2033833829); }
  set TranslationSpeed(value: number) { __CPP_ComponentProperty_set(this, 2033833829, value); }
  get TranslationAcceleration(): number { return __CPP_ComponentProperty_get(this, 2021440494); }
  set TranslationAcceleration(value: number) { __CPP_ComponentProperty_set(this, 2021440494, value); }
  get TranslationDeceleration(): number { return __CPP_ComponentProperty_get(this, 1103628369); }
  set TranslationDeceleration(value: number) { __CPP_ComponentProperty_set(this, 1103628369, value); }
}

export class NpcComponent extends Component
{
  public static GetTypeNameHash(): number { return 3286107829; }
}

export class ParticleComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2686675370; }
  StartEffect(): boolean { return __CPP_ComponentFunction_Call(this, 2033083937); }
  StopEffect(): void { __CPP_ComponentFunction_Call(this, 3349038782); }
  InterruptEffect(): void { __CPP_ComponentFunction_Call(this, 3574566604); }
  IsEffectActive(): boolean { return __CPP_ComponentFunction_Call(this, 1214294675); }
  get Effect(): string { return __CPP_ComponentProperty_get(this, 3484195627); }
  set Effect(value: string) { __CPP_ComponentProperty_set(this, 3484195627, value); }
  get SpawnAtStart(): boolean { return __CPP_ComponentProperty_get(this, 1150464054); }
  set SpawnAtStart(value: boolean) { __CPP_ComponentProperty_set(this, 1150464054, value); }
  get OnFinishedAction(): Enum.OnComponentFinishedAction2 { return __CPP_ComponentProperty_get(this, 1953865125); }
  set OnFinishedAction(value: Enum.OnComponentFinishedAction2) { __CPP_ComponentProperty_set(this, 1953865125, value); }
  get MinRestartDelay(): number { return __CPP_ComponentProperty_get(this, 4025812929); }
  set MinRestartDelay(value: number) { __CPP_ComponentProperty_set(this, 4025812929, value); }
  get RestartDelayRange(): number { return __CPP_ComponentProperty_get(this, 1168028766); }
  set RestartDelayRange(value: number) { __CPP_ComponentProperty_set(this, 1168028766, value); }
  get RandomSeed(): number { return __CPP_ComponentProperty_get(this, 3044836071); }
  set RandomSeed(value: number) { __CPP_ComponentProperty_set(this, 3044836071, value); }
  get SpawnDirection(): Enum.BasisAxis { return __CPP_ComponentProperty_get(this, 3051994722); }
  set SpawnDirection(value: Enum.BasisAxis) { __CPP_ComponentProperty_set(this, 3051994722, value); }
  get IgnoreOwnerRotation(): boolean { return __CPP_ComponentProperty_get(this, 532070852); }
  set IgnoreOwnerRotation(value: boolean) { __CPP_ComponentProperty_set(this, 532070852, value); }
  get SharedInstanceName(): string { return __CPP_ComponentProperty_get(this, 2480396375); }
  set SharedInstanceName(value: string) { __CPP_ComponentProperty_set(this, 2480396375, value); }
}

export class ParticleFinisherComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 1971050762; }
}

export class PlayerStartPointComponent extends Component
{
  public static GetTypeNameHash(): number { return 420623154; }
  get PlayerPrefab(): string { return __CPP_ComponentProperty_get(this, 586140687); }
  set PlayerPrefab(value: string) { __CPP_ComponentProperty_set(this, 586140687, value); }
}

export class PointLightComponent extends LightComponent
{
  public static GetTypeNameHash(): number { return 2694457879; }
  get Range(): number { return __CPP_ComponentProperty_get(this, 2070313016); }
  set Range(value: number) { __CPP_ComponentProperty_set(this, 2070313016, value); }
}

export class PrefabReferenceComponent extends Component
{
  public static GetTypeNameHash(): number { return 2790782988; }
  get Prefab(): string { return __CPP_ComponentProperty_get(this, 3332257502); }
  set Prefab(value: string) { __CPP_ComponentProperty_set(this, 3332257502, value); }
}

export class ProcPlacementComponent extends Component
{
  public static GetTypeNameHash(): number { return 1343147442; }
  get Resource(): string { return __CPP_ComponentProperty_get(this, 1067834854); }
  set Resource(value: string) { __CPP_ComponentProperty_set(this, 1067834854, value); }
}

export class ProcVertexColorComponent extends MeshComponent
{
  public static GetTypeNameHash(): number { return 2622601802; }
  get Resource(): string { return __CPP_ComponentProperty_get(this, 1002571815); }
  set Resource(value: string) { __CPP_ComponentProperty_set(this, 1002571815, value); }
}

export class ProcVolumeComponent extends Component
{
  public static GetTypeNameHash(): number { return 2813749526; }
  get Value(): number { return __CPP_ComponentProperty_get(this, 1704225776); }
  set Value(value: number) { __CPP_ComponentProperty_set(this, 1704225776, value); }
  get SortOrder(): number { return __CPP_ComponentProperty_get(this, 2444394831); }
  set SortOrder(value: number) { __CPP_ComponentProperty_set(this, 2444394831, value); }
  get BlendMode(): Enum.ProcGenBlendMode { return __CPP_ComponentProperty_get(this, 3655564376); }
  set BlendMode(value: Enum.ProcGenBlendMode) { __CPP_ComponentProperty_set(this, 3655564376, value); }
}

export class ProcVolumeBoxComponent extends ProcVolumeComponent
{
  public static GetTypeNameHash(): number { return 1473169506; }
  get Extents(): Vec3 { return __CPP_ComponentProperty_get(this, 1294043772); }
  set Extents(value: Vec3) { __CPP_ComponentProperty_set(this, 1294043772, value); }
  get FadeOutStart(): Vec3 { return __CPP_ComponentProperty_get(this, 3293988461); }
  set FadeOutStart(value: Vec3) { __CPP_ComponentProperty_set(this, 3293988461, value); }
}

export class ProcVolumeSphereComponent extends ProcVolumeComponent
{
  public static GetTypeNameHash(): number { return 1516368222; }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 3489263427); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 3489263427, value); }
  get FadeOutStart(): number { return __CPP_ComponentProperty_get(this, 207388088); }
  set FadeOutStart(value: number) { __CPP_ComponentProperty_set(this, 207388088, value); }
}

export class ProjectileComponent extends Component
{
  public static GetTypeNameHash(): number { return 1307523631; }
  get Speed(): number { return __CPP_ComponentProperty_get(this, 2209272853); }
  set Speed(value: number) { __CPP_ComponentProperty_set(this, 2209272853, value); }
  get GravityMultiplier(): number { return __CPP_ComponentProperty_get(this, 2206024571); }
  set GravityMultiplier(value: number) { __CPP_ComponentProperty_set(this, 2206024571, value); }
  get MaxLifetime(): number { return __CPP_ComponentProperty_get(this, 2523658863); }
  set MaxLifetime(value: number) { __CPP_ComponentProperty_set(this, 2523658863, value); }
  get OnTimeoutSpawn(): string { return __CPP_ComponentProperty_get(this, 592607231); }
  set OnTimeoutSpawn(value: string) { __CPP_ComponentProperty_set(this, 592607231, value); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 1396671431); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 1396671431, value); }
  get FallbackSurface(): string { return __CPP_ComponentProperty_get(this, 1673089828); }
  set FallbackSurface(value: string) { __CPP_ComponentProperty_set(this, 1673089828, value); }
}

export class PropertyAnimComponent extends Component
{
  public static GetTypeNameHash(): number { return 3464210963; }
  PlayAnimationRange(RangeLow: number, RangeHigh: number): void { __CPP_ComponentFunction_Call(this, 3789596221, RangeLow, RangeHigh); }
  get Animation(): string { return __CPP_ComponentProperty_get(this, 3369422858); }
  set Animation(value: string) { __CPP_ComponentProperty_set(this, 3369422858, value); }
  get Playing(): boolean { return __CPP_ComponentProperty_get(this, 166357422); }
  set Playing(value: boolean) { __CPP_ComponentProperty_set(this, 166357422, value); }
  get Mode(): Enum.PropertyAnimMode { return __CPP_ComponentProperty_get(this, 1609689093); }
  set Mode(value: Enum.PropertyAnimMode) { __CPP_ComponentProperty_set(this, 1609689093, value); }
  get RandomOffset(): number { return __CPP_ComponentProperty_get(this, 3367951183); }
  set RandomOffset(value: number) { __CPP_ComponentProperty_set(this, 3367951183, value); }
  get Speed(): number { return __CPP_ComponentProperty_get(this, 459274022); }
  set Speed(value: number) { __CPP_ComponentProperty_set(this, 459274022, value); }
  get RangeLow(): number { return __CPP_ComponentProperty_get(this, 4204810908); }
  set RangeLow(value: number) { __CPP_ComponentProperty_set(this, 4204810908, value); }
  get RangeHigh(): number { return __CPP_ComponentProperty_get(this, 1788390653); }
  set RangeHigh(value: number) { __CPP_ComponentProperty_set(this, 1788390653, value); }
}

export class RaycastComponent extends Component
{
  public static GetTypeNameHash(): number { return 2138446516; }
  get MaxDistance(): number { return __CPP_ComponentProperty_get(this, 3323574171); }
  set MaxDistance(value: number) { __CPP_ComponentProperty_set(this, 3323574171, value); }
  get DisableTargetObjectOnNoHit(): boolean { return __CPP_ComponentProperty_get(this, 2418328844); }
  set DisableTargetObjectOnNoHit(value: boolean) { __CPP_ComponentProperty_set(this, 2418328844, value); }
  get RaycastEndObject(): string { return __CPP_ComponentProperty_get(this, 593248749); }
  set RaycastEndObject(value: string) { __CPP_ComponentProperty_set(this, 593248749, value); }
  get ForceTargetParentless(): boolean { return __CPP_ComponentProperty_get(this, 2358355355); }
  set ForceTargetParentless(value: boolean) { __CPP_ComponentProperty_set(this, 2358355355, value); }
  get CollisionLayerEndPoint(): number { return __CPP_ComponentProperty_get(this, 442462970); }
  set CollisionLayerEndPoint(value: number) { __CPP_ComponentProperty_set(this, 442462970, value); }
  get CollisionLayerTrigger(): number { return __CPP_ComponentProperty_get(this, 2347476005); }
  set CollisionLayerTrigger(value: number) { __CPP_ComponentProperty_set(this, 2347476005, value); }
  get TriggerMessage(): string { return __CPP_ComponentProperty_get(this, 1295093099); }
  set TriggerMessage(value: string) { __CPP_ComponentProperty_set(this, 1295093099, value); }
}

export class RcAgentComponent extends AgentSteeringComponent
{
  public static GetTypeNameHash(): number { return 4201689488; }
  get WalkSpeed(): number { return __CPP_ComponentProperty_get(this, 3941725637); }
  set WalkSpeed(value: number) { __CPP_ComponentProperty_set(this, 3941725637, value); }
}

export class RcComponent extends Component
{
  public static GetTypeNameHash(): number { return 2693024273; }
}

export class RcMarkPoiVisibleComponent extends RcComponent
{
  public static GetTypeNameHash(): number { return 2492913972; }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 3267098695); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 3267098695, value); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 2960102437); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 2960102437, value); }
}

export class RcNavMeshComponent extends RcComponent
{
  public static GetTypeNameHash(): number { return 2834181938; }
  get ShowNavMesh(): boolean { return __CPP_ComponentProperty_get(this, 2416885943); }
  set ShowNavMesh(value: boolean) { __CPP_ComponentProperty_set(this, 2416885943, value); }
}

export class RenderTargetActivatorComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2562992528; }
  get RenderTarget(): string { return __CPP_ComponentProperty_get(this, 3221140373); }
  set RenderTarget(value: string) { __CPP_ComponentProperty_set(this, 3221140373, value); }
}

export class RmlUiCanvas2DComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 487654276; }
  get RmlFile(): string { return __CPP_ComponentProperty_get(this, 2826096337); }
  set RmlFile(value: string) { __CPP_ComponentProperty_set(this, 2826096337, value); }
  get AnchorPoint(): Vec2 { return __CPP_ComponentProperty_get(this, 2220851845); }
  set AnchorPoint(value: Vec2) { __CPP_ComponentProperty_set(this, 2220851845, value); }
  get Size(): Vec2 { return __CPP_ComponentProperty_get(this, 3722256716); }
  set Size(value: Vec2) { __CPP_ComponentProperty_set(this, 3722256716, value); }
  get Offset(): Vec2 { return __CPP_ComponentProperty_get(this, 4050008644); }
  set Offset(value: Vec2) { __CPP_ComponentProperty_set(this, 4050008644, value); }
  get PassInput(): boolean { return __CPP_ComponentProperty_get(this, 2890095111); }
  set PassInput(value: boolean) { __CPP_ComponentProperty_set(this, 2890095111, value); }
}

export class TransformComponent extends Component
{
  public static GetTypeNameHash(): number { return 1680961727; }
  SetDirectionForwards(Forwards: boolean): void { __CPP_ComponentFunction_Call(this, 1772757026, Forwards); }
  IsDirectionForwards(): boolean { return __CPP_ComponentFunction_Call(this, 535634261); }
  ToggleDirection(): void { __CPP_ComponentFunction_Call(this, 1750973492); }
  get Speed(): number { return __CPP_ComponentProperty_get(this, 1320097369); }
  set Speed(value: number) { __CPP_ComponentProperty_set(this, 1320097369, value); }
  get Running(): boolean { return __CPP_ComponentProperty_get(this, 2998653796); }
  set Running(value: boolean) { __CPP_ComponentProperty_set(this, 2998653796, value); }
  get ReverseAtEnd(): boolean { return __CPP_ComponentProperty_get(this, 1093294572); }
  set ReverseAtEnd(value: boolean) { __CPP_ComponentProperty_set(this, 1093294572, value); }
  get ReverseAtStart(): boolean { return __CPP_ComponentProperty_get(this, 1892362220); }
  set ReverseAtStart(value: boolean) { __CPP_ComponentProperty_set(this, 1892362220, value); }
}

export class RotorComponent extends TransformComponent
{
  public static GetTypeNameHash(): number { return 3070814480; }
  get Axis(): Enum.BasisAxis { return __CPP_ComponentProperty_get(this, 2360317893); }
  set Axis(value: Enum.BasisAxis) { __CPP_ComponentProperty_set(this, 2360317893, value); }
  get AxisDeviation(): number { return __CPP_ComponentProperty_get(this, 1861770418); }
  set AxisDeviation(value: number) { __CPP_ComponentProperty_set(this, 1861770418, value); }
  get DegreesToRotate(): number { return __CPP_ComponentProperty_get(this, 2477849409); }
  set DegreesToRotate(value: number) { __CPP_ComponentProperty_set(this, 2477849409, value); }
  get Acceleration(): number { return __CPP_ComponentProperty_get(this, 982214252); }
  set Acceleration(value: number) { __CPP_ComponentProperty_set(this, 982214252, value); }
  get Deceleration(): number { return __CPP_ComponentProperty_get(this, 3503289027); }
  set Deceleration(value: number) { __CPP_ComponentProperty_set(this, 3503289027, value); }
}

export class ShapeIconComponent extends Component
{
  public static GetTypeNameHash(): number { return 2751457557; }
}

export class SimpleAnimationComponent extends Component
{
  public static GetTypeNameHash(): number { return 3773119732; }
  get AnimationClip(): string { return __CPP_ComponentProperty_get(this, 4114851481); }
  set AnimationClip(value: string) { __CPP_ComponentProperty_set(this, 4114851481, value); }
  get AnimationMode(): Enum.PropertyAnimMode { return __CPP_ComponentProperty_get(this, 2854264169); }
  set AnimationMode(value: Enum.PropertyAnimMode) { __CPP_ComponentProperty_set(this, 2854264169, value); }
  get Speed(): number { return __CPP_ComponentProperty_get(this, 2330469972); }
  set Speed(value: number) { __CPP_ComponentProperty_set(this, 2330469972, value); }
}

export class SimpleWindComponent extends Component
{
  public static GetTypeNameHash(): number { return 626606470; }
  get MinStrength(): number { return __CPP_ComponentProperty_get(this, 3817255569); }
  set MinStrength(value: number) { __CPP_ComponentProperty_set(this, 3817255569, value); }
  get MaxStrength(): number { return __CPP_ComponentProperty_get(this, 902461922); }
  set MaxStrength(value: number) { __CPP_ComponentProperty_set(this, 902461922, value); }
  get Deviation(): number { return __CPP_ComponentProperty_get(this, 1467194676); }
  set Deviation(value: number) { __CPP_ComponentProperty_set(this, 1467194676, value); }
}

export class SkeletonComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 1641866982; }
  get Skeleton(): string { return __CPP_ComponentProperty_get(this, 1515066319); }
  set Skeleton(value: string) { __CPP_ComponentProperty_set(this, 1515066319, value); }
  get VisualizeSkeleton(): boolean { return __CPP_ComponentProperty_get(this, 4113161467); }
  set VisualizeSkeleton(value: boolean) { __CPP_ComponentProperty_set(this, 4113161467, value); }
}

export class SkyBoxComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 1806701530; }
  get CubeMap(): string { return __CPP_ComponentProperty_get(this, 791111828); }
  set CubeMap(value: string) { __CPP_ComponentProperty_set(this, 791111828, value); }
  get ExposureBias(): number { return __CPP_ComponentProperty_get(this, 4053428649); }
  set ExposureBias(value: number) { __CPP_ComponentProperty_set(this, 4053428649, value); }
  get InverseTonemap(): boolean { return __CPP_ComponentProperty_get(this, 562715483); }
  set InverseTonemap(value: boolean) { __CPP_ComponentProperty_set(this, 562715483, value); }
  get UseFog(): boolean { return __CPP_ComponentProperty_get(this, 2183232300); }
  set UseFog(value: boolean) { __CPP_ComponentProperty_set(this, 2183232300, value); }
  get VirtualDistance(): number { return __CPP_ComponentProperty_get(this, 1475247756); }
  set VirtualDistance(value: number) { __CPP_ComponentProperty_set(this, 1475247756, value); }
}

export class SkyLightComponent extends SettingsComponent
{
  public static GetTypeNameHash(): number { return 2390201003; }
  get Intensity(): number { return __CPP_ComponentProperty_get(this, 821218387); }
  set Intensity(value: number) { __CPP_ComponentProperty_set(this, 821218387, value); }
  get Saturation(): number { return __CPP_ComponentProperty_get(this, 4010581560); }
  set Saturation(value: number) { __CPP_ComponentProperty_set(this, 4010581560, value); }
}

export class SliderComponent extends TransformComponent
{
  public static GetTypeNameHash(): number { return 1295303479; }
  get Axis(): Enum.BasisAxis { return __CPP_ComponentProperty_get(this, 2215777889); }
  set Axis(value: Enum.BasisAxis) { __CPP_ComponentProperty_set(this, 2215777889, value); }
  get Distance(): number { return __CPP_ComponentProperty_get(this, 2929805649); }
  set Distance(value: number) { __CPP_ComponentProperty_set(this, 2929805649, value); }
  get Acceleration(): number { return __CPP_ComponentProperty_get(this, 1187090096); }
  set Acceleration(value: number) { __CPP_ComponentProperty_set(this, 1187090096, value); }
  get Deceleration(): number { return __CPP_ComponentProperty_get(this, 2302800190); }
  set Deceleration(value: number) { __CPP_ComponentProperty_set(this, 2302800190, value); }
  get RandomStart(): number { return __CPP_ComponentProperty_get(this, 1439600697); }
  set RandomStart(value: number) { __CPP_ComponentProperty_set(this, 1439600697, value); }
}

export class SoldierComponent extends NpcComponent
{
  public static GetTypeNameHash(): number { return 2864523232; }
}

export class SpatialAnchorComponent extends Component
{
  public static GetTypeNameHash(): number { return 2762556177; }
}

export class SpawnComponent extends Component
{
  public static GetTypeNameHash(): number { return 438730474; }
  CanTriggerManualSpawn(): boolean { return __CPP_ComponentFunction_Call(this, 1182018235); }
  TriggerManualSpawn(IgnoreSpawnDelay: boolean, LocalOffset: Vec3): boolean { return __CPP_ComponentFunction_Call(this, 4253763478, IgnoreSpawnDelay, LocalOffset); }
  ScheduleSpawn(): void { __CPP_ComponentFunction_Call(this, 645050758); }
  get Prefab(): string { return __CPP_ComponentProperty_get(this, 1025383935); }
  set Prefab(value: string) { __CPP_ComponentProperty_set(this, 1025383935, value); }
  get AttachAsChild(): boolean { return __CPP_ComponentProperty_get(this, 2678119025); }
  set AttachAsChild(value: boolean) { __CPP_ComponentProperty_set(this, 2678119025, value); }
  get SpawnAtStart(): boolean { return __CPP_ComponentProperty_get(this, 4055899534); }
  set SpawnAtStart(value: boolean) { __CPP_ComponentProperty_set(this, 4055899534, value); }
  get SpawnContinuously(): boolean { return __CPP_ComponentProperty_get(this, 2426811985); }
  set SpawnContinuously(value: boolean) { __CPP_ComponentProperty_set(this, 2426811985, value); }
  get MinDelay(): number { return __CPP_ComponentProperty_get(this, 542565958); }
  set MinDelay(value: number) { __CPP_ComponentProperty_set(this, 542565958, value); }
  get DelayRange(): number { return __CPP_ComponentProperty_get(this, 490325517); }
  set DelayRange(value: number) { __CPP_ComponentProperty_set(this, 490325517, value); }
  get Deviation(): number { return __CPP_ComponentProperty_get(this, 824059517); }
  set Deviation(value: number) { __CPP_ComponentProperty_set(this, 824059517, value); }
}

export class SpotLightComponent extends LightComponent
{
  public static GetTypeNameHash(): number { return 2983247510; }
  get Range(): number { return __CPP_ComponentProperty_get(this, 886765956); }
  set Range(value: number) { __CPP_ComponentProperty_set(this, 886765956, value); }
  get InnerSpotAngle(): number { return __CPP_ComponentProperty_get(this, 2388270276); }
  set InnerSpotAngle(value: number) { __CPP_ComponentProperty_set(this, 2388270276, value); }
  get OuterSpotAngle(): number { return __CPP_ComponentProperty_get(this, 1291241033); }
  set OuterSpotAngle(value: number) { __CPP_ComponentProperty_set(this, 1291241033, value); }
}

export class SpriteComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 4107853740; }
  get Texture(): string { return __CPP_ComponentProperty_get(this, 1708425619); }
  set Texture(value: string) { __CPP_ComponentProperty_set(this, 1708425619, value); }
  get BlendMode(): Enum.SpriteBlendMode { return __CPP_ComponentProperty_get(this, 1484307633); }
  set BlendMode(value: Enum.SpriteBlendMode) { __CPP_ComponentProperty_set(this, 1484307633, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 2584012464); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 2584012464, value); }
  get Size(): number { return __CPP_ComponentProperty_get(this, 880140730); }
  set Size(value: number) { __CPP_ComponentProperty_set(this, 880140730, value); }
  get MaxScreenSize(): number { return __CPP_ComponentProperty_get(this, 3365523384); }
  set MaxScreenSize(value: number) { __CPP_ComponentProperty_set(this, 3365523384, value); }
  get AspectRatio(): number { return __CPP_ComponentProperty_get(this, 1319232297); }
  set AspectRatio(value: number) { __CPP_ComponentProperty_set(this, 1319232297, value); }
}

export class StageSpaceComponent extends Component
{
  public static GetTypeNameHash(): number { return 3814358307; }
  get StageSpace(): Enum.XRStageSpace { return __CPP_ComponentProperty_get(this, 3796859176); }
  set StageSpace(value: Enum.XRStageSpace) { __CPP_ComponentProperty_set(this, 3796859176, value); }
}

export class TimedDeathComponent extends Component
{
  public static GetTypeNameHash(): number { return 1589515529; }
  get MinDelay(): number { return __CPP_ComponentProperty_get(this, 2549195916); }
  set MinDelay(value: number) { __CPP_ComponentProperty_set(this, 2549195916, value); }
  get DelayRange(): number { return __CPP_ComponentProperty_get(this, 1350176412); }
  set DelayRange(value: number) { __CPP_ComponentProperty_set(this, 1350176412, value); }
  get TimeoutPrefab(): string { return __CPP_ComponentProperty_get(this, 978098831); }
  set TimeoutPrefab(value: string) { __CPP_ComponentProperty_set(this, 978098831, value); }
}

export class VisualScriptComponent extends EventMessageHandlerComponent
{
  public static GetTypeNameHash(): number { return 4146054015; }
  get Script(): string { return __CPP_ComponentProperty_get(this, 514750595); }
  set Script(value: string) { __CPP_ComponentProperty_set(this, 514750595, value); }
}

export class VisualizeHandComponent extends Component
{
  public static GetTypeNameHash(): number { return 3717625868; }
}

