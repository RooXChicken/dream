'use strict';
import * as $i_$002flib$002fnoise$002ejs from "/lib/noise.js";
var $p;
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $Long(lo, hi) {
  this.l = lo;
  this.h = hi;
}
$p = $Long.prototype;
$p.toString = (function() {
  return $s_RTLong__toString__I__I__T(this.l, this.h);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.d() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.rO();
      }
    }
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.rL(x0);
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.E(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.E.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.A();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.A.call(instance);
      }
    }
  }
}
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0);
  } else {
    return instance.rQ(x0);
  }
}
function $dp_subSequence__I__I__jl_CharSequence(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__subSequence__I__I__jl_CharSequence(instance, x0, x1);
  } else {
    return instance.oQ(x0, x1);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__J(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__I__I__O__D(arg0.l, arg0.h, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if (((arg0 !== arg2) || (((arg3 - arg1) >>> 0) > (arg4 >>> 0)))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $bL(arg0, arg1) {
  return new $Long(arg0, arg1);
}
var $bL0 = $bL(0, 0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $bL0 : arg0);
}
function $ct_O__($thiz) {
  return $thiz;
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.A = (function() {
  return $systemIdentityHashCode(this);
});
$p.E = (function(that) {
  return (this === that);
});
$p.q = (function() {
  var i = this.A();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.q();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = null;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.m = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.d = (function() {
  return new $ac_O(this.a.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = false;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.m = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.d = (function() {
  return new $ac_Z(this.a.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Uint16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.m = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.d = (function() {
  return new $ac_C(this.a.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int8Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.m = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.d = (function() {
  return new $ac_B(this.a.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.m = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.d = (function() {
  return new $ac_S(this.a.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.m = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.d = (function() {
  return new $ac_I(this.a.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.m = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.d = (function() {
  return new $ac_J(this.a.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.m = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.d = (function() {
  return new $ac_F(this.a.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float64Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.m = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.d = (function() {
  return new $ac_D(this.a.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass, (arrayEncodedName === "J"));
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isLongArray, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    w: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (isLongArray ? ((array) => {
    var len = (array.length | 0);
    var result = new arrayClass(len);
    var u = result.a;
    for (var i = 0; (i < len); i = ((i + 1) | 0)) {
      var srcElem = array[i];
      u[(i << 1)] = srcElem.l;
      u[(((i << 1) + 1) | 0)] = srcElem.h;
    }
    return result;
  }) : (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array))));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.a = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.a[i] = null;
      }
    } else {
      this.a = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.m = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.d = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    w: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), false, ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p($bL0, "J", "long", $ac_J, Int32Array);
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
var $typedArraysAreBigEndian = (new Int8Array(new Int32Array([1]).buffer)[0] === 0);
function $constArrayBuffer_B(len, encoded) {
  var buf = new ArrayBuffer(len);
  var view = new DataView(buf);
  var regularChunksEnd = ((encoded.length - 4) | 0);
  var i = 0;
  var j = 0;
  var chunk = 0;
  while (true) {
    chunk = (((encoded.charCodeAt(i) | (encoded.charCodeAt(((i + 1) | 0)) << 8)) | (encoded.charCodeAt(((i + 2) | 0)) << 16)) | (encoded.charCodeAt(((i + 3) | 0)) << 24));
    chunk = ((((chunk - 808464432) | 0) - ((chunk & 1616928864) >>> 3)) | 0);
    chunk = (((chunk & 1056980736) >>> 2) | (chunk & 4128831));
    chunk = (((chunk & 268369920) >>> 4) | (chunk & 4095));
    if ((i === regularChunksEnd)) {
      break;
    }
    view.setUint32(j, chunk, true);
    i = ((i + 4) | 0);
    j = ((j + 3) | 0);
  }
  var trailing = ((len - j) | 0);
  view.setUint8(j, chunk);
  if ((trailing !== 1)) {
    view.setUint8(((j + 1) | 0), (chunk >>> 8));
    if ((trailing === 3)) {
      view.setUint8(((j + 2) | 0), (chunk >>> 16));
    }
  }
  return buf;
}
function $constArrayBuffer_S(len, encoded) {
  var buf = $constArrayBuffer_B((len << 1), encoded);
  if ($typedArraysAreBigEndian) {
    var view = new DataView(buf);
    var i = 0;
    while ((i !== len)) {
      view.putInt16(i, view.getInt16(i, true), false);
      i = ((i + 2) | 0);
    }
  }
  return buf;
}
function $constArrayBuffer_I(len, encoded) {
  var buf = $constArrayBuffer_B((len << 2), encoded);
  if ($typedArraysAreBigEndian) {
    var view = new DataView(buf);
    var i = 0;
    while ((i !== len)) {
      view.putInt32(i, view.getInt32(i, true), false);
      i = ((i + 4) | 0);
    }
  }
  return buf;
}
function $constArrayBuffer_J(len, encoded) {
  return $constArrayBuffer_I((len << 1), encoded);
}
function $constTypedArrayU_I(len, encoded, prevMask) {
  var buf = new Int32Array(len);
  var inLen = (encoded.length | 0);
  var prev = 0;
  var i = 0;
  var j = 0;
  var v = 0;
  while ((i !== inLen)) {
    var c = encoded.charCodeAt(i);
    if ((c < 80)) {
      v = ((v | (c - 48)) << 5);
    } else {
      v = (v | (c - 93));
      prev = (((prev & prevMask) + v) | 0);
      buf[j] = prev;
      j = ((j + 1) | 0);
      v = 0;
    }
    i = ((i + 1) | 0);
  }
  return buf;
}
function $constTypedArrayS_I(len, encoded, prevMask) {
  var buf = new Int32Array(len);
  var inLen = (encoded.length | 0);
  var prev = 0;
  var i = 0;
  var j = 0;
  var v = 0;
  var first = true;
  while ((i !== inLen)) {
    var c = encoded.charCodeAt(i);
    if ((c < 80)) {
      if (first) {
        v = (((c - 48) << 27) >> 22);
        first = false;
      } else {
        v = ((v | (c - 48)) << 5);
      }
    } else {
      if (first) {
        v = (((c - 93) << 27) >> 27);
      } else {
        v = (v | (c - 93));
        first = true;
      }
      prev = (((prev & prevMask) + v) | 0);
      buf[j] = prev;
      j = ((j + 1) | 0);
    }
    i = ((i + 1) | 0);
  }
  return buf;
}
function $constArrRaw_B(len, encoded) {
  return new $ac_B(new Int8Array($constArrayBuffer_B(len, encoded)));
}
function $constArrRaw_S(len, encoded) {
  return new $ac_S(new Int16Array($constArrayBuffer_S(len, encoded)));
}
function $constArrRaw_C(len, encoded) {
  return new $ac_C(new Uint16Array($constArrayBuffer_S(len, encoded)));
}
function $constArrRaw_I(len, encoded) {
  return new $ac_I(new Int32Array($constArrayBuffer_I(len, encoded)));
}
function $constArrRaw_J(len, encoded) {
  return new $ac_J(new Int32Array($constArrayBuffer_J(len, encoded)));
}
function $constArrUVals_I(len, encoded) {
  return new $ac_I($constTypedArrayU_I(len, encoded, 0));
}
function $constArrUDiffs_I(len, encoded) {
  return new $ac_I($constTypedArrayU_I(len, encoded, (-1)));
}
function $constArrSVals_I(len, encoded) {
  return new $ac_I($constTypedArrayS_I(len, encoded, 0));
}
function $constArrSDiffs_I(len, encoded) {
  return new $ac_I($constTypedArrayS_I(len, encoded, (-1)));
}
function $constArrUVals_J(len, encoded) {
  return new $ac_J($constTypedArrayU_I((len << 1), encoded, 0));
}
function $constArrUDiffs_J(len, encoded) {
  return new $ac_J($constTypedArrayU_I((len << 1), encoded, (-1)));
}
function $constArrSVals_J(len, encoded) {
  return new $ac_J($constTypedArrayS_I((len << 1), encoded, 0));
}
function $constArrSDiffs_J(len, encoded) {
  return new $ac_J($constTypedArrayS_I((len << 1), encoded, (-1)));
}
/** @constructor */
function $c_jl_BoundsChecks$() {
}
$p = $c_jl_BoundsChecks$.prototype = new $h_O();
$p.constructor = $c_jl_BoundsChecks$;
/** @constructor */
function $h_jl_BoundsChecks$() {
}
$h_jl_BoundsChecks$.prototype = $p;
$p.ow = (function(capacity) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ("Illegal capacity: " + capacity));
});
$p.kt = (function(index, length) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((("Index " + index) + " out of bounds [0, ") + length) + ")"));
});
$p.ku = (function(index, length) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((("Index " + index) + " out of bounds [0, ") + length) + "]"));
});
var $d_jl_BoundsChecks$ = new $TypeData().i($c_jl_BoundsChecks$, "java.lang.BoundsChecks$", ({
  c0: 1
}));
var $n_jl_BoundsChecks$;
function $m_jl_BoundsChecks$() {
  if ((!$n_jl_BoundsChecks$)) {
    $n_jl_BoundsChecks$ = new $c_jl_BoundsChecks$();
  }
  return $n_jl_BoundsChecks$;
}
function $f_jl_Iterable__forEach__ju_function_Consumer__V($thiz, action) {
  var iter = $thiz.ce();
  while (iter.h()) {
    action.b7(iter.g());
  }
}
var $d_jl_Runnable = new $TypeData().i(1, "java.lang.Runnable", ({
  ap: 1
}));
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().cs("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
  var trace = [];
  var i = 0;
  while ((i < (lines.length | 0))) {
    var line = lines[i];
    if ((line !== "")) {
      var mtch = NormalizedFrameLine.exec(line);
      if ((mtch !== null)) {
        var classAndMethodName = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, mtch[1]);
        var $x_5 = classAndMethodName[0];
        var $x_4 = classAndMethodName[1];
        var $x_3 = mtch[2];
        var x$2 = mtch[3];
        var $x_2 = parseInt(x$2);
        var x$3 = mtch[4];
        var $x_1 = trace.push(new $c_jl_StackTraceElement($x_5, $x_4, $x_3, ($x_2 | 0), ((x$3 !== (void 0)) ? (parseInt(x$3) | 0) : (-1))));
      } else {
        (trace.push(new $c_jl_StackTraceElement("<jscode>", line, null, (-1), (-1))) | 0);
      }
    }
    i = ((1 + i) | 0);
  }
  var len = (trace.length | 0);
  var result = new ($d_jl_StackTraceElement.r().C)(len);
  i = 0;
  while ((i < len)) {
    result.a[i] = trace[i];
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractClassMethod__T__O($thiz, functionName) {
  var PatBC = $m_jl_StackTrace$StringRE$().cs("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().cs("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().cs("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().cs("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().cs("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
  var matchBC = PatBC.exec(functionName);
  var matchBCOrS = ((matchBC !== null) ? matchBC : PatS.exec(functionName));
  if ((matchBCOrS !== null)) {
    return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchBCOrS[1]), $p_jl_StackTrace$__decodeMethodName__T__T($thiz, matchBCOrS[2])];
  } else {
    var matchCT = PatCT.exec(functionName);
    var matchCTOrN = ((matchCT !== null) ? matchCT : PatN.exec(functionName));
    if ((matchCTOrN !== null)) {
      return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchCTOrN[1]), "<init>"];
    } else {
      var matchM = PatM.exec(functionName);
      return ((matchM !== null) ? [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchM[1]), "<clinit>"] : ["<jscode>", functionName]);
    }
  }
}
function $p_jl_StackTrace$__decodeClassName__T__T($thiz, encodedName) {
  var dict = $p_jl_StackTrace$__decompressedClasses__O($thiz);
  if ((!(!$m_jl_Utils$Cache$().ep.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.bS) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.O = "java_lang_Object";
    dict.T = "java_lang_String";
    var index = 0;
    while ((index <= 22)) {
      if ((index >= 2)) {
        var key = ("T" + index);
        var value = ("scala_Tuple" + index);
        dict[key] = value;
      }
      var key$1 = ("F" + index);
      var value$1 = ("scala_Function" + index);
      dict[key$1] = value$1;
      index = ((1 + index) | 0);
    }
    $thiz.iw = dict;
    $thiz.bS = (((1 | $thiz.bS) << 24) >> 24);
  }
  return $thiz.iw;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.bS) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.iw);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.bS) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.sjsr_ = "scala_scalajs_runtime_";
    dict.sjs_ = "scala_scalajs_";
    dict.sci_ = "scala_collection_immutable_";
    dict.scm_ = "scala_collection_mutable_";
    dict.scg_ = "scala_collection_generic_";
    dict.sc_ = "scala_collection_";
    dict.sr_ = "scala_runtime_";
    dict.s_ = "scala_";
    dict.jl_ = "java_lang_";
    dict.ju_ = "java_util_";
    $thiz.ix = dict;
    $thiz.bS = (((2 | $thiz.bS) << 24) >> 24);
  }
  return $thiz.ix;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.bS) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.ix);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.bS) << 24) >> 24) === 0)) {
    $thiz.iv = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.bS = (((4 | $thiz.bS) << 24) >> 24);
  }
  return $thiz.iv;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.bS) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.iv);
}
function $p_jl_StackTrace$__decodeMethodName__T__T($thiz, encodedName) {
  if ((!(!encodedName.startsWith("init___")))) {
    return "<init>";
  } else {
    var methodNameLen = (encodedName.indexOf("__") | 0);
    return ((methodNameLen < 0) ? encodedName : encodedName.substring(0, methodNameLen));
  }
}
function $p_jl_StackTrace$__normalizeStackTraceLines__O__O($thiz, e) {
  return ((!(!(!(!(!e))))) ? [] : ((!(!(!(!(e.arguments && e.stack))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : ((!(!(!(!(e.stack && e.sourceURL))))) ? $p_jl_StackTrace$__extractSafari__O__O($thiz, e) : ((!(!(!(!(e.stack && e.number))))) ? $p_jl_StackTrace$__extractIE__O__O($thiz, e) : ((!(!(!(!(e.stack && e.fileName))))) ? $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) : ((!(!(!(!(e.message && e["opera#sourceloc"]))))) ? ((!(!(!(!(!e.stacktrace))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : ((!(!(!(!((e.message.indexOf("\n") > (-1.0)) && (e.message.split("\n").length > e.stacktrace.split("\n").length)))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e))) : ((!(!(!(!((e.message && e.stack) && e.stacktrace))))) ? ((!(!(!(!(e.stacktrace.indexOf("called from line") < 0.0))))) ? $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera11__O__O($thiz, e)) : ((!(!(!(!(e.stack && (!e.fileName)))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : $p_jl_StackTrace$__extractOther__O__O($thiz, e)))))))));
}
function $p_jl_StackTrace$__extractChrome__O__O($thiz, e) {
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().cs("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().bB("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().bB("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().bB("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().bB("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bB("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().bB("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().bB("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().bB("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().bB("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bB("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bB("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bB("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bB("Line (\\d+).*script (?:in )?(\\S+)", "i");
  var lines = e.message.split("\n");
  var result = [];
  var i = 2;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      (result.push(((("{anonymous}()@" + mtch[2]) + ":") + mtch[1])) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bB("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var x = mtch[3];
      var fnName = ((x !== (void 0)) ? x : "{anonymous}");
      (result.push(((((fnName + "()@") + mtch[2]) + ":") + mtch[1])) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().cs("^(.*)@(.+):(\\d+)$");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var x = mtch[1];
      var fnName = ((x !== (void 0)) ? (x + "()") : "global code");
      (result.push(((((fnName + "@") + mtch[2]) + ":") + mtch[3])) | 0);
    }
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera11__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().cs("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var location = ((((mtch[4] + ":") + mtch[1]) + ":") + mtch[2]);
      var x$3 = mtch[2];
      var fnName0 = ((x$3 !== (void 0)) ? x$3 : "global code");
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().cs("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().cs("<anonymous function>"), "{anonymous}");
      (result.push(((fnName + "@") + location)) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOther__O__O($thiz, e) {
  return [];
}
function $p_jl_StackTrace$__loop$1__I__T__T($thiz, i, encodedName$1) {
  while (true) {
    if ((i < ($p_jl_StackTrace$__compressedPrefixes__O($thiz).length | 0))) {
      var prefix = $p_jl_StackTrace$__compressedPrefixes__O($thiz)[i];
      if ((!(!encodedName$1.startsWith(prefix)))) {
        var dict = $p_jl_StackTrace$__decompressedPrefixes__O($thiz);
        return (("" + dict[prefix]) + encodedName$1.substring(prefix.length));
      } else {
        i = ((1 + i) | 0);
      }
    } else {
      return ((!(!encodedName$1.startsWith("L"))) ? encodedName$1.substring(1) : encodedName$1);
    }
  }
}
/** @constructor */
function $c_jl_StackTrace$() {
  this.iw = null;
  this.ix = null;
  this.iv = null;
  this.bS = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.qp = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  ci: 1
}));
var $n_jl_StackTrace$;
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$();
  }
  return $n_jl_StackTrace$;
}
/** @constructor */
function $c_jl_StackTrace$StringRE$() {
}
$p = $c_jl_StackTrace$StringRE$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$StringRE$;
/** @constructor */
function $h_jl_StackTrace$StringRE$() {
}
$h_jl_StackTrace$StringRE$.prototype = $p;
$p.cs = (function(this$) {
  return new RegExp(this$);
});
$p.bB = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  cj: 1
}));
var $n_jl_StackTrace$StringRE$;
function $m_jl_StackTrace$StringRE$() {
  if ((!$n_jl_StackTrace$StringRE$)) {
    $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$();
  }
  return $n_jl_StackTrace$StringRE$;
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.kR = null;
  this.eo = null;
  $n_jl_System$Streams$ = this;
  this.kR = new $c_jl_JSConsoleBasedPrintStream(false);
  this.eo = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  cm: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.22.0";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.iy = null;
  this.kS = null;
  $n_jl_System$SystemProperties$ = this;
  this.iy = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.kS = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.ko = (function(key, default$1) {
  if ((this.iy !== null)) {
    var dict = this.iy;
    return ((!(!$m_jl_Utils$Cache$().ep.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.kS.ko(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  cn: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_ThreadLocal() {
  this.iz = false;
  this.kT = null;
  this.iz = false;
}
$p = $c_jl_ThreadLocal.prototype = new $h_O();
$p.constructor = $c_jl_ThreadLocal;
/** @constructor */
function $h_jl_ThreadLocal() {
}
$h_jl_ThreadLocal.prototype = $p;
$p.bO = (function() {
  if ((!this.iz)) {
    this.gw(null);
  }
  return this.kT;
});
$p.gw = (function(o) {
  this.kT = o;
  this.iz = true;
});
var $d_jl_ThreadLocal = new $TypeData().i($c_jl_ThreadLocal, "java.lang.ThreadLocal", ({
  cp: 1
}));
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.ep = null;
  $n_jl_Utils$Cache$ = this;
  this.ep = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  cr: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  cs: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.ia = (function(array) {
  if ((array instanceof $ac_O)) {
    return array.a.length;
  } else if ((array instanceof $ac_Z)) {
    return array.a.length;
  } else if ((array instanceof $ac_C)) {
    return array.a.length;
  } else if ((array instanceof $ac_B)) {
    return array.a.length;
  } else if ((array instanceof $ac_S)) {
    return array.a.length;
  } else if ((array instanceof $ac_I)) {
    return array.a.length;
  } else if ((array instanceof $ac_J)) {
    return ((array.a.length >>> 1) | 0);
  } else if ((array instanceof $ac_F)) {
    return array.a.length;
  } else {
    if ((!(array instanceof $ac_D))) {
      $p_jl_reflect_Array$__mismatch__O__E(this, array);
    }
    return array.a.length;
  }
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  ct: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.pT = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.a.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.a[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
        continue;
      }
      if ((cmp !== 0)) {
        startIndex = ((1 + mid) | 0);
        continue;
      }
      return mid;
    }
  }
});
$p.qj = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.oh = (function(a, value) {
  var toIndex = a.a.length;
  var i = 0;
  while ((i !== toIndex)) {
    var i$1 = i;
    a.a[i$1] = value;
    i = ((1 + i) | 0);
  }
});
$p.S = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).bR.Q().bR.U(newLength);
  original.m(0, ret, 0, copyLength);
  return ret;
});
$p.a3 = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).bR.Q().bR.U(retLength);
  original.m(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  cy: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
/** @constructor */
function $c_ju_LinkedList$Node(value, prev, next) {
  this.fd = null;
  this.kX = null;
  this.gH = null;
  this.fd = value;
  this.kX = prev;
  this.gH = next;
}
$p = $c_ju_LinkedList$Node.prototype = new $h_O();
$p.constructor = $c_ju_LinkedList$Node;
/** @constructor */
function $h_ju_LinkedList$Node() {
}
$h_ju_LinkedList$Node.prototype = $p;
var $d_ju_LinkedList$Node = new $TypeData().i($c_ju_LinkedList$Node, "java.util.LinkedList$Node", ({
  cJ: 1
}));
function $is_ju_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ar)));
}
function $isArrayOf_ju_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
function $is_ju_Map$Entry(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.as)));
}
function $isArrayOf_ju_Map$Entry(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
/** @constructor */
function $c_ju_regex_IndicesBuilder(pattern, flags, node, groupCount, jsRegExpForFind, jsRegExpForMatches) {
  this.l4 = null;
  this.kZ = null;
  this.l3 = null;
  this.l0 = 0;
  this.l1 = null;
  this.l2 = null;
  this.l4 = pattern;
  this.kZ = flags;
  this.l3 = node;
  this.l0 = groupCount;
  this.l1 = jsRegExpForFind;
  this.l2 = jsRegExpForMatches;
}
$p = $c_ju_regex_IndicesBuilder.prototype = new $h_O();
$p.constructor = $c_ju_regex_IndicesBuilder;
/** @constructor */
function $h_ju_regex_IndicesBuilder() {
}
$h_ju_regex_IndicesBuilder.prototype = $p;
$p.pL = (function(forMatches, string, index) {
  var regExp = (forMatches ? this.l2 : this.l1);
  regExp.lastIndex = index;
  var allMatchResult = regExp.exec(string);
  if (((allMatchResult === null) || ((allMatchResult.index | 0) !== index))) {
    throw new $c_jl_AssertionError((((((("[Internal error] Executed '" + regExp) + "' on ") + ((("'" + string) + "' at position ") + index)) + ", got an error.\n") + ((("Original pattern '" + this.l4) + "' with flags '") + this.kZ)) + "' did match however."));
  }
  var end = ((index + allMatchResult[0].length) | 0);
  var len = ((1 + this.l0) | 0);
  var indices = new Array(len);
  indices[0] = [index, end];
  var i = 1;
  while ((i !== len)) {
    indices[i] = (void 0);
    i = ((1 + i) | 0);
  }
  this.l3.cr(allMatchResult, indices, index, end);
  return indices;
});
var $d_ju_regex_IndicesBuilder = new $TypeData().i($c_ju_regex_IndicesBuilder, "java.util.regex.IndicesBuilder", ({
  cP: 1
}));
/** @constructor */
function $c_ju_regex_IndicesBuilder$() {
}
$p = $c_ju_regex_IndicesBuilder$.prototype = new $h_O();
$p.constructor = $c_ju_regex_IndicesBuilder$;
/** @constructor */
function $h_ju_regex_IndicesBuilder$() {
}
$h_ju_regex_IndicesBuilder$.prototype = $p;
$p.pQ = (function(pattern, flags) {
  var parser = new $c_ju_regex_IndicesBuilder$Parser(pattern);
  var node = $p_ju_regex_IndicesBuilder$Parser__parseInsideParensAndClosingParen__ju_regex_IndicesBuilder$Node(parser);
  node.bc(1);
  var allMatchingPattern = node.cb(parser.eu);
  var jsRegExpForFind = new RegExp(allMatchingPattern, (flags + "g"));
  var jsRegExpForMatches = new RegExp((("^(?:" + allMatchingPattern) + ")$"), flags);
  return new $c_ju_regex_IndicesBuilder(pattern, flags, node, parser.rc(), jsRegExpForFind, jsRegExpForMatches);
});
var $d_ju_regex_IndicesBuilder$ = new $TypeData().i($c_ju_regex_IndicesBuilder$, "java.util.regex.IndicesBuilder$", ({
  cQ: 1
}));
var $n_ju_regex_IndicesBuilder$;
function $m_ju_regex_IndicesBuilder$() {
  if ((!$n_ju_regex_IndicesBuilder$)) {
    $n_ju_regex_IndicesBuilder$ = new $c_ju_regex_IndicesBuilder$();
  }
  return $n_ju_regex_IndicesBuilder$;
}
/** @constructor */
function $c_ju_regex_IndicesBuilder$Node() {
  this.bU = 0;
}
$p = $c_ju_regex_IndicesBuilder$Node.prototype = new $h_O();
$p.constructor = $c_ju_regex_IndicesBuilder$Node;
/** @constructor */
function $h_ju_regex_IndicesBuilder$Node() {
}
$h_ju_regex_IndicesBuilder$Node.prototype = $p;
$p.bc = (function(newGroupIndex) {
  this.bU = newGroupIndex;
  return ((1 + newGroupIndex) | 0);
});
$p.oE = (function(matchResult, indices, end) {
  var x = matchResult[this.bU];
  this.cr(matchResult, indices, ((x !== (void 0)) ? ((end - x.length) | 0) : (-1)), end);
});
$p.oF = (function(matchResult, indices, start) {
  var x = matchResult[this.bU];
  var end = ((x !== (void 0)) ? ((start + x.length) | 0) : (-1));
  this.cr(matchResult, indices, start, end);
  return end;
});
function $p_ju_regex_IndicesBuilder$Parser__parseInsideParensAndClosingParen__ju_regex_IndicesBuilder$Node($thiz) {
  var alternatives = [];
  var sequence = [];
  while (true) {
    var dispatchCP = $f_T__codePointAt__I__I($thiz.aS, $thiz.p);
    switch (dispatchCP) {
      case 124: {
        alternatives.push($ps_ju_regex_IndicesBuilder$Parser__completeSequence$1__O__ju_regex_IndicesBuilder$Node(sequence));
        sequence = [];
        $thiz.p = ((1 + $thiz.p) | 0);
        var baseNode = null;
        break;
      }
      case 41: {
        var baseNode;
        $thiz.p = ((1 + $thiz.p) | 0);
        var lastAlternative = $ps_ju_regex_IndicesBuilder$Parser__completeSequence$1__O__ju_regex_IndicesBuilder$Node(sequence);
        if (((alternatives.length | 0) === 0)) {
          return lastAlternative;
        } else {
          alternatives.push(lastAlternative);
          return new $c_ju_regex_IndicesBuilder$AlternativesNode(alternatives);
        }
        break;
      }
      case 40: {
        var indicator = $thiz.aS.substring(((1 + $thiz.p) | 0), ((3 + $thiz.p) | 0));
        if (((indicator === "?=") || (indicator === "?!"))) {
          $thiz.p = ((3 + $thiz.p) | 0);
          var baseNode = new $c_ju_regex_IndicesBuilder$LookAroundNode(false, indicator, $p_ju_regex_IndicesBuilder$Parser__parseInsideParensAndClosingParen__ju_regex_IndicesBuilder$Node($thiz));
        } else if ((indicator === "?<")) {
          var fullIndicator = $thiz.aS.substring(((1 + $thiz.p) | 0), ((4 + $thiz.p) | 0));
          $thiz.p = ((4 + $thiz.p) | 0);
          var baseNode = new $c_ju_regex_IndicesBuilder$LookAroundNode(true, fullIndicator, $p_ju_regex_IndicesBuilder$Parser__parseInsideParensAndClosingParen__ju_regex_IndicesBuilder$Node($thiz));
        } else if ((indicator === "?:")) {
          $thiz.p = ((3 + $thiz.p) | 0);
          var inner$3 = $p_ju_regex_IndicesBuilder$Parser__parseInsideParensAndClosingParen__ju_regex_IndicesBuilder$Node($thiz);
          var baseNode = ((inner$3 instanceof $c_ju_regex_IndicesBuilder$LeafRegexNode) ? new $c_ju_regex_IndicesBuilder$SequenceNode([inner$3]) : inner$3);
        } else {
          $thiz.p = ((1 + $thiz.p) | 0);
          var groupIndex = ($thiz.eu.length | 0);
          $thiz.eu.push(null);
          var inner$4 = $p_ju_regex_IndicesBuilder$Parser__parseInsideParensAndClosingParen__ju_regex_IndicesBuilder$Node($thiz);
          var groupNode = new $c_ju_regex_IndicesBuilder$GroupNode(groupIndex, inner$4);
          $thiz.eu[groupIndex] = groupNode;
          var baseNode = groupNode;
        }
        break;
      }
      case 92: {
        var startIndex = $thiz.p;
        var this$2 = $thiz.aS;
        var index = ((1 + startIndex) | 0);
        var c = this$2.charCodeAt(index);
        $thiz.p = ((2 + $thiz.p) | 0);
        if (((((c - 48) | 0) >>> 0) <= 9)) {
          while ((((($thiz.aS.charCodeAt($thiz.p) - 48) | 0) >>> 0) <= 9)) {
            $thiz.p = ((1 + $thiz.p) | 0);
          }
          var baseNode = new $c_ju_regex_IndicesBuilder$BackReferenceNode($m_jl_Integer$().id($thiz.aS.substring(((1 + startIndex) | 0), $thiz.p), 10, 214748364));
        } else {
          if (((c === 80) || (c === 112))) {
            while (($thiz.aS.charCodeAt($thiz.p) !== 125)) {
              $thiz.p = ((1 + $thiz.p) | 0);
            }
            $thiz.p = ((1 + $thiz.p) | 0);
          }
          var baseNode = new $c_ju_regex_IndicesBuilder$LeafRegexNode($thiz.aS.substring(startIndex, $thiz.p));
        }
        break;
      }
      case 91: {
        var startIndex$2 = $thiz.p;
        $thiz.p = $p_ju_regex_IndicesBuilder$Parser__loop$1__I__I($thiz, ((1 + startIndex$2) | 0));
        var baseNode = new $c_ju_regex_IndicesBuilder$LeafRegexNode($thiz.aS.substring(startIndex$2, $thiz.p));
        break;
      }
      default: {
        var start = $thiz.p;
        $thiz.p = (($thiz.p + ((dispatchCP >= 65536) ? 2 : 1)) | 0);
        var baseNode = new $c_ju_regex_IndicesBuilder$LeafRegexNode($thiz.aS.substring(start, $thiz.p));
      }
    }
    if ((baseNode !== null)) {
      switch ($thiz.aS.charCodeAt($thiz.p)) {
        case 43:
        case 42:
        case 63: {
          var startIndex$3 = $thiz.p;
          if (($thiz.aS.charCodeAt(((1 + startIndex$3) | 0)) === 63)) {
            $thiz.p = ((2 + $thiz.p) | 0);
          } else {
            $thiz.p = ((1 + $thiz.p) | 0);
          }
          var repeater = $thiz.aS.substring(startIndex$3, $thiz.p);
          (sequence.push(new $c_ju_regex_IndicesBuilder$RepeatedNode(baseNode, repeater)) | 0);
          break;
        }
        case 123: {
          var startIndex$4 = $thiz.p;
          var this$9 = $thiz.aS;
          var fromIndex = ((1 + startIndex$4) | 0);
          $thiz.p = ((1 + (this$9.indexOf("}", fromIndex) | 0)) | 0);
          if (($thiz.aS.charCodeAt($thiz.p) === 63)) {
            $thiz.p = ((1 + $thiz.p) | 0);
          }
          var repeater$2 = $thiz.aS.substring(startIndex$4, $thiz.p);
          (sequence.push(new $c_ju_regex_IndicesBuilder$RepeatedNode(baseNode, repeater$2)) | 0);
          break;
        }
        default: {
          var sequenceLen = (sequence.length | 0);
          if ((((sequenceLen !== 0) && (baseNode instanceof $c_ju_regex_IndicesBuilder$LeafRegexNode)) && (sequence[((sequenceLen - 1) | 0)] instanceof $c_ju_regex_IndicesBuilder$LeafRegexNode))) {
            var fused = new $c_ju_regex_IndicesBuilder$LeafRegexNode((("" + sequence[((sequenceLen - 1) | 0)].gJ) + baseNode.gJ));
            sequence[((sequenceLen - 1) | 0)] = fused;
          } else {
            (sequence.push(baseNode) | 0);
          }
        }
      }
    }
  }
}
function $ps_ju_regex_IndicesBuilder$Parser__completeSequence$1__O__ju_regex_IndicesBuilder$Node(sequence) {
  switch ((sequence.length | 0)) {
    case 0: {
      return new $c_ju_regex_IndicesBuilder$LeafRegexNode("");
      break;
    }
    case 1: {
      return sequence[0];
      break;
    }
    default: {
      return new $c_ju_regex_IndicesBuilder$SequenceNode(sequence);
    }
  }
}
function $p_ju_regex_IndicesBuilder$Parser__loop$1__I__I($thiz, pIndex) {
  while (true) {
    switch ($thiz.aS.charCodeAt(pIndex)) {
      case 92: {
        pIndex = ((2 + pIndex) | 0);
        break;
      }
      case 93: {
        return ((1 + pIndex) | 0);
        break;
      }
      default: {
        pIndex = ((1 + pIndex) | 0);
      }
    }
  }
}
/** @constructor */
function $c_ju_regex_IndicesBuilder$Parser(pattern0) {
  this.aS = null;
  this.p = 0;
  this.eu = null;
  this.aS = (pattern0 + ")");
  this.p = 0;
  this.eu = [null];
}
$p = $c_ju_regex_IndicesBuilder$Parser.prototype = new $h_O();
$p.constructor = $c_ju_regex_IndicesBuilder$Parser;
/** @constructor */
function $h_ju_regex_IndicesBuilder$Parser() {
}
$h_ju_regex_IndicesBuilder$Parser.prototype = $p;
$p.rc = (function() {
  return (((this.eu.length | 0) - 1) | 0);
});
var $d_ju_regex_IndicesBuilder$Parser = new $TypeData().i($c_ju_regex_IndicesBuilder$Parser, "java.util.regex.IndicesBuilder$Parser", ({
  cV: 1
}));
function $p_ju_regex_PatternCompiler__parseError__T__E($thiz, desc) {
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.ax, $thiz.b);
}
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().lh.exec($thiz.ax);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var end = x.length;
      var i = 0;
      while ((i < end)) {
        var value = i;
        $thiz.L = ($thiz.L | $m_ju_regex_PatternCompiler$().ox(x.charCodeAt(value)));
        i = ((1 + i) | 0);
      }
    }
    if (((256 & $thiz.L) !== 0)) {
      $thiz.L = (64 | $thiz.L);
    }
    var x$1 = m[2];
    if ((x$1 !== (void 0))) {
      var end$1 = x$1.length;
      var i$1 = 0;
      while ((i$1 < end$1)) {
        var value$1 = i$1;
        $thiz.L = ($thiz.L & (~$m_ju_regex_PatternCompiler$().ox(x$1.charCodeAt(value$1))));
        i$1 = ((1 + i$1) | 0);
      }
    }
    $thiz.b = (($thiz.b + m[0].length) | 0);
  }
}
function $p_ju_regex_PatternCompiler__literal__T__T($thiz, s) {
  var result = "";
  var len = s.length;
  var i = 0;
  while ((i !== len)) {
    var cp = $f_T__codePointAt__I__I(s, i);
    result = (("" + result) + $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp));
    i = ((i + ((cp >= 65536) ? 2 : 1)) | 0);
  }
  return result;
}
function $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp) {
  var s = $m_ju_regex_PatternCompiler$().eb(cp);
  if ((cp < 128)) {
    switch (cp) {
      case 94:
      case 36:
      case 92:
      case 46:
      case 42:
      case 43:
      case 63:
      case 40:
      case 41:
      case 91:
      case 93:
      case 123:
      case 125:
      case 124: {
        return ("\\" + s);
        break;
      }
      default: {
        return (((66 & $thiz.L) !== 2) ? s : (((((cp - 65) | 0) >>> 0) <= 25) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().eb(((32 + cp) | 0))) + "]") : (((((cp - 97) | 0) >>> 0) <= 25) ? ((("[" + $m_ju_regex_PatternCompiler$().eb(((cp - 32) | 0))) + s) + "]") : s)));
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
  }
}
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.ax;
  var len = pattern.length;
  while (true) {
    if (($thiz.b !== len)) {
      switch (pattern.charCodeAt($thiz.b)) {
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          $thiz.b = ((1 + $thiz.b) | 0);
          continue;
          break;
        }
        case 35: {
          $thiz.kw();
          continue;
          break;
        }
      }
    }
    break;
  }
}
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.ax;
  var len = pattern.length;
  var startOfRepeater = $thiz.b;
  var repeaterDispatchChar = ((startOfRepeater === len) ? 46 : pattern.charCodeAt(startOfRepeater));
  if (((((repeaterDispatchChar === 42) || (repeaterDispatchChar === 63)) || (repeaterDispatchChar === 43)) || (repeaterDispatchChar === 123))) {
    switch (compiledToken.charCodeAt(0)) {
      case 94:
      case 36: {
        var isTokenAnAssertion = true;
        break;
      }
      case 40: {
        var isTokenAnAssertion = ((compiledToken.charCodeAt(1) === 63) && (compiledToken.charCodeAt(2) !== 58));
        break;
      }
      case 92: {
        var c = compiledToken.charCodeAt(1);
        var isTokenAnAssertion = ((c === 66) || (c === 98));
        break;
      }
      default: {
        var isTokenAnAssertion = false;
      }
    }
    var wrappedToken = (isTokenAnAssertion ? (("(?:" + compiledToken) + ")") : compiledToken);
    var baseRepeater = $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar);
    if (($thiz.b !== len)) {
      switch (pattern.charCodeAt($thiz.b)) {
        case 43: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, wrappedToken, baseRepeater);
          break;
        }
        case 63: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return ((("" + wrappedToken) + baseRepeater) + "?");
          break;
        }
        default: {
          return (("" + wrappedToken) + baseRepeater);
        }
      }
    } else {
      return (("" + wrappedToken) + baseRepeater);
    }
  } else {
    return compiledToken;
  }
}
function $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar) {
  var pattern = $thiz.ax;
  var startOfRepeater = $thiz.b;
  $thiz.b = ((1 + $thiz.b) | 0);
  if ((repeaterDispatchChar === 123)) {
    var len = pattern.length;
    if ((($thiz.b === len) || (!((((pattern.charCodeAt($thiz.b) - 48) | 0) >>> 0) <= 9)))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    while ((($thiz.b !== len) && ((((pattern.charCodeAt($thiz.b) - 48) | 0) >>> 0) <= 9))) {
      $thiz.b = ((1 + $thiz.b) | 0);
    }
    if (($thiz.b === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    if ((pattern.charCodeAt($thiz.b) === 44)) {
      $thiz.b = ((1 + $thiz.b) | 0);
      while ((($thiz.b !== len) && ((((pattern.charCodeAt($thiz.b) - 48) | 0) >>> 0) <= 9))) {
        $thiz.b = ((1 + $thiz.b) | 0);
      }
    }
    if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 125))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    $thiz.b = ((1 + $thiz.b) | 0);
  }
  return pattern.substring(startOfRepeater, $thiz.b);
}
function $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken, baseRepeater) {
  var end = ($thiz.bE.length | 0);
  var i = 0;
  while ((i < end)) {
    var value = i;
    var mapped = ($thiz.bE[value] | 0);
    if ((mapped > compiledGroupCountBeforeThisToken)) {
      $thiz.bE[value] = ((1 + mapped) | 0);
    }
    i = ((1 + i) | 0);
  }
  var amendedToken = compiledToken.replace($m_ju_regex_PatternCompiler$().li, ((arg1$2, arg2$2, arg3$2) => {
    var num = arg2$2.length;
    var t = ((num >>> 31) | 0);
    if (((((1 & ((num + t) | 0)) - t) | 0) === 0)) {
      return arg1$2;
    } else {
      var groupNumber = (parseInt(arg3$2, 10) | 0);
      return ((groupNumber > compiledGroupCountBeforeThisToken) ? (("" + arg2$2) + ((1 + groupNumber) | 0)) : arg1$2);
    }
  }));
  $thiz.bD = ((1 + $thiz.bD) | 0);
  var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
  return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")");
}
function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
  var pattern = $thiz.ax;
  var len = pattern.length;
  if ((((1 + $thiz.b) | 0) === len)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\ at end of pattern");
  }
  $thiz.b = ((1 + $thiz.b) | 0);
  var index = $thiz.b;
  var dispatchChar = pattern.charCodeAt(index);
  switch (dispatchChar) {
    case 100:
    case 68:
    case 104:
    case 72:
    case 115:
    case 83:
    case 118:
    case 86:
    case 119:
    case 87:
    case 112:
    case 80: {
      var cls = $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar);
      var x1$2 = cls.gR;
      switch (x1$2) {
        case 0: {
          return (("\\p{" + cls.ct) + "}");
          break;
        }
        case 1: {
          return (("\\P{" + cls.ct) + "}");
          break;
        }
        case 2: {
          return (("[" + cls.ct) + "]");
          break;
        }
        case 3: {
          return $m_ju_regex_PatternCompiler$().ih(cls.ct);
          break;
        }
        default: {
          throw new $c_jl_AssertionError(x1$2);
        }
      }
      break;
    }
    case 98: {
      if ((pattern.substring($thiz.b, ((4 + $thiz.b) | 0)) === "b{g}")) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\b{g} is not supported");
      } else if (((320 & $thiz.L) !== 0)) {
        $thiz.f0("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.L) !== 0)) {
        $thiz.f0("\\B with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\B";
      }
      break;
    }
    case 65: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "^";
      break;
    }
    case 71: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\G in the middle of a pattern is not supported");
      break;
    }
    case 90: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return (("(?=" + (((1 & $thiz.L) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])")) + "?$)");
      break;
    }
    case 122: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "$";
      break;
    }
    case 82: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "(?:\r\n|[\n-\r\u0085\u2028\u2029])";
      break;
    }
    case 88: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\X is not supported");
      break;
    }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57: {
      var start = $thiz.b;
      var end = ((1 + start) | 0);
      while (true) {
        if (((end !== len) && ((((pattern.charCodeAt(end) - 48) | 0) >>> 0) <= 9))) {
          var s = pattern.substring(start, ((1 + end) | 0));
          var $x_1 = ((parseInt(s, 10) | 0) <= ((($thiz.bE.length | 0) - 1) | 0));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          end = ((1 + end) | 0);
        } else {
          break;
        }
      }
      var groupString = pattern.substring(start, end);
      var groupNumber = (parseInt(groupString, 10) | 0);
      if ((groupNumber > ((($thiz.bE.length | 0) - 1) | 0))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"));
      }
      var compiledGroupNumber = ($thiz.bE[groupNumber] | 0);
      $thiz.b = end;
      return (("(?:\\" + compiledGroupNumber) + ")");
      break;
    }
    case 107: {
      $thiz.b = ((1 + $thiz.b) | 0);
      if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 60))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\k is not followed by '<' for named capturing group");
      }
      $thiz.b = ((1 + $thiz.b) | 0);
      var groupName = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
      var dict = $thiz.fi;
      if ((!(!(!$m_jl_Utils$Cache$().ep.call(dict, groupName))))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"));
      }
      var groupNumber$2 = (dict[groupName] | 0);
      var compiledGroupNumber$2 = ($thiz.bE[groupNumber$2] | 0);
      $thiz.b = ((1 + $thiz.b) | 0);
      return (("(?:\\" + compiledGroupNumber$2) + ")");
      break;
    }
    case 81: {
      var start$2 = ((1 + $thiz.b) | 0);
      var end$2 = (pattern.indexOf("\\E", start$2) | 0);
      if ((end$2 < 0)) {
        $thiz.b = pattern.length;
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, pattern.substring(start$2));
      } else {
        $thiz.b = ((2 + end$2) | 0);
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, pattern.substring(start$2, end$2));
      }
      break;
    }
    default: {
      return $p_ju_regex_PatternCompiler__literal__I__T($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz));
    }
  }
}
function $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) {
  var pattern = $thiz.ax;
  var x1 = $f_T__codePointAt__I__I(pattern, $thiz.b);
  switch (x1) {
    case 48: {
      return $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz);
      break;
    }
    case 120: {
      return $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz);
      break;
    }
    case 117: {
      return $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz);
      break;
    }
    case 78: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\N is not supported");
      break;
    }
    case 97: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 7;
      break;
    }
    case 116: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 9;
      break;
    }
    case 110: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 10;
      break;
    }
    case 102: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 12;
      break;
    }
    case 114: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 13;
      break;
    }
    case 101: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 27;
      break;
    }
    case 99: {
      $thiz.b = ((1 + $thiz.b) | 0);
      if (($thiz.b === pattern.length)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal control escape sequence");
      }
      var cp = $f_T__codePointAt__I__I(pattern, $thiz.b);
      $thiz.b = (($thiz.b + ((cp >= 65536) ? 2 : 1)) | 0);
      return (64 ^ cp);
      break;
    }
    default: {
      if ((((((x1 - 65) | 0) >>> 0) <= 25) || ((((x1 - 97) | 0) >>> 0) <= 25))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal/unsupported escape sequence");
      }
      $thiz.b = (($thiz.b + ((x1 >= 65536) ? 2 : 1)) | 0);
      return x1;
    }
  }
}
function $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz) {
  var pattern = $thiz.ax;
  var len = pattern.length;
  var start = $thiz.b;
  var d1 = ((((1 + start) | 0) < len) ? ((pattern.charCodeAt(((1 + start) | 0)) - 48) | 0) : (-1));
  if (((d1 >>> 0) > 7)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal octal escape sequence");
  }
  var d2 = ((((2 + start) | 0) < len) ? ((pattern.charCodeAt(((2 + start) | 0)) - 48) | 0) : (-1));
  if (((d2 >>> 0) > 7)) {
    $thiz.b = ((2 + $thiz.b) | 0);
    return d1;
  } else if ((d1 > 3)) {
    $thiz.b = ((3 + $thiz.b) | 0);
    return (((d1 << 3) + d2) | 0);
  } else {
    var d3 = ((((3 + start) | 0) < len) ? ((pattern.charCodeAt(((3 + start) | 0)) - 48) | 0) : (-1));
    if (((d3 >>> 0) > 7)) {
      $thiz.b = ((3 + $thiz.b) | 0);
      return (((d1 << 3) + d2) | 0);
    } else {
      $thiz.b = ((4 + $thiz.b) | 0);
      return (((((d1 << 6) + (d2 << 3)) | 0) + d3) | 0);
    }
  }
}
function $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz) {
  var pattern = $thiz.ax;
  var len = pattern.length;
  var start = ((1 + $thiz.b) | 0);
  if (((start !== len) && (pattern.charCodeAt(start) === 123))) {
    var innerStart = ((1 + start) | 0);
    var innerEnd = (pattern.indexOf("}", innerStart) | 0);
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed hexadecimal escape sequence");
    }
    var cp = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, innerStart, innerEnd, "hexadecimal");
    $thiz.b = ((1 + innerEnd) | 0);
    return cp;
  } else {
    var cp$2 = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, ((2 + start) | 0), "hexadecimal");
    $thiz.b = ((2 + start) | 0);
    return cp$2;
  }
}
function $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz) {
  var pattern = $thiz.ax;
  var start = ((1 + $thiz.b) | 0);
  var end = ((4 + start) | 0);
  var codeUnit = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, "Unicode");
  $thiz.b = end;
  var lowStart = ((2 + end) | 0);
  var lowEnd = ((4 + lowStart) | 0);
  if (((((-1024) & codeUnit) === 55296) && (pattern.substring(end, lowStart) === "\\u"))) {
    var low = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, lowStart, lowEnd, "Unicode");
    if ((((-1024) & low) === 56320)) {
      $thiz.b = lowEnd;
      return ((((64 + (1023 & codeUnit)) | 0) << 10) | (1023 & low));
    } else {
      return codeUnit;
    }
  } else {
    return codeUnit;
  }
}
function $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, nameForError) {
  var pattern = $thiz.ax;
  var len = pattern.length;
  if (((end === start) || (end > len))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
  }
  var i = start;
  while ((i < end)) {
    var value = i;
    var c = pattern.charCodeAt(value);
    if ((!((((((c - 48) | 0) >>> 0) <= 9) || ((((c - 65) | 0) >>> 0) <= 5)) || ((((c - 97) | 0) >>> 0) <= 5)))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
    }
    i = ((1 + i) | 0);
  }
  if ((((end - start) | 0) > 6)) {
    var cp = 1114112;
  } else {
    var s = pattern.substring(start, end);
    var cp = (parseInt(s, 16) | 0);
  }
  if ((cp > 1114111)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Hexadecimal codepoint is too big");
  }
  return cp;
}
function $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar) {
  $thiz.b = ((1 + $thiz.b) | 0);
  switch (dispatchChar) {
    case 100:
    case 68: {
      var positive = $m_ju_regex_PatternCompiler$().lb;
      break;
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().le;
      break;
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().lc;
      break;
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().lf;
      break;
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().ld;
      break;
    }
    case 112:
    case 80: {
      var positive = $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz);
      break;
    }
    default: {
      var positive;
      throw new $c_jl_AssertionError($bC(dispatchChar));
    }
  }
  return ((dispatchChar >= 97) ? positive : positive.r4());
}
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.ax;
  var len = pattern.length;
  var start = $thiz.b;
  if ((start === len)) {
    var property = "?";
  } else if ((pattern.charCodeAt(start) === 123)) {
    var innerStart = ((1 + start) | 0);
    var innerEnd = (pattern.indexOf("}", innerStart) | 0);
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character family");
    }
    $thiz.b = innerEnd;
    var property = pattern.substring(innerStart, innerEnd);
  } else {
    var property = pattern.substring(start, ((1 + start) | 0));
  }
  var dict = $m_ju_regex_PatternCompiler$().iP;
  if ((!(!(!$m_jl_Utils$Cache$().ep.call(dict, property))))) {
    $thiz.f0("Unicode character family", "2018");
  }
  var property2 = ((((66 & $thiz.L) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().iP;
  var result = dict$1[property2];
  $thiz.b = ((1 + $thiz.b) | 0);
  return result;
}
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.ax;
  var len = pattern.length;
  $thiz.b = ((1 + $thiz.b) | 0);
  var isNegated = (($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 94));
  if (isNegated) {
    $thiz.b = ((1 + $thiz.b) | 0);
  }
  var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.L) === 2), isNegated);
  while (($thiz.b !== len)) {
    var x1 = $f_T__codePointAt__I__I(pattern, $thiz.b);
    matchResult: {
      switch (x1) {
        case 93: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return builder.qw();
          break;
        }
        case 38: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if ((($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 38))) {
            $thiz.b = ((1 + $thiz.b) | 0);
            builder.rB();
            break matchResult;
          } else {
            $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, 38, len, pattern, builder);
            break matchResult;
          }
          break;
        }
        case 91: {
          $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(builder, $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz));
          break matchResult;
          break;
        }
        case 92: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if (($thiz.b === len)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal escape sequence");
          }
          var index$2 = $thiz.b;
          var c2 = pattern.charCodeAt(index$2);
          switch (c2) {
            case 100:
            case 68:
            case 104:
            case 72:
            case 115:
            case 83:
            case 118:
            case 86:
            case 119:
            case 87:
            case 112:
            case 80: {
              builder.pC($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
              break matchResult;
              break;
            }
            case 81: {
              $thiz.b = ((1 + $thiz.b) | 0);
              var fromIndex = $thiz.b;
              var end = (pattern.indexOf("\\E", fromIndex) | 0);
              if ((end < 0)) {
                $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
              }
              builder.pE(pattern, $thiz.b, end);
              $thiz.b = ((2 + end) | 0);
              break matchResult;
              break;
            }
            default: {
              $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz), len, pattern, builder);
              break matchResult;
            }
          }
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & $thiz.L) !== 0)) {
            $thiz.b = ((1 + $thiz.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & $thiz.L) !== 0)) {
            $thiz.kw();
            break matchResult;
          }
          break;
        }
      }
      $thiz.b = (($thiz.b + ((x1 >= 65536) ? 2 : 1)) | 0);
      $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, x1, len, pattern, builder);
    }
  }
  $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
}
function $p_ju_regex_PatternCompiler__compileGroup__T($thiz) {
  var pattern = $thiz.ax;
  var len = pattern.length;
  var start = $thiz.b;
  if (((((1 + start) | 0) === len) || (pattern.charCodeAt(((1 + start) | 0)) !== 63))) {
    $thiz.b = ((1 + start) | 0);
    $thiz.bD = ((1 + $thiz.bD) | 0);
    $thiz.bE.push($thiz.bD);
    return (("(" + $thiz.gm(true)) + ")");
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
    }
    var index$1 = ((2 + start) | 0);
    var c1 = pattern.charCodeAt(index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.b = ((3 + start) | 0);
      return ((("" + pattern.substring(start, ((3 + start) | 0))) + $thiz.gm(true)) + ")");
    } else if ((c1 === 60)) {
      if ((((3 + start) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
      }
      var index$2 = ((3 + start) | 0);
      var c2 = pattern.charCodeAt(index$2);
      if ((((((c2 - 65) | 0) >>> 0) <= 25) || ((((c2 - 97) | 0) >>> 0) <= 25))) {
        $thiz.b = ((3 + start) | 0);
        var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
        var dict = $thiz.fi;
        if ((!(!$m_jl_Utils$Cache$().ep.call(dict, name)))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.bD = ((1 + $thiz.bD) | 0);
        $thiz.bE.push($thiz.bD);
        var dict$1 = $thiz.fi;
        var value = ((($thiz.bE.length | 0) - 1) | 0);
        dict$1[name] = value;
        $thiz.b = ((1 + $thiz.b) | 0);
        return (("(" + $thiz.gm(true)) + ")");
      } else {
        if (((c2 !== 33) && (c2 !== 61))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.f0("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.b = ((3 + start) | 0);
      $thiz.bD = ((1 + $thiz.bD) | 0);
      var groupNumber = $thiz.bD;
      return (((("(?:(?=(" + $thiz.gm(true)) + "))\\") + groupNumber) + ")");
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
    }
  }
}
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.ax;
  var len = pattern.length;
  var start = $thiz.b;
  while (true) {
    if (($thiz.b !== len)) {
      var index = $thiz.b;
      var c = pattern.charCodeAt(index);
      var $x_1 = ((((((c - 65) | 0) >>> 0) <= 25) || ((((c - 97) | 0) >>> 0) <= 25)) || ((((c - 48) | 0) >>> 0) <= 9));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.b = ((1 + $thiz.b) | 0);
    } else {
      break;
    }
  }
  if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 62))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "named capturing group is missing trailing '>'");
  }
  return pattern.substring(start, $thiz.b);
}
function $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, startCodePoint, len$2, pattern$3, builder$1) {
  if (((4 & $thiz.L) !== 0)) {
    $p_ju_regex_PatternCompiler__skipComments__V($thiz);
  }
  if ((($thiz.b !== len$2) && (pattern$3.charCodeAt($thiz.b) === 45))) {
    $thiz.b = ((1 + $thiz.b) | 0);
    if (((4 & $thiz.L) !== 0)) {
      $p_ju_regex_PatternCompiler__skipComments__V($thiz);
    }
    if (($thiz.b === len$2)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
    }
    var cpEnd = $f_T__codePointAt__I__I(pattern$3, $thiz.b);
    if (((cpEnd === 91) || (cpEnd === 93))) {
      builder$1.i1(startCodePoint);
      builder$1.i1(45);
    } else {
      $thiz.b = (($thiz.b + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      builder$1.pD(startCodePoint, endCodePoint);
    }
  } else {
    builder$1.i1(startCodePoint);
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.ax = null;
  this.L = 0;
  this.gQ = false;
  this.b = 0;
  this.bD = 0;
  this.bE = null;
  this.fi = null;
  this.ax = pattern;
  this.L = flags;
  this.gQ = false;
  this.b = 0;
  this.bD = 0;
  this.bE = [0];
  this.fi = ({});
}
$p = $c_ju_regex_PatternCompiler.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
$h_ju_regex_PatternCompiler.prototype = $p;
$p.q0 = (function() {
  if (((256 & this.L) !== 0)) {
    this.L = (64 | this.L);
  }
  var isLiteral = ((16 & this.L) !== 0);
  if ((!isLiteral)) {
    $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this);
  }
  if (((128 & this.L) !== 0)) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported");
  }
  if (((8 & this.L) !== 0)) {
    this.f0("MULTILINE", "2018");
  }
  if (((256 & this.L) !== 0)) {
    this.f0("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.ax);
  } else {
    if ((this.ax.substring(this.b, ((2 + this.b) | 0)) === "\\G")) {
      this.gQ = true;
      this.b = ((2 + this.b) | 0);
    }
    var jsPattern = this.gm(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().iO ? "us" : "u");
  var jsFlags = (((66 & this.L) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.ax, this.L, jsPattern, jsFlags, this.gQ, (((this.bE.length | 0) - 1) | 0), this.bE, this.fi);
});
$p.f0 = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$p.gm = (function(insideGroup) {
  var pattern = this.ax;
  var len = pattern.length;
  var result = "";
  while ((this.b !== len)) {
    var dispatchCP = $f_T__codePointAt__I__I(pattern, this.b);
    matchResult: {
      switch (dispatchCP) {
        case 41: {
          if ((!insideGroup)) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unmatched closing ')'");
          }
          this.b = ((1 + this.b) | 0);
          return result;
          break;
        }
        case 124: {
          if ((this.gQ && (!insideGroup))) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "\\G is not supported when there is an alternative at the top level");
          }
          this.b = ((1 + this.b) | 0);
          result = (result + "|");
          break matchResult;
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & this.L) !== 0)) {
            this.b = ((1 + this.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & this.L) !== 0)) {
            this.kw();
            break matchResult;
          }
          break;
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().eb(dispatchCP)) + "'"));
          break;
        }
      }
      var compiledGroupCountBeforeThisToken = this.bD;
      switch (dispatchCP) {
        case 92: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileEscape__T(this);
          break;
        }
        case 91: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileCharacterClass__T(this);
          break;
        }
        case 40: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileGroup__T(this);
          break;
        }
        case 94: {
          this.b = ((1 + this.b) | 0);
          var compiledToken = "^";
          break;
        }
        case 36: {
          this.b = ((1 + this.b) | 0);
          var compiledToken = "$";
          break;
        }
        case 46: {
          this.b = ((1 + this.b) | 0);
          var rejected = (((32 & this.L) !== 0) ? "" : (((1 & this.L) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().ih(rejected);
          break;
        }
        default: {
          this.b = ((this.b + ((dispatchCP >= 65536) ? 2 : 1)) | 0);
          var compiledToken = $p_ju_regex_PatternCompiler__literal__I__T(this, dispatchCP);
        }
      }
      result = (("" + result) + $p_ju_regex_PatternCompiler__compileRepeater__I__T__T(this, compiledGroupCountBeforeThisToken, compiledToken));
    }
  }
  if (insideGroup) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unclosed group");
  }
  return result;
});
$p.kw = (function() {
  var pattern = this.ax;
  var len = pattern.length;
  while (true) {
    if ((this.b !== len)) {
      var index = this.b;
      var c = pattern.charCodeAt(index);
      var $x_1 = (!(((((c === 10) || (c === 13)) || (c === 133)) || (c === 8232)) || (c === 8233)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      this.b = ((1 + this.b) | 0);
    } else {
      break;
    }
  }
});
var $d_ju_regex_PatternCompiler = new $TypeData().i($c_ju_regex_PatternCompiler, "java.util.regex.PatternCompiler", ({
  d1: 1
}));
function $p_ju_regex_PatternCompiler$__featureTest__T__Z($thiz, flags) {
  try {
    new RegExp("", flags);
    return true;
  } catch (e) {
    return false;
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler$() {
  this.lh = null;
  this.li = null;
  this.p8 = false;
  this.p7 = false;
  this.iO = false;
  this.lg = false;
  this.lb = null;
  this.p4 = null;
  this.le = null;
  this.lc = null;
  this.p5 = null;
  this.lf = null;
  this.ld = null;
  this.p6 = null;
  this.iP = null;
  this.p9 = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.lh = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.li = new RegExp("(\\\\+)(\\d+)", "g");
  this.p8 = true;
  this.p7 = true;
  this.iO = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  this.lg = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.lb = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.p4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.le = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.lc = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.p5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.lf = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.ld = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.p6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
  var r = ({});
  var value = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-z");
  r.Lower = value;
  var value$1 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Z");
  r.Upper = value$1;
  var value$2 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u007f");
  r.ASCII = value$2;
  var value$3 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Za-z");
  r.Alpha = value$3;
  var value$4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  r.Digit = value$4;
  var value$5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Za-z");
  r.Alnum = value$5;
  var value$6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-/:-@[-`{-~");
  r.Punct = value$6;
  var value$7 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-~");
  r.Graph = value$7;
  var value$8 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, " -~");
  r.Print = value$8;
  var value$9 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t ");
  r.Blank = value$9;
  var value$10 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u001f\u007f");
  r.Cntrl = value$10;
  var value$11 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Fa-f");
  r.XDigit = value$11;
  var value$12 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  r.Space = value$12;
  this.iP = r;
  this.p9 = new RegExp("(?:^|_)[a-z]", "g");
}
$p = $c_ju_regex_PatternCompiler$.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
$h_ju_regex_PatternCompiler$.prototype = $p;
$p.pZ = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).q0();
});
$p.ox = (function(c) {
  switch (c) {
    case 105: {
      return 2;
      break;
    }
    case 100: {
      return 1;
      break;
    }
    case 109: {
      return 8;
      break;
    }
    case 115: {
      return 32;
      break;
    }
    case 117: {
      return 64;
      break;
    }
    case 120: {
      return 4;
      break;
    }
    case 85: {
      return 256;
      break;
    }
    default: {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag");
    }
  }
});
$p.ih = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().iO ? "." : "[\\d\\D]"));
});
$p.eb = (function(codePoint) {
  return String.fromCodePoint(codePoint);
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().i($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
  d2: 1
}));
var $n_ju_regex_PatternCompiler$;
function $m_ju_regex_PatternCompiler$() {
  if ((!$n_ju_regex_PatternCompiler$)) {
    $n_ju_regex_PatternCompiler$ = new $c_ju_regex_PatternCompiler$();
  }
  return $n_ju_regex_PatternCompiler$;
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V($thiz, alt) {
  if (($thiz.bV === "")) {
    $thiz.bV = alt;
  } else {
    $thiz.bV = (($thiz.bV + "|") + alt);
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T($thiz) {
  if ($thiz.iR) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().ih($thiz.T);
    return (($thiz.bV === "") ? negThisSegment : (((("(?:(?!" + $thiz.bV) + ")") + negThisSegment) + ")"));
  } else {
    return (($thiz.T === "") ? (($thiz.bV === "") ? "[^\\d\\D]" : (("(?:" + $thiz.bV) + ")")) : (($thiz.bV === "") ? (("[" + $thiz.T) + "]") : (((("(?:" + $thiz.bV) + "|[") + $thiz.T) + "])")));
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().eb(codePoint);
  return (((((((codePoint - 92) | 0) >>> 0) <= 1) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.iQ = false;
  this.iR = false;
  this.fj = null;
  this.bV = null;
  this.T = null;
  this.iQ = asciiCaseInsensitive;
  this.iR = isNegated;
  this.fj = "";
  this.bV = "";
  this.T = "";
}
$p = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $p;
$p.qw = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.fj === "") ? conjunct : ((("(?:" + this.fj) + conjunct) + ")"));
});
$p.rB = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.fj = (this.fj + (this.iR ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.bV = "";
  this.T = "";
});
$p.pC = (function(cls) {
  var x1 = cls.gR;
  switch (x1) {
    case 0: {
      this.T = ((this.T + ("\\p{" + cls.ct)) + "}");
      break;
    }
    case 1: {
      this.T = ((this.T + ("\\P{" + cls.ct)) + "}");
      break;
    }
    case 2: {
      this.T = (("" + this.T) + cls.ct);
      break;
    }
    case 3: {
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().ih(cls.ct));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$p.pE = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I(str, i);
    this.i1(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$p.i1 = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.T = (("" + s) + this.T);
  } else {
    this.T = (("" + this.T) + s);
  }
  if (this.iQ) {
    if (((((codePoint - 65) | 0) >>> 0) <= 25)) {
      this.T = (("" + this.T) + $m_ju_regex_PatternCompiler$().eb(((32 + codePoint) | 0)));
    } else if (((((codePoint - 97) | 0) >>> 0) <= 25)) {
      this.T = (("" + this.T) + $m_ju_regex_PatternCompiler$().eb(((codePoint - 32) | 0)));
    }
  }
});
$p.pD = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.T = (s + this.T);
  } else {
    this.T = (this.T + s);
  }
  if (this.iQ) {
    var start = ((startCodePoint > 65) ? startCodePoint : 65);
    var end = ((endCodePoint < 90) ? endCodePoint : 90);
    if ((start <= end)) {
      var $x_1 = this.T;
      var start$1 = ((32 + start) | 0);
      var end$1 = ((32 + end) | 0);
      this.T = ($x_1 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$1) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$1)));
    }
    var start$2 = ((startCodePoint > 97) ? startCodePoint : 97);
    var end$2 = ((endCodePoint < 122) ? endCodePoint : 122);
    if ((start$2 <= end$2)) {
      var $x_2 = this.T;
      var start$3 = ((start$2 - 32) | 0);
      var end$3 = ((end$2 - 32) | 0);
      this.T = ($x_2 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$3) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$3)));
    }
  }
});
var $d_ju_regex_PatternCompiler$CharacterClassBuilder = new $TypeData().i($c_ju_regex_PatternCompiler$CharacterClassBuilder, "java.util.regex.PatternCompiler$CharacterClassBuilder", ({
  d3: 1
}));
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.iS)) {
    $thiz.iT = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.gR), $thiz.ct);
    $thiz.iS = true;
  }
  return $thiz.iT;
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.iT = null;
  this.gR = 0;
  this.ct = null;
  this.iS = false;
  this.gR = kind;
  this.ct = data;
}
$p = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $p;
$p.r4 = (function() {
  return ((!this.iS) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.iT);
});
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().i($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  d4: 1
}));
/** @constructor */
function $c_Lorg_loveroo_predef_ListUtil$() {
}
$p = $c_Lorg_loveroo_predef_ListUtil$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_predef_ListUtil$;
/** @constructor */
function $h_Lorg_loveroo_predef_ListUtil$() {
}
$h_Lorg_loveroo_predef_ListUtil$.prototype = $p;
$p.ik = (function(elements) {
  var list = $ct_ju_ArrayList__I__(new $c_ju_ArrayList(), elements.G());
  elements.e9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$0$2) => list.w(x$0$2))));
  return list;
});
var $d_Lorg_loveroo_predef_ListUtil$ = new $TypeData().i($c_Lorg_loveroo_predef_ListUtil$, "org.loveroo.predef.ListUtil$", ({
  d6: 1
}));
var $n_Lorg_loveroo_predef_ListUtil$;
function $m_Lorg_loveroo_predef_ListUtil$() {
  if ((!$n_Lorg_loveroo_predef_ListUtil$)) {
    $n_Lorg_loveroo_predef_ListUtil$ = new $c_Lorg_loveroo_predef_ListUtil$();
  }
  return $n_Lorg_loveroo_predef_ListUtil$;
}
/** @constructor */
function $c_Lorg_loveroo_predef_Predef$() {
}
$p = $c_Lorg_loveroo_predef_Predef$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_predef_Predef$;
/** @constructor */
function $h_Lorg_loveroo_predef_Predef$() {
}
$h_Lorg_loveroo_predef_Predef$.prototype = $p;
$p.oo = (function(list, index) {
  return (((index < 0) || (index >= list.l())) ? null : list.s(index));
});
$p.ii = (function(list, func) {
  var newList = $ct_ju_ArrayList__I__(new $c_ju_ArrayList(), list.l());
  $f_jl_Iterable__forEach__ju_function_Consumer__V(list, new $c_Lorg_loveroo_predef_Predef$$anon$2(newList, func));
  return newList;
});
var $d_Lorg_loveroo_predef_Predef$ = new $TypeData().i($c_Lorg_loveroo_predef_Predef$, "org.loveroo.predef.Predef$", ({
  d7: 1
}));
var $n_Lorg_loveroo_predef_Predef$;
function $m_Lorg_loveroo_predef_Predef$() {
  if ((!$n_Lorg_loveroo_predef_Predef$)) {
    $n_Lorg_loveroo_predef_Predef$ = new $c_Lorg_loveroo_predef_Predef$();
  }
  return $n_Lorg_loveroo_predef_Predef$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_Game() {
  this.x = null;
  this.lo = null;
  this.gS = null;
  this.x = new $c_Lorg_loveroo_webgl_engine_runtime_impl_WebEngineRuntime();
  $m_Lorg_loveroo_webgl_Game$().y = this;
  $f_Lorg_loveroo_webgl_engine_runtime_EngineRuntime__newFrame__jl_Void(this.x);
  this.x.mS.qW("english");
  var any$proxy1 = $m_Lorg_loveroo_webgl_Runtime$().lp.getElementById("gl_canvas");
  this.lo = new $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer(any$proxy1.getContext("webgl"));
  this.gS = new $c_Lorg_loveroo_webgl_game_scene_World();
  this.gS.ks();
}
$p = $c_Lorg_loveroo_webgl_Game.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_Game;
/** @constructor */
function $h_Lorg_loveroo_webgl_Game() {
}
$h_Lorg_loveroo_webgl_Game.prototype = $p;
$p.oM = (function(delta) {
  $f_Lorg_loveroo_webgl_game_Scene__update__jl_Void(this.gS);
  this.gS.bP(delta);
  this.lo.bP(delta);
  window.requestAnimationFrame(((delta$3) => this.oM((+delta$3))));
});
var $d_Lorg_loveroo_webgl_Game = new $TypeData().i($c_Lorg_loveroo_webgl_Game, "org.loveroo.webgl.Game", ({
  d9: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_Game$() {
  this.y = null;
  this.y = null;
}
$p = $c_Lorg_loveroo_webgl_Game$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_Game$;
/** @constructor */
function $h_Lorg_loveroo_webgl_Game$() {
}
$h_Lorg_loveroo_webgl_Game$.prototype = $p;
var $d_Lorg_loveroo_webgl_Game$ = new $TypeData().i($c_Lorg_loveroo_webgl_Game$, "org.loveroo.webgl.Game$", ({
  da: 1
}));
var $n_Lorg_loveroo_webgl_Game$;
function $m_Lorg_loveroo_webgl_Game$() {
  if ((!$n_Lorg_loveroo_webgl_Game$)) {
    $n_Lorg_loveroo_webgl_Game$ = new $c_Lorg_loveroo_webgl_Game$();
  }
  return $n_Lorg_loveroo_webgl_Game$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_Runtime$() {
  this.lp = null;
  $n_Lorg_loveroo_webgl_Runtime$ = this;
  this.lp = document;
}
$p = $c_Lorg_loveroo_webgl_Runtime$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_Runtime$;
/** @constructor */
function $h_Lorg_loveroo_webgl_Runtime$() {
}
$h_Lorg_loveroo_webgl_Runtime$.prototype = $p;
$p.oT = (function() {
  return (+window.performance.now());
});
var $d_Lorg_loveroo_webgl_Runtime$ = new $TypeData().i($c_Lorg_loveroo_webgl_Runtime$, "org.loveroo.webgl.Runtime$", ({
  db: 1
}));
var $n_Lorg_loveroo_webgl_Runtime$;
function $m_Lorg_loveroo_webgl_Runtime$() {
  if ((!$n_Lorg_loveroo_webgl_Runtime$)) {
    $n_Lorg_loveroo_webgl_Runtime$ = new $c_Lorg_loveroo_webgl_Runtime$();
  }
  return $n_Lorg_loveroo_webgl_Runtime$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_Runtime$package$() {
}
$p = $c_Lorg_loveroo_webgl_Runtime$package$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_Runtime$package$;
/** @constructor */
function $h_Lorg_loveroo_webgl_Runtime$package$() {
}
$h_Lorg_loveroo_webgl_Runtime$package$.prototype = $p;
$p.qY = (function() {
  return new $c_Lorg_loveroo_webgl_Game().oM(0.0);
});
var $d_Lorg_loveroo_webgl_Runtime$package$ = new $TypeData().i($c_Lorg_loveroo_webgl_Runtime$package$, "org.loveroo.webgl.Runtime$package$", ({
  dc: 1
}));
var $n_Lorg_loveroo_webgl_Runtime$package$;
function $m_Lorg_loveroo_webgl_Runtime$package$() {
  if ((!$n_Lorg_loveroo_webgl_Runtime$package$)) {
    $n_Lorg_loveroo_webgl_Runtime$package$ = new $c_Lorg_loveroo_webgl_Runtime$package$();
  }
  return $n_Lorg_loveroo_webgl_Runtime$package$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_data_BufferWrapper(buff) {
  this.fk = null;
  this.gT = 0;
  this.fk = buff;
  this.gT = 0;
}
$p = $c_Lorg_loveroo_webgl_engine_data_BufferWrapper.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_data_BufferWrapper;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_data_BufferWrapper() {
}
$h_Lorg_loveroo_webgl_engine_data_BufferWrapper.prototype = $p;
$p.ag = (function(v) {
  this.fk[this.gT] = v;
  this.gT = ((1 + this.gT) | 0);
});
var $d_Lorg_loveroo_webgl_engine_data_BufferWrapper = new $TypeData().i($c_Lorg_loveroo_webgl_engine_data_BufferWrapper, "org.loveroo.webgl.engine.data.BufferWrapper", ({
  dd: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_data_Translator() {
  this.iU = null;
  this.iU = $ct_scm_HashMap__(new $c_scm_HashMap());
}
$p = $c_Lorg_loveroo_webgl_engine_data_Translator.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_data_Translator;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_data_Translator() {
}
$h_Lorg_loveroo_webgl_engine_data_Translator.prototype = $p;
$p.qW = (function(lang) {
  return $m_Lorg_loveroo_webgl_Game$().y.x.hv.oz(((($m_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$().lr + "/") + lang) + ".json"), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((l$2) => {
    var json = Object.entries(JSON.parse(l$2));
    this.iU.dE();
    var len = (json.length | 0);
    var i = 0;
    while ((i < len)) {
      var x0 = json[i];
      this.iU.rh(x0[0], ("" + x0[1]));
      i = ((1 + i) | 0);
    }
  })));
});
var $d_Lorg_loveroo_webgl_engine_data_Translator = new $TypeData().i($c_Lorg_loveroo_webgl_engine_data_Translator, "org.loveroo.webgl.engine.data.Translator", ({
  de: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader() {
}
$p = $c_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader() {
}
$h_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader.prototype = $p;
$p.oz = (function(path, onLoad) {
  $m_sjs_js_Thenable$ThenableOps$().oU(fetch((("" + window.location.href) + path), (() => {
    var this$1 = ({});
    this$1.method = "GET";
    return this$1;
  })())).qx(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$3$2) => $m_sjs_js_Thenable$ThenableOps$().oU(_$3$2.text()))), $m_s_concurrent_ExecutionContext$().oq()).qZ(onLoad, $m_s_concurrent_ExecutionContext$().oq());
});
$p.qV = (function(path, onLoad) {
  var img = new Image();
  img.onload = ((_$4$2) => onLoad.n(img));
  img.src = ((((("" + window.location.href) + $m_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$().lt) + "/") + path) + ".png");
});
var $d_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader = new $TypeData().i($c_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader, "org.loveroo.webgl.engine.data.resource.ResourceLoader", ({
  dh: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$() {
  this.gU = null;
  this.ls = null;
  this.lt = null;
  this.lr = null;
  $n_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$ = this;
  this.gU = "assets";
  this.ls = (this.gU + "/shader");
  this.lt = (this.gU + "/texture");
  this.lr = (this.gU + "/lang");
}
$p = $c_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$() {
}
$h_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$, "org.loveroo.webgl.engine.data.resource.ResourceLoader$", ({
  di: 1
}));
var $n_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$;
function $m_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$() {
  if ((!$n_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$)) {
    $n_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$ = new $c_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$();
  }
  return $n_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_input_Axis(pos, neg) {
  this.lv = null;
  this.lu = null;
  this.lv = pos;
  this.lu = neg;
}
$p = $c_Lorg_loveroo_webgl_engine_input_Axis.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_input_Axis;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_input_Axis() {
}
$h_Lorg_loveroo_webgl_engine_input_Axis.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_input_Axis = new $TypeData().i($c_Lorg_loveroo_webgl_engine_input_Axis, "org.loveroo.webgl.engine.input.Axis", ({
  dj: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_input_Axis$() {
  this.lx = null;
  this.lw = null;
  $n_Lorg_loveroo_webgl_engine_input_Axis$ = this;
  this.lx = new $c_Lorg_loveroo_webgl_engine_input_Axis($m_Lorg_loveroo_webgl_engine_input_Input$().ch.mR, $m_Lorg_loveroo_webgl_engine_input_Input$().ch.mO);
  this.lw = new $c_Lorg_loveroo_webgl_engine_input_Axis($m_Lorg_loveroo_webgl_engine_input_Input$().ch.mQ, $m_Lorg_loveroo_webgl_engine_input_Input$().ch.mP);
}
$p = $c_Lorg_loveroo_webgl_engine_input_Axis$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_input_Axis$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_input_Axis$() {
}
$h_Lorg_loveroo_webgl_engine_input_Axis$.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_input_Axis$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_input_Axis$, "org.loveroo.webgl.engine.input.Axis$", ({
  dk: 1
}));
var $n_Lorg_loveroo_webgl_engine_input_Axis$;
function $m_Lorg_loveroo_webgl_engine_input_Axis$() {
  if ((!$n_Lorg_loveroo_webgl_engine_input_Axis$)) {
    $n_Lorg_loveroo_webgl_engine_input_Axis$ = new $c_Lorg_loveroo_webgl_engine_input_Axis$();
  }
  return $n_Lorg_loveroo_webgl_engine_input_Axis$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_input_Button(location) {
  this.ly = 0;
  this.ly = location;
}
$p = $c_Lorg_loveroo_webgl_engine_input_Button.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_input_Button;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_input_Button() {
}
$h_Lorg_loveroo_webgl_engine_input_Button.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_input_Button = new $TypeData().i($c_Lorg_loveroo_webgl_engine_input_Button, "org.loveroo.webgl.engine.input.Button", ({
  dl: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_input_Buttons() {
}
$p = $c_Lorg_loveroo_webgl_engine_input_Buttons.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_input_Buttons;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_input_Buttons() {
}
$h_Lorg_loveroo_webgl_engine_input_Buttons.prototype = $p;
function $f_Lorg_loveroo_webgl_engine_input_Input__isButtonPressed__Lorg_loveroo_webgl_engine_input_Button__Z($thiz, button) {
  return ($thiz.kb(button) >= 1.0);
}
function $f_Lorg_loveroo_webgl_engine_input_Input__getCombinedAxis__Lorg_loveroo_webgl_engine_input_Axis__Lorg_loveroo_webgl_engine_input_Axis__Lorg_loveroo_webgl_engine_math_Vec2f($thiz, vertical, horizontal) {
  return new $c_Lorg_loveroo_webgl_engine_math_Vec2f($f_Lorg_loveroo_webgl_engine_input_Input__getAxis__Lorg_loveroo_webgl_engine_input_Axis__F($thiz, horizontal), $f_Lorg_loveroo_webgl_engine_input_Input__getAxis__Lorg_loveroo_webgl_engine_input_Axis__F($thiz, vertical));
}
function $f_Lorg_loveroo_webgl_engine_input_Input__getAxis__Lorg_loveroo_webgl_engine_input_Axis__F($thiz, axis) {
  return Math.fround(($thiz.kb(axis.lv) + Math.fround((-$thiz.kb(axis.lu)))));
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_input_Input$() {
  this.ch = null;
  this.ch = null;
}
$p = $c_Lorg_loveroo_webgl_engine_input_Input$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_input_Input$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_input_Input$() {
}
$h_Lorg_loveroo_webgl_engine_input_Input$.prototype = $p;
$p.qL = (function(input) {
  this.ch = input.mT;
});
var $d_Lorg_loveroo_webgl_engine_input_Input$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_input_Input$, "org.loveroo.webgl.engine.input.Input$", ({
  dp: 1
}));
var $n_Lorg_loveroo_webgl_engine_input_Input$;
function $m_Lorg_loveroo_webgl_engine_input_Input$() {
  if ((!$n_Lorg_loveroo_webgl_engine_input_Input$)) {
    $n_Lorg_loveroo_webgl_engine_input_Input$ = new $c_Lorg_loveroo_webgl_engine_input_Input$();
  }
  return $n_Lorg_loveroo_webgl_engine_input_Input$;
}
function $p_Lorg_loveroo_webgl_engine_math_Lerp$__ifTrue$proxy1$1__D__D__D($thiz, start$1, end$1) {
  return (+Math.max(start$1, end$1));
}
function $p_Lorg_loveroo_webgl_engine_math_Lerp$__ifTrue$proxy2$1__D__D__D($thiz, start$2, end$2) {
  return (+Math.min(start$2, end$2));
}
function $p_Lorg_loveroo_webgl_engine_math_Lerp$__ifTrue$proxy3$1__D__D($thiz, amount$1) {
  return (+Math.min(1.0, (+Math.max(0.0, amount$1))));
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_math_Lerp$() {
}
$p = $c_Lorg_loveroo_webgl_engine_math_Lerp$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_math_Lerp$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_math_Lerp$() {
}
$h_Lorg_loveroo_webgl_engine_math_Lerp$.prototype = $p;
$p.gn = (function(amount, start, end, order, clamp) {
  var max = (order ? $p_Lorg_loveroo_webgl_engine_math_Lerp$__ifTrue$proxy1$1__D__D__D(this, start, end) : end);
  var min = (order ? $p_Lorg_loveroo_webgl_engine_math_Lerp$__ifTrue$proxy2$1__D__D__D(this, start, end) : start);
  return (((clamp ? $p_Lorg_loveroo_webgl_engine_math_Lerp$__ifTrue$proxy3$1__D__D(this, amount) : amount) * (max - min)) + min);
});
var $d_Lorg_loveroo_webgl_engine_math_Lerp$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_math_Lerp$, "org.loveroo.webgl.engine.math.Lerp$", ({
  dq: 1
}));
var $n_Lorg_loveroo_webgl_engine_math_Lerp$;
function $m_Lorg_loveroo_webgl_engine_math_Lerp$() {
  if ((!$n_Lorg_loveroo_webgl_engine_math_Lerp$)) {
    $n_Lorg_loveroo_webgl_engine_math_Lerp$ = new $c_Lorg_loveroo_webgl_engine_math_Lerp$();
  }
  return $n_Lorg_loveroo_webgl_engine_math_Lerp$;
}
function $p_Lorg_loveroo_webgl_engine_math_NumberMove$__ifFalse$proxy1$1__F__F($thiz, amount$1) {
  return Math.fround((-amount$1));
}
function $p_Lorg_loveroo_webgl_engine_math_NumberMove$__ifTrue$proxy1$1__F__F__D($thiz, newValue$1, target$1) {
  return (+Math.min(newValue$1, target$1));
}
function $p_Lorg_loveroo_webgl_engine_math_NumberMove$__ifFalse$proxy2$1__F__F__D($thiz, newValue$2, target$2) {
  return (+Math.max(newValue$2, target$2));
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_math_NumberMove$() {
}
$p = $c_Lorg_loveroo_webgl_engine_math_NumberMove$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_math_NumberMove$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_math_NumberMove$() {
}
$h_Lorg_loveroo_webgl_engine_math_NumberMove$.prototype = $p;
$p.oA = (function(value, target, amount) {
  var ahead = (target > value);
  var newValue = Math.fround((value + (ahead ? amount : $p_Lorg_loveroo_webgl_engine_math_NumberMove$__ifFalse$proxy1$1__F__F(this, amount))));
  return Math.fround((ahead ? $p_Lorg_loveroo_webgl_engine_math_NumberMove$__ifTrue$proxy1$1__F__F__D(this, newValue, target) : $p_Lorg_loveroo_webgl_engine_math_NumberMove$__ifFalse$proxy2$1__F__F__D(this, newValue, target)));
});
var $d_Lorg_loveroo_webgl_engine_math_NumberMove$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_math_NumberMove$, "org.loveroo.webgl.engine.math.NumberMove$", ({
  dr: 1
}));
var $n_Lorg_loveroo_webgl_engine_math_NumberMove$;
function $m_Lorg_loveroo_webgl_engine_math_NumberMove$() {
  if ((!$n_Lorg_loveroo_webgl_engine_math_NumberMove$)) {
    $n_Lorg_loveroo_webgl_engine_math_NumberMove$ = new $c_Lorg_loveroo_webgl_engine_math_NumberMove$();
  }
  return $n_Lorg_loveroo_webgl_engine_math_NumberMove$;
}
function $f_Lorg_loveroo_webgl_engine_math_Vec2__toString__T($thiz) {
  return ((((($thiz.go() + " (") + $thiz.gy()) + ", ") + $thiz.gz()) + ")");
}
function $f_Lorg_loveroo_webgl_engine_math_Vec3__toString__T($thiz) {
  return ((((((($thiz.go() + " (") + $thiz.gy()) + ", ") + $thiz.gz()) + ", ") + $thiz.p1()) + ")");
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_math_\uff3fMath$() {
  this.lz = 0.0;
  $n_Lorg_loveroo_webgl_engine_math_\uff3fMath$ = this;
  this.lz = ((+Math.PI) / 180.0);
}
$p = $c_Lorg_loveroo_webgl_engine_math_\uff3fMath$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_math_\uff3fMath$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_math_\uff3fMath$() {
}
$h_Lorg_loveroo_webgl_engine_math_\uff3fMath$.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_math_\uff3fMath$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_math_\uff3fMath$, "org.loveroo.webgl.engine.math._Math$", ({
  dw: 1
}));
var $n_Lorg_loveroo_webgl_engine_math_\uff3fMath$;
function $m_Lorg_loveroo_webgl_engine_math_\uff3fMath$() {
  if ((!$n_Lorg_loveroo_webgl_engine_math_\uff3fMath$)) {
    $n_Lorg_loveroo_webgl_engine_math_\uff3fMath$ = new $c_Lorg_loveroo_webgl_engine_math_\uff3fMath$();
  }
  return $n_Lorg_loveroo_webgl_engine_math_\uff3fMath$;
}
function $f_Lorg_loveroo_webgl_engine_math_collision_AABB__lengthX__F($thiz) {
  return Math.fround(((+Math.max($thiz.d8(), $thiz.d5())) - (+Math.min($thiz.d5(), $thiz.d8()))));
}
function $f_Lorg_loveroo_webgl_engine_math_collision_AABB__lengthY__F($thiz) {
  return Math.fround(((+Math.max($thiz.d9(), $thiz.d6())) - (+Math.min($thiz.d6(), $thiz.d9()))));
}
function $f_Lorg_loveroo_webgl_engine_math_collision_AABB__lengthZ__F($thiz) {
  return Math.fround(((+Math.max($thiz.da(), $thiz.d7())) - (+Math.min($thiz.d7(), $thiz.da()))));
}
function $f_Lorg_loveroo_webgl_engine_math_collision_AABB__touchingX__Lorg_loveroo_webgl_engine_math_collision_AABB__Z($thiz, other) {
  return (($thiz.d8() < other.d5()) && ($thiz.d5() > other.d8()));
}
function $f_Lorg_loveroo_webgl_engine_math_collision_AABB__touchingY__Lorg_loveroo_webgl_engine_math_collision_AABB__Z($thiz, other) {
  return (($thiz.d9() < other.d6()) && ($thiz.d6() > other.d9()));
}
function $f_Lorg_loveroo_webgl_engine_math_collision_AABB__touchingZ__Lorg_loveroo_webgl_engine_math_collision_AABB__Z($thiz, other) {
  return (($thiz.da() < other.d7()) && ($thiz.d7() > other.da()));
}
function $f_Lorg_loveroo_webgl_engine_math_collision_AABB__resolveX__Lorg_loveroo_webgl_engine_math_collision_AABB__F__F($thiz, other, speed) {
  if (($f_Lorg_loveroo_webgl_engine_math_collision_AABB__lengthX__F(other) <= 0.0)) {
    return speed;
  }
  return (($f_Lorg_loveroo_webgl_engine_math_collision_AABB__touchingY__Lorg_loveroo_webgl_engine_math_collision_AABB__Z($thiz, other) && $f_Lorg_loveroo_webgl_engine_math_collision_AABB__touchingZ__Lorg_loveroo_webgl_engine_math_collision_AABB__Z($thiz, other)) ? $p_Lorg_loveroo_webgl_engine_math_collision_AABB__resolveAxis__F__F__F__F__F__F($thiz, speed, $thiz.d8(), $thiz.d5(), other.d8(), other.d5()) : speed);
}
function $f_Lorg_loveroo_webgl_engine_math_collision_AABB__resolveY__Lorg_loveroo_webgl_engine_math_collision_AABB__F__F($thiz, other, speed) {
  if (($f_Lorg_loveroo_webgl_engine_math_collision_AABB__lengthY__F(other) <= 0.0)) {
    return speed;
  }
  return (($f_Lorg_loveroo_webgl_engine_math_collision_AABB__touchingX__Lorg_loveroo_webgl_engine_math_collision_AABB__Z($thiz, other) && $f_Lorg_loveroo_webgl_engine_math_collision_AABB__touchingZ__Lorg_loveroo_webgl_engine_math_collision_AABB__Z($thiz, other)) ? $p_Lorg_loveroo_webgl_engine_math_collision_AABB__resolveAxis__F__F__F__F__F__F($thiz, speed, $thiz.d9(), $thiz.d6(), other.d9(), other.d6()) : speed);
}
function $f_Lorg_loveroo_webgl_engine_math_collision_AABB__resolveZ__Lorg_loveroo_webgl_engine_math_collision_AABB__F__F($thiz, other, speed) {
  if (($f_Lorg_loveroo_webgl_engine_math_collision_AABB__lengthZ__F(other) <= 0.0)) {
    return speed;
  }
  return (($f_Lorg_loveroo_webgl_engine_math_collision_AABB__touchingX__Lorg_loveroo_webgl_engine_math_collision_AABB__Z($thiz, other) && $f_Lorg_loveroo_webgl_engine_math_collision_AABB__touchingY__Lorg_loveroo_webgl_engine_math_collision_AABB__Z($thiz, other)) ? $p_Lorg_loveroo_webgl_engine_math_collision_AABB__resolveAxis__F__F__F__F__F__F($thiz, speed, $thiz.da(), $thiz.d7(), other.da(), other.d7()) : speed);
}
function $p_Lorg_loveroo_webgl_engine_math_collision_AABB__resolveAxis__F__F__F__F__F__F($thiz, vel, min, max, otherMin, otherMax) {
  return (((vel > 0.0) && (max <= otherMin)) ? Math.fround((+Math.min(vel, Math.fround((otherMin - max))))) : (((vel < 0.0) && (min >= otherMax)) ? Math.fround((+Math.max(vel, Math.fround((otherMax - min))))) : vel));
}
function $ct_Lorg_loveroo_webgl_engine_render_AtlasID__T__T__($thiz, id, file) {
  $thiz.fl = id;
  $thiz.iY = file;
  return $thiz;
}
function $ct_Lorg_loveroo_webgl_engine_render_AtlasID__T__($thiz, id) {
  $ct_Lorg_loveroo_webgl_engine_render_AtlasID__T__T__($thiz, id, id);
  return $thiz;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_AtlasID() {
  this.fl = null;
  this.iY = null;
}
$p = $c_Lorg_loveroo_webgl_engine_render_AtlasID.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_AtlasID;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_AtlasID() {
}
$h_Lorg_loveroo_webgl_engine_render_AtlasID.prototype = $p;
$p.q = (function() {
  return ((("AtlasID " + this.fl) + " ") + this.iY);
});
var $d_Lorg_loveroo_webgl_engine_render_AtlasID = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_AtlasID, "org.loveroo.webgl.engine.render.AtlasID", ({
  dz: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_AtlasInfo(u1, v1, u2, v2) {
  this.iZ = 0.0;
  this.j0 = 0.0;
  this.iZ = u1;
  this.j0 = v1;
}
$p = $c_Lorg_loveroo_webgl_engine_render_AtlasInfo.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_AtlasInfo;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_AtlasInfo() {
}
$h_Lorg_loveroo_webgl_engine_render_AtlasInfo.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_AtlasInfo = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_AtlasInfo, "org.loveroo.webgl.engine.render.AtlasInfo", ({
  dA: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_Camera(_pos, _zoom) {
  this.ew = null;
  this.j1 = 0.0;
  this.h4 = null;
  this.ew = _pos;
  this.j1 = _zoom;
  this.h4 = this.ew;
}
$p = $c_Lorg_loveroo_webgl_engine_render_Camera.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_Camera;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_Camera() {
}
$h_Lorg_loveroo_webgl_engine_render_Camera.prototype = $p;
$p.rd = (function(value) {
  this.h4 = this.ew;
  this.ew = value;
});
$p.qT = (function(delta) {
  var blend = new $c_Lorg_loveroo_webgl_engine_math_Vec2f(Math.fround($m_Lorg_loveroo_webgl_engine_math_Lerp$().gn(delta, this.h4.aZ, this.ew.aZ, false, true)), Math.fround($m_Lorg_loveroo_webgl_engine_math_Lerp$().gn(delta, this.h4.b0, this.ew.b0, false, true)));
  return $m_Lorg_loveroo_webgl_engine_render_Renderer$().rx("camera", new $c_Lorg_loveroo_webgl_engine_render_Uniform4f(Math.fround((+Math.round(blend.aZ))), Math.fround((+Math.round(blend.b0))), Math.fround((Math.fround((0.5 * Math.fround($m_Lorg_loveroo_webgl_engine_render_Camera$().fm))) / this.j1)), Math.fround((Math.fround((0.5 * Math.fround($m_Lorg_loveroo_webgl_engine_render_Camera$().fn))) / this.j1))));
});
var $d_Lorg_loveroo_webgl_engine_render_Camera = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_Camera, "org.loveroo.webgl.engine.render.Camera", ({
  dB: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_Camera$() {
  this.fm = 0;
  this.fn = 0;
  this.fm = 320;
  this.fn = 180;
}
$p = $c_Lorg_loveroo_webgl_engine_render_Camera$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_Camera$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_Camera$() {
}
$h_Lorg_loveroo_webgl_engine_render_Camera$.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_Camera$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_Camera$, "org.loveroo.webgl.engine.render.Camera$", ({
  dC: 1
}));
var $n_Lorg_loveroo_webgl_engine_render_Camera$;
function $m_Lorg_loveroo_webgl_engine_render_Camera$() {
  if ((!$n_Lorg_loveroo_webgl_engine_render_Camera$)) {
    $n_Lorg_loveroo_webgl_engine_render_Camera$ = new $c_Lorg_loveroo_webgl_engine_render_Camera$();
  }
  return $n_Lorg_loveroo_webgl_engine_render_Camera$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_Renderer$() {
  this.fq = null;
  this.cN = null;
  this.j4 = 0;
  this.j3 = 0;
  this.fq = null;
  this.cN = null;
  this.j4 = 0;
  this.j3 = 0;
}
$p = $c_Lorg_loveroo_webgl_engine_render_Renderer$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_Renderer$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_Renderer$() {
}
$h_Lorg_loveroo_webgl_engine_render_Renderer$.prototype = $p;
$p.qN = (function(renderer, width, height) {
  this.fq = renderer.ms;
  this.cN = renderer.mr;
  this.j4 = width;
  this.j3 = height;
});
$p.i6 = (function() {
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().jm;
  cmd.aw(true);
  this$2.j = ((1 + this$2.j) | 0);
});
$p.i5 = (function() {
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().jm;
  cmd.aw(false);
  this$2.j = ((1 + this$2.j) | 0);
});
$p.ir = (function() {
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().mm;
  this$2.j = ((1 + this$2.j) | 0);
});
$p.rx = (function(id, value) {
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().ml;
  cmd.aw(id);
  cmd.aw(value);
  this$2.j = ((1 + this$2.j) | 0);
});
var $d_Lorg_loveroo_webgl_engine_render_Renderer$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_Renderer$, "org.loveroo.webgl.engine.render.Renderer$", ({
  dG: 1
}));
var $n_Lorg_loveroo_webgl_engine_render_Renderer$;
function $m_Lorg_loveroo_webgl_engine_render_Renderer$() {
  if ((!$n_Lorg_loveroo_webgl_engine_render_Renderer$)) {
    $n_Lorg_loveroo_webgl_engine_render_Renderer$ = new $c_Lorg_loveroo_webgl_engine_render_Renderer$();
  }
  return $n_Lorg_loveroo_webgl_engine_render_Renderer$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_Shader$() {
  this.j7 = null;
  $n_Lorg_loveroo_webgl_engine_render_Shader$ = this;
  this.j7 = $ct_s_util_matching_Regex__T__sci_Seq__(new $c_s_util_matching_Regex(), "#include \"(.+)\"", new $c_sjsr_WrappedVarArgs([]));
}
$p = $c_Lorg_loveroo_webgl_engine_render_Shader$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_Shader$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_Shader$() {
}
$h_Lorg_loveroo_webgl_engine_render_Shader$.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_Shader$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_Shader$, "org.loveroo.webgl.engine.render.Shader$", ({
  dI: 1
}));
var $n_Lorg_loveroo_webgl_engine_render_Shader$;
function $m_Lorg_loveroo_webgl_engine_render_Shader$() {
  if ((!$n_Lorg_loveroo_webgl_engine_render_Shader$)) {
    $n_Lorg_loveroo_webgl_engine_render_Shader$ = new $c_Lorg_loveroo_webgl_engine_render_Shader$();
  }
  return $n_Lorg_loveroo_webgl_engine_render_Shader$;
}
function $ct_Lorg_loveroo_webgl_engine_render_ShaderComponent__T__T__($thiz, id, suffix) {
  $thiz.ex = id;
  $thiz.h8 = suffix;
  return $thiz;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_ShaderComponent() {
  this.ex = null;
  this.h8 = null;
}
$p = $c_Lorg_loveroo_webgl_engine_render_ShaderComponent.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_ShaderComponent;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_ShaderComponent() {
}
$h_Lorg_loveroo_webgl_engine_render_ShaderComponent.prototype = $p;
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_ShaderID(vsh, fsh) {
  this.j9 = null;
  this.j8 = null;
  this.j9 = vsh;
  this.j8 = fsh;
  var _str = "";
  if ((vsh !== "")) {
    _str = (("" + _str) + vsh);
    if ((fsh !== "")) {
      _str = (_str + "/");
    }
  }
  if ((fsh !== "")) {
    _str = (("" + _str) + fsh);
  }
}
$p = $c_Lorg_loveroo_webgl_engine_render_ShaderID.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_ShaderID;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_ShaderID() {
}
$h_Lorg_loveroo_webgl_engine_render_ShaderID.prototype = $p;
$p.q = (function() {
  return ((this.j9 + "/") + this.j8);
});
$p.A = (function() {
  return ((Math.imul(10, $f_T__hashCode__I(this.j9)) + $f_T__hashCode__I(this.j8)) | 0);
});
var $d_Lorg_loveroo_webgl_engine_render_ShaderID = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_ShaderID, "org.loveroo.webgl.engine.render.ShaderID", ({
  dK: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_UniformValue() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_UniformValue.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_UniformValue;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_UniformValue() {
}
$h_Lorg_loveroo_webgl_engine_render_UniformValue.prototype = $p;
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor(types) {
  this.lP = null;
  this.lO = 0;
  this.lN = 0;
  this.lP = types;
  var _size = new $c_sr_IntRef(0);
  $f_jl_Iterable__forEach__ju_function_Consumer__V(types, new $c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$1(_size, this));
  this.lO = _size.R;
  var _count = new $c_sr_IntRef(0);
  $f_jl_Iterable__forEach__ju_function_Consumer__V(types, new $c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$2(_count, this));
  this.lN = _count.R;
}
$p = $c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor() {
}
$h_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor, "org.loveroo.webgl.engine.render.batch.BatchDescriptor", ({
  dU: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_batch_BatchElement() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_batch_BatchElement.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_batch_BatchElement;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_batch_BatchElement() {
}
$h_Lorg_loveroo_webgl_engine_render_batch_BatchElement.prototype = $p;
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_batch_DataType() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_batch_DataType.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_batch_DataType;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_batch_DataType() {
}
$h_Lorg_loveroo_webgl_engine_render_batch_DataType.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_batch_DataType = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_batch_DataType, "org.loveroo.webgl.engine.render.batch.DataType", ({
  dX: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_batch_DataType$() {
  this.eB = null;
  $n_Lorg_loveroo_webgl_engine_render_batch_DataType$ = this;
  this.eB = new $c_Lorg_loveroo_webgl_engine_render_batch_DataType();
}
$p = $c_Lorg_loveroo_webgl_engine_render_batch_DataType$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_batch_DataType$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_batch_DataType$() {
}
$h_Lorg_loveroo_webgl_engine_render_batch_DataType$.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_batch_DataType$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_batch_DataType$, "org.loveroo.webgl.engine.render.batch.DataType$", ({
  dY: 1
}));
var $n_Lorg_loveroo_webgl_engine_render_batch_DataType$;
function $m_Lorg_loveroo_webgl_engine_render_batch_DataType$() {
  if ((!$n_Lorg_loveroo_webgl_engine_render_batch_DataType$)) {
    $n_Lorg_loveroo_webgl_engine_render_batch_DataType$ = new $c_Lorg_loveroo_webgl_engine_render_batch_DataType$();
  }
  return $n_Lorg_loveroo_webgl_engine_render_batch_DataType$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_batch_Descriptor(id, descriptorType) {
  this.jd = null;
  this.eC = null;
  this.jd = id;
  this.eC = descriptorType;
}
$p = $c_Lorg_loveroo_webgl_engine_render_batch_Descriptor.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_batch_Descriptor;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_batch_Descriptor() {
}
$h_Lorg_loveroo_webgl_engine_render_batch_Descriptor.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_batch_Descriptor = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_batch_Descriptor, "org.loveroo.webgl.engine.render.batch.Descriptor", ({
  dZ: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_batch_DescriptorType(size, count, dataType, elementData) {
  this.jf = 0;
  this.je = 0;
  this.lS = null;
  this.jf = size;
  this.je = count;
  this.lS = dataType;
}
$p = $c_Lorg_loveroo_webgl_engine_render_batch_DescriptorType.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_batch_DescriptorType;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_batch_DescriptorType() {
}
$h_Lorg_loveroo_webgl_engine_render_batch_DescriptorType.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_batch_DescriptorType = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_batch_DescriptorType, "org.loveroo.webgl.engine.render.batch.DescriptorType", ({
  e0: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$() {
  this.lT = null;
  this.jg = null;
  this.lU = null;
  this.jh = null;
  $n_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$ = this;
  this.lT = new $c_Lorg_loveroo_webgl_engine_render_batch_DescriptorType(4, 1, $m_Lorg_loveroo_webgl_engine_render_batch_DataType$().eB, $d_Lorg_loveroo_webgl_engine_render_batch_FloatElementData.l());
  this.jg = new $c_Lorg_loveroo_webgl_engine_render_batch_DescriptorType(8, 2, $m_Lorg_loveroo_webgl_engine_render_batch_DataType$().eB, $d_Lorg_loveroo_webgl_engine_render_batch_Vec2ElementData.l());
  this.lU = new $c_Lorg_loveroo_webgl_engine_render_batch_DescriptorType(12, 3, $m_Lorg_loveroo_webgl_engine_render_batch_DataType$().eB, $d_Lorg_loveroo_webgl_engine_render_batch_Vec3ElementData.l());
  this.jh = new $c_Lorg_loveroo_webgl_engine_render_batch_DescriptorType(16, 4, $m_Lorg_loveroo_webgl_engine_render_batch_DataType$().eB, $d_Lorg_loveroo_webgl_engine_render_batch_Vec4ElementData.l());
}
$p = $c_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$() {
}
$h_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$, "org.loveroo.webgl.engine.render.batch.DescriptorType$", ({
  e1: 1
}));
var $n_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$;
function $m_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$() {
  if ((!$n_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$)) {
    $n_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$ = new $c_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$();
  }
  return $n_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_batch_ElementData() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_batch_ElementData.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_batch_ElementData;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_batch_ElementData() {
}
$h_Lorg_loveroo_webgl_engine_render_batch_ElementData.prototype = $p;
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_data_ColorFormat(internalFormat, dataType, format) {
  this.jk = 0;
  this.ji = 0;
  this.jj = 0;
  this.jk = internalFormat;
  this.ji = dataType;
  this.jj = format;
}
$p = $c_Lorg_loveroo_webgl_engine_render_data_ColorFormat.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_data_ColorFormat;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_data_ColorFormat() {
}
$h_Lorg_loveroo_webgl_engine_render_data_ColorFormat.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_data_ColorFormat = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_data_ColorFormat, "org.loveroo.webgl.engine.render.data.ColorFormat", ({
  e2: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_data_ColorFormats() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_data_ColorFormats.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_data_ColorFormats;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_data_ColorFormats() {
}
$h_Lorg_loveroo_webgl_engine_render_data_ColorFormats.prototype = $p;
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_data_TextureSlot(id) {
  this.jl = 0;
  this.jl = id;
}
$p = $c_Lorg_loveroo_webgl_engine_render_data_TextureSlot.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_data_TextureSlot;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_data_TextureSlot() {
}
$h_Lorg_loveroo_webgl_engine_render_data_TextureSlot.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_data_TextureSlot = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_data_TextureSlot, "org.loveroo.webgl.engine.render.data.TextureSlot", ({
  e4: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_data_TextureSlot$() {
  this.dc = null;
  this.m3 = null;
  this.m2 = null;
  this.m1 = null;
  $n_Lorg_loveroo_webgl_engine_render_data_TextureSlot$ = this;
  this.dc = new $c_Lorg_loveroo_webgl_engine_render_data_TextureSlot(0);
  this.m3 = new $c_Lorg_loveroo_webgl_engine_render_data_TextureSlot(1);
  this.m2 = new $c_Lorg_loveroo_webgl_engine_render_data_TextureSlot(2);
  this.m1 = new $c_Lorg_loveroo_webgl_engine_render_data_TextureSlot(3);
}
$p = $c_Lorg_loveroo_webgl_engine_render_data_TextureSlot$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_data_TextureSlot$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_data_TextureSlot$() {
}
$h_Lorg_loveroo_webgl_engine_render_data_TextureSlot$.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_data_TextureSlot$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_data_TextureSlot$, "org.loveroo.webgl.engine.render.data.TextureSlot$", ({
  e5: 1
}));
var $n_Lorg_loveroo_webgl_engine_render_data_TextureSlot$;
function $m_Lorg_loveroo_webgl_engine_render_data_TextureSlot$() {
  if ((!$n_Lorg_loveroo_webgl_engine_render_data_TextureSlot$)) {
    $n_Lorg_loveroo_webgl_engine_render_data_TextureSlot$ = new $c_Lorg_loveroo_webgl_engine_render_data_TextureSlot$();
  }
  return $n_Lorg_loveroo_webgl_engine_render_data_TextureSlot$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_data_TextureType(id) {
  this.cu = 0;
  this.cu = id;
}
$p = $c_Lorg_loveroo_webgl_engine_render_data_TextureType.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_data_TextureType;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_data_TextureType() {
}
$h_Lorg_loveroo_webgl_engine_render_data_TextureType.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_data_TextureType = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_data_TextureType, "org.loveroo.webgl.engine.render.data.TextureType", ({
  e6: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_data_TextureTypes() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_data_TextureTypes.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_data_TextureTypes;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_data_TextureTypes() {
}
$h_Lorg_loveroo_webgl_engine_render_data_TextureTypes.prototype = $p;
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_Frame(frameNumber) {
  this.m4 = 0;
  this.j = 0;
  this.m4 = frameNumber;
  this.j = 0;
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_Frame.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_Frame;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_Frame() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_Frame.prototype = $p;
$p.o = (function() {
  var num = this.m4;
  var t = ((num >>> 31) | 0);
  if (((((1 & ((num + t) | 0)) - t) | 0) === 0)) {
    return $m_Lorg_loveroo_webgl_engine_render_frame_Frame$().m5;
  } else {
    return $m_Lorg_loveroo_webgl_engine_render_frame_Frame$().m6;
  }
});
$p.rq = (function(renderer) {
  var i = 0;
  while ((i < this.j)) {
    this.o().s(i).qn(renderer);
    i = ((1 + i) | 0);
  }
});
var $d_Lorg_loveroo_webgl_engine_render_frame_Frame = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_Frame, "org.loveroo.webgl.engine.render.frame.Frame", ({
  e8: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_Frame$() {
  this.m5 = null;
  this.m6 = null;
  $n_Lorg_loveroo_webgl_engine_render_frame_Frame$ = this;
  this.m5 = $ct_ju_ArrayList__(new $c_ju_ArrayList());
  this.m6 = $ct_ju_ArrayList__(new $c_ju_ArrayList());
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_Frame$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_Frame$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_Frame$() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_Frame$.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_frame_Frame$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_Frame$, "org.loveroo.webgl.engine.render.frame.Frame$", ({
  e9: 1
}));
var $n_Lorg_loveroo_webgl_engine_render_frame_Frame$;
function $m_Lorg_loveroo_webgl_engine_render_frame_Frame$() {
  if ((!$n_Lorg_loveroo_webgl_engine_render_frame_Frame$)) {
    $n_Lorg_loveroo_webgl_engine_render_frame_Frame$ = new $c_Lorg_loveroo_webgl_engine_render_frame_Frame$();
  }
  return $n_Lorg_loveroo_webgl_engine_render_frame_Frame$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_Command$() {
  this.jm = null;
  this.me = null;
  this.mh = null;
  this.m9 = null;
  this.md = null;
  this.mg = null;
  this.m8 = null;
  this.mk = null;
  this.ml = null;
  this.mb = null;
  this.mi = null;
  this.mj = null;
  this.m7 = null;
  this.ma = null;
  this.mc = null;
  this.mf = null;
  this.mm = null;
  $n_Lorg_loveroo_webgl_engine_render_frame_command_Command$ = this;
  this.jm = new $c_Lorg_loveroo_webgl_engine_render_frame_command_DepthTestCommand();
  this.me = new $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateTextureCommand();
  this.mh = new $c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyTextureCommand();
  this.m9 = new $c_Lorg_loveroo_webgl_engine_render_frame_command_BindTextureCommand();
  this.md = new $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateShaderCommand();
  this.mg = new $c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyShaderCommand();
  this.m8 = new $c_Lorg_loveroo_webgl_engine_render_frame_command_BindShaderCommand();
  this.mk = new $c_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformCommand();
  this.ml = new $c_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformGlobalCommand();
  this.mb = new $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateBatchCommand();
  this.mi = new $c_Lorg_loveroo_webgl_engine_render_frame_command_PutBatchCommand();
  this.mj = new $c_Lorg_loveroo_webgl_engine_render_frame_command_RenderBatchCommand();
  this.m7 = new $c_Lorg_loveroo_webgl_engine_render_frame_command_BindRenderBufferCommand();
  this.ma = new $c_Lorg_loveroo_webgl_engine_render_frame_command_ClearRenderBufferCommand();
  this.mc = new $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateRenderBufferCommand();
  this.mf = new $c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyRenderBufferCommand();
  this.mm = new $c_Lorg_loveroo_webgl_engine_render_frame_command_UnbindRenderBufferCommand();
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_Command$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_Command$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_Command$() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_Command$.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_frame_command_Command$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_Command$, "org.loveroo.webgl.engine.render.frame.command.Command$", ({
  ee: 1
}));
var $n_Lorg_loveroo_webgl_engine_render_frame_command_Command$;
function $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$() {
  if ((!$n_Lorg_loveroo_webgl_engine_render_frame_command_Command$)) {
    $n_Lorg_loveroo_webgl_engine_render_frame_command_Command$ = new $c_Lorg_loveroo_webgl_engine_render_frame_command_Command$();
  }
  return $n_Lorg_loveroo_webgl_engine_render_frame_command_Command$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand() {
  this.aF = null;
  this.hn = null;
  this.aF = null;
  this.hn = new $c_ju_LinkedList();
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand.prototype = $p;
$p.aJ = (function() {
  this.hn.dE();
});
$p.aw = (function(element) {
  this.hn.k5(element);
});
$p.qn = (function(renderer) {
  return this.aF.b8(this.hn, renderer);
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand, "org.loveroo.webgl.engine.render.frame.command.GPUCommand", ({
  en: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_impl_WebGLBatch(vao, vbo, ebo, tbo) {
  this.mo = null;
  this.pf = null;
  this.pe = null;
  this.mn = null;
  this.mo = vao;
  this.pf = vbo;
  this.pe = ebo;
  this.mn = tbo;
}
$p = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLBatch.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLBatch;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_impl_WebGLBatch() {
}
$h_Lorg_loveroo_webgl_engine_render_impl_WebGLBatch.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_impl_WebGLBatch = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_WebGLBatch, "org.loveroo.webgl.engine.render.impl.WebGLBatch", ({
  eu: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_impl_WebGLCompiledShader(shader, ptr) {
  this.mq = null;
  this.fy = null;
  this.eD = null;
  this.jo = null;
  this.ho = null;
  this.jn = null;
  this.mq = shader;
  this.fy = ptr;
  this.eD = $ct_ju_HashMap__(new $c_ju_HashMap());
  this.jo = $ct_ju_HashMap__(new $c_ju_HashMap());
  this.ho = $ct_ju_HashMap__(new $c_ju_HashMap());
  this.jn = $ct_ju_HashMap__(new $c_ju_HashMap());
}
$p = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLCompiledShader.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLCompiledShader;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_impl_WebGLCompiledShader() {
}
$h_Lorg_loveroo_webgl_engine_render_impl_WebGLCompiledShader.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_impl_WebGLCompiledShader = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_WebGLCompiledShader, "org.loveroo.webgl.engine.render.impl.WebGLCompiledShader", ({
  ew: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$() {
  this.jt = null;
  this.jt = false;
}
$p = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$() {
}
$h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$ = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$, "org.loveroo.webgl.engine.render.impl.WebGLRenderer$", ({
  ey: 1
}));
var $n_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$;
function $m_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$() {
  if ((!$n_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$)) {
    $n_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$ = new $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$();
  }
  return $n_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$;
}
function $f_Lorg_loveroo_webgl_engine_runtime_EngineRuntime__$init$__V($thiz) {
  $thiz.mS = new $c_Lorg_loveroo_webgl_engine_data_Translator();
  $thiz.hv = new $c_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader();
  $thiz.ju = new $c_Lorg_loveroo_webgl_engine_render_Camera(new $c_Lorg_loveroo_webgl_engine_math_Vec2f(0.0, 0.0), 1.0);
  $thiz.ay = null;
  $thiz.hu = 0;
}
function $f_Lorg_loveroo_webgl_engine_runtime_EngineRuntime__debugLog__T__jl_Void($thiz, msg) {
  return (void 0);
}
function $f_Lorg_loveroo_webgl_engine_runtime_EngineRuntime__newFrame__jl_Void($thiz) {
  $thiz.ay = new $c_Lorg_loveroo_webgl_engine_render_frame_Frame($thiz.hu);
  $thiz.hu = ((1 + $thiz.hu) | 0);
}
function $f_Lorg_loveroo_webgl_game_Scene__$init$__V($thiz) {
  $thiz.hB = 16.666666666666668;
  $thiz.jy = (30.0 * $thiz.hB);
  $thiz.df = 0.0;
  $thiz.jx = $m_Lorg_loveroo_webgl_Runtime$().oT();
  $thiz.hA = 0;
}
function $f_Lorg_loveroo_webgl_game_Scene__update__jl_Void($thiz) {
  var current = $m_Lorg_loveroo_webgl_Runtime$().oT();
  $thiz.df = ($thiz.df + (current - $thiz.jx));
  $thiz.jx = current;
  if (($thiz.df >= $thiz.jy)) {
    $m_s_Console$().oC().ie("Ticking is taking too long!\n");
    $thiz.df = $thiz.jy;
  }
  while (($thiz.df >= $thiz.hB)) {
    $thiz.df = ($thiz.df - $thiz.hB);
    $thiz.rF();
  }
}
function $f_Lorg_loveroo_webgl_game_Scene__tick__jl_Void($thiz) {
  $thiz.hA = ((1 + $thiz.hA) | 0);
}
/** @constructor */
function $c_Lorg_loveroo_webgl_game_entity_Entity$() {
}
$p = $c_Lorg_loveroo_webgl_game_entity_Entity$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_entity_Entity$;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_entity_Entity$() {
}
$h_Lorg_loveroo_webgl_game_entity_Entity$.prototype = $p;
$p.it = (function(x, y, z) {
  var blockPos = $m_Lorg_loveroo_webgl_game_world_Chunk$().it(x, y, z);
  return new $c_Lorg_loveroo_webgl_engine_math_Vec2f(blockPos.aZ, Math.fround((blockPos.b0 + 32.0)));
});
var $d_Lorg_loveroo_webgl_game_entity_Entity$ = new $TypeData().i($c_Lorg_loveroo_webgl_game_entity_Entity$, "org.loveroo.webgl.game.entity.Entity$", ({
  eO: 1
}));
var $n_Lorg_loveroo_webgl_game_entity_Entity$;
function $m_Lorg_loveroo_webgl_game_entity_Entity$() {
  if ((!$n_Lorg_loveroo_webgl_game_entity_Entity$)) {
    $n_Lorg_loveroo_webgl_game_entity_Entity$ = new $c_Lorg_loveroo_webgl_game_entity_Entity$();
  }
  return $n_Lorg_loveroo_webgl_game_entity_Entity$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_game_entity_EntityType(id) {
  $m_Lorg_loveroo_webgl_game_entity_EntityType$().ra();
}
$p = $c_Lorg_loveroo_webgl_game_entity_EntityType.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_entity_EntityType;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_entity_EntityType() {
}
$h_Lorg_loveroo_webgl_game_entity_EntityType.prototype = $p;
var $d_Lorg_loveroo_webgl_game_entity_EntityType = new $TypeData().i($c_Lorg_loveroo_webgl_game_entity_EntityType, "org.loveroo.webgl.game.entity.EntityType", ({
  eS: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_entity_EntityType$() {
  this.hx = 0;
  this.ph = null;
  $n_Lorg_loveroo_webgl_game_entity_EntityType$ = this;
  this.hx = (-1);
  this.ph = new $c_Lorg_loveroo_webgl_game_entity_EntityType("dummy");
  new $c_Lorg_loveroo_webgl_game_entity_EntityType("block_outline");
  new $c_Lorg_loveroo_webgl_game_entity_EntityType("player");
}
$p = $c_Lorg_loveroo_webgl_game_entity_EntityType$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_entity_EntityType$;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_entity_EntityType$() {
}
$h_Lorg_loveroo_webgl_game_entity_EntityType$.prototype = $p;
$p.ra = (function() {
  this.hx = ((1 + this.hx) | 0);
  return this.hx;
});
var $d_Lorg_loveroo_webgl_game_entity_EntityType$ = new $TypeData().i($c_Lorg_loveroo_webgl_game_entity_EntityType$, "org.loveroo.webgl.game.entity.EntityType$", ({
  eT: 1
}));
var $n_Lorg_loveroo_webgl_game_entity_EntityType$;
function $m_Lorg_loveroo_webgl_game_entity_EntityType$() {
  if ((!$n_Lorg_loveroo_webgl_game_entity_EntityType$)) {
    $n_Lorg_loveroo_webgl_game_entity_EntityType$ = new $c_Lorg_loveroo_webgl_game_entity_EntityType$();
  }
  return $n_Lorg_loveroo_webgl_game_entity_EntityType$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_game_world_BlockState(blockType, pos) {
  this.hC = null;
  this.hC = blockType.ry(pos);
}
$p = $c_Lorg_loveroo_webgl_game_world_BlockState.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_world_BlockState;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_world_BlockState() {
}
$h_Lorg_loveroo_webgl_game_world_BlockState.prototype = $p;
var $d_Lorg_loveroo_webgl_game_world_BlockState = new $TypeData().i($c_Lorg_loveroo_webgl_game_world_BlockState, "org.loveroo.webgl.game.world.BlockState", ({
  f0: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_world_BlockType(id, size, hasNormal, hasDepth, hasPos) {
  this.cj = null;
  this.n6 = 0.0;
  this.n4 = false;
  this.n3 = false;
  this.n5 = false;
  this.cj = id;
  this.n6 = size;
  this.n4 = hasNormal;
  this.n3 = hasDepth;
  this.n5 = hasPos;
  $m_Lorg_loveroo_webgl_game_world_BlockType$().rb();
  $m_Lorg_loveroo_webgl_game_world_BlockType$().eG.w(this);
}
$p = $c_Lorg_loveroo_webgl_game_world_BlockType.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_world_BlockType;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_world_BlockType() {
}
$h_Lorg_loveroo_webgl_game_world_BlockType.prototype = $p;
$p.ry = (function(pos) {
  return $ct_Lorg_loveroo_webgl_engine_math_collision_CenteredAABB__F0__F__(new $c_Lorg_loveroo_webgl_engine_math_collision_CenteredAABB(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((center) => (() => center))(new $c_Lorg_loveroo_webgl_engine_math_Vec3f(Math.fround((Math.fround(pos.gV) + 0.5)), Math.fround((Math.fround(pos.gW) + 0.5)), Math.fround((Math.fround(pos.gX) + 0.5))))), this.n6);
});
$p.q = (function() {
  return ("BlockType " + this.cj);
});
var $d_Lorg_loveroo_webgl_game_world_BlockType = new $TypeData().i($c_Lorg_loveroo_webgl_game_world_BlockType, "org.loveroo.webgl.game.world.BlockType", ({
  f1: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_world_BlockType$() {
  this.hD = 0;
  this.eG = null;
  this.jD = null;
  this.n8 = null;
  this.n7 = null;
  this.n9 = null;
  $n_Lorg_loveroo_webgl_game_world_BlockType$ = this;
  this.hD = (-1);
  this.eG = new $c_ju_LinkedList();
  this.jD = new $c_Lorg_loveroo_webgl_game_world_BlockType("air", 0.0, true, true, true);
  new $c_Lorg_loveroo_webgl_game_world_BlockType("outline", 0.0, ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false));
  this.n8 = new $c_Lorg_loveroo_webgl_game_world_BlockType("grass", ($m_Lorg_loveroo_webgl_game_world_BlockType$(), 1.0), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false));
  this.n7 = new $c_Lorg_loveroo_webgl_game_world_BlockType("dirt", ($m_Lorg_loveroo_webgl_game_world_BlockType$(), 1.0), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false));
  this.n9 = new $c_Lorg_loveroo_webgl_game_world_BlockType("stone", ($m_Lorg_loveroo_webgl_game_world_BlockType$(), 1.0), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false));
  new $c_Lorg_loveroo_webgl_game_world_BlockType("brownie", ($m_Lorg_loveroo_webgl_game_world_BlockType$(), 1.0), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false));
  new $c_Lorg_loveroo_webgl_game_world_BlockType("leaves", 0.800000011920929, ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false));
  new $c_Lorg_loveroo_webgl_game_world_BlockType("smiles", 0.6000000238418579, ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false));
  new $c_Lorg_loveroo_webgl_game_world_BlockType("lantern", 0.4000000059604645, ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false), ($m_Lorg_loveroo_webgl_game_world_BlockType$(), false));
}
$p = $c_Lorg_loveroo_webgl_game_world_BlockType$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_world_BlockType$;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_world_BlockType$() {
}
$h_Lorg_loveroo_webgl_game_world_BlockType$.prototype = $p;
$p.rb = (function() {
  this.hD = ((1 + this.hD) | 0);
  return this.hD;
});
var $d_Lorg_loveroo_webgl_game_world_BlockType$ = new $TypeData().i($c_Lorg_loveroo_webgl_game_world_BlockType$, "org.loveroo.webgl.game.world.BlockType$", ({
  f2: 1
}));
var $n_Lorg_loveroo_webgl_game_world_BlockType$;
function $m_Lorg_loveroo_webgl_game_world_BlockType$() {
  if ((!$n_Lorg_loveroo_webgl_game_world_BlockType$)) {
    $n_Lorg_loveroo_webgl_game_world_BlockType$ = new $c_Lorg_loveroo_webgl_game_world_BlockType$();
  }
  return $n_Lorg_loveroo_webgl_game_world_BlockType$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_game_world_Chunk$() {
  this.bd = 0;
  this.cQ = 0;
  this.be = 0;
  this.cv = 0;
  this.bs = 0;
  this.jE = 0;
  this.nb = 0;
  this.dV = 0;
  this.fF = 0;
  $n_Lorg_loveroo_webgl_game_world_Chunk$ = this;
  this.bd = 16;
  this.cQ = 8;
  this.be = 8;
  this.cv = 128;
  this.bs = 8;
  this.jE = Math.imul(Math.imul(this.be, this.cv), this.bs);
  this.nb = 32;
  this.dV = ((this.nb / $checkIntDivisor(this.cQ)) | 0);
  this.fF = ((this.bs / $checkIntDivisor(this.dV)) | 0);
}
$p = $c_Lorg_loveroo_webgl_game_world_Chunk$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_world_Chunk$;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_world_Chunk$() {
}
$h_Lorg_loveroo_webgl_game_world_Chunk$.prototype = $p;
$p.p0 = (function(x, y, z) {
  return ((((Math.imul(Math.imul(((x % $checkIntDivisor(this.be)) | 0), this.cv), this.bs) + Math.imul(((y % $checkIntDivisor(this.cv)) | 0), this.bs)) | 0) + ((z % $checkIntDivisor(this.bs)) | 0)) | 0);
});
$p.it = (function(x, y, z) {
  var halfSize = Math.fround((0.5 * Math.fround(this.bd)));
  var quarterSize = Math.fround((0.25 * Math.fround(this.bd)));
  return new $c_Lorg_loveroo_webgl_engine_math_Vec2f(Math.fround((Math.fround((x * halfSize)) + Math.fround((z * halfSize)))), Math.fround((Math.fround((Math.fround((x * quarterSize)) + Math.fround((y * halfSize)))) - Math.fround((z * quarterSize)))));
});
var $d_Lorg_loveroo_webgl_game_world_Chunk$ = new $TypeData().i($c_Lorg_loveroo_webgl_game_world_Chunk$, "org.loveroo.webgl.game.world.Chunk$", ({
  f4: 1
}));
var $n_Lorg_loveroo_webgl_game_world_Chunk$;
function $m_Lorg_loveroo_webgl_game_world_Chunk$() {
  if ((!$n_Lorg_loveroo_webgl_game_world_Chunk$)) {
    $n_Lorg_loveroo_webgl_game_world_Chunk$ = new $c_Lorg_loveroo_webgl_game_world_Chunk$();
  }
  return $n_Lorg_loveroo_webgl_game_world_Chunk$;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_game_world_ChunkMap$() {
  this.aU = 0;
  this.fG = null;
  $n_Lorg_loveroo_webgl_game_world_ChunkMap$ = this;
  this.aU = 8;
  this.fG = new $c_Lorg_loveroo_webgl_engine_math_Vec2i(Math.imul(Math.imul(Math.imul(Math.imul($m_Lorg_loveroo_webgl_game_world_Chunk$().cQ, $m_Lorg_loveroo_webgl_game_world_Chunk$().be), $m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU), $m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU), $m_Lorg_loveroo_webgl_game_world_Chunk$().fF), Math.imul($m_Lorg_loveroo_webgl_game_world_Chunk$().cQ, $m_Lorg_loveroo_webgl_game_world_Chunk$().cv));
}
$p = $c_Lorg_loveroo_webgl_game_world_ChunkMap$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_world_ChunkMap$;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_world_ChunkMap$() {
}
$h_Lorg_loveroo_webgl_game_world_ChunkMap$.prototype = $p;
var $d_Lorg_loveroo_webgl_game_world_ChunkMap$ = new $TypeData().i($c_Lorg_loveroo_webgl_game_world_ChunkMap$, "org.loveroo.webgl.game.world.ChunkMap$", ({
  f6: 1
}));
var $n_Lorg_loveroo_webgl_game_world_ChunkMap$;
function $m_Lorg_loveroo_webgl_game_world_ChunkMap$() {
  if ((!$n_Lorg_loveroo_webgl_game_world_ChunkMap$)) {
    $n_Lorg_loveroo_webgl_game_world_ChunkMap$ = new $c_Lorg_loveroo_webgl_game_world_ChunkMap$();
  }
  return $n_Lorg_loveroo_webgl_game_world_ChunkMap$;
}
function $p_Lorg_loveroo_webgl_game_world_ChunkRenderer___regenerateBatch__jl_Void($thiz) {
  var blockElements = $ct_ju_ArrayList__I__(new $c_ju_ArrayList(), Math.imul(Math.imul($m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU, $m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU), Math.imul(Math.imul($m_Lorg_loveroo_webgl_game_world_Chunk$().be, $m_Lorg_loveroo_webgl_game_world_Chunk$().cv), $m_Lorg_loveroo_webgl_game_world_Chunk$().bs)));
  var depthElements = $ct_ju_ArrayList__I__(new $c_ju_ArrayList(), Math.imul(Math.imul($m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU, $m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU), Math.imul(Math.imul($m_Lorg_loveroo_webgl_game_world_Chunk$().be, $m_Lorg_loveroo_webgl_game_world_Chunk$().cv), $m_Lorg_loveroo_webgl_game_world_Chunk$().fF)));
  var x = 0;
  while ((x < $m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU)) {
    var z = (($m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU - 1) | 0);
    while ((z >= 0)) {
      $p_Lorg_loveroo_webgl_game_world_ChunkRenderer__submitChunk__Lorg_loveroo_webgl_game_world_Chunk__ju_List__ju_List__jl_Void($thiz, $thiz.hJ.i4(x, z), blockElements, depthElements);
      z = ((z - 1) | 0);
    }
    x = ((1 + x) | 0);
  }
  $thiz.dg.oG(blockElements);
  $thiz.hK.oG(depthElements);
  $thiz.fI = true;
}
function $p_Lorg_loveroo_webgl_game_world_ChunkRenderer__submitChunk__Lorg_loveroo_webgl_game_world_Chunk__ju_List__ju_List__jl_Void($thiz, chunk, blockElements, depthElements) {
  if ((chunk === null)) {
    return (void 0);
  }
  var x = 0;
  while ((x < $m_Lorg_loveroo_webgl_game_world_Chunk$().be)) {
    var z = (($m_Lorg_loveroo_webgl_game_world_Chunk$().bs - 1) | 0);
    while ((z >= 0)) {
      var y = (($m_Lorg_loveroo_webgl_game_world_Chunk$().cv - 1) | 0);
      while ((y >= 0)) {
        blockElements.w($p_Lorg_loveroo_webgl_game_world_ChunkRenderer__blockElementFor__I__I__I__I__I__Lorg_loveroo_webgl_game_world_BlockElement($thiz, x, y, z, chunk.hE, chunk.hF));
        y = ((y - 1) | 0);
      }
      z = ((z - 1) | 0);
    }
    x = ((1 + x) | 0);
  }
  x = 0;
  while ((x < $m_Lorg_loveroo_webgl_game_world_Chunk$().be)) {
    var y$2 = 0;
    while ((y$2 < $m_Lorg_loveroo_webgl_game_world_Chunk$().cv)) {
      var z$2 = 0;
      while ((z$2 < $m_Lorg_loveroo_webgl_game_world_Chunk$().fF)) {
        depthElements.w($p_Lorg_loveroo_webgl_game_world_ChunkRenderer__depthElementFor__I__I__I__I__I__Lorg_loveroo_webgl_game_world_DepthElement($thiz, x, y$2, z$2, chunk.hE, chunk.hF));
        z$2 = ((1 + z$2) | 0);
      }
      y$2 = ((1 + y$2) | 0);
    }
    x = ((1 + x) | 0);
  }
}
function $p_Lorg_loveroo_webgl_game_world_ChunkRenderer__blockElementFor__I__I__I__I__I__Lorg_loveroo_webgl_game_world_BlockElement($thiz, x, y, z, chunkX, chunkZ) {
  var chunk = $thiz.hJ.i4(chunkX, chunkZ);
  return new $c_Lorg_loveroo_webgl_game_world_BlockElement(new $c_Lorg_loveroo_webgl_engine_math_Vec3f(Math.fround(((x + Math.imul($m_Lorg_loveroo_webgl_game_world_Chunk$().be, chunkX)) | 0)), Math.fround(y), Math.fround(((z + Math.imul($m_Lorg_loveroo_webgl_game_world_Chunk$().bs, chunkZ)) | 0))), chunk.kl(x, y, z));
}
function $p_Lorg_loveroo_webgl_game_world_ChunkRenderer__depthElementFor__I__I__I__I__I__Lorg_loveroo_webgl_game_world_DepthElement($thiz, x, y, z, chunkX, chunkZ) {
  var chunk = $thiz.hJ.i4(chunkX, chunkZ);
  var blockTypes = $ct_ju_ArrayList__I__(new $c_ju_ArrayList(), $m_Lorg_loveroo_webgl_game_world_Chunk$().dV);
  var blockZ = Math.imul(z, $m_Lorg_loveroo_webgl_game_world_Chunk$().dV);
  var end = ((blockZ + $m_Lorg_loveroo_webgl_game_world_Chunk$().dV) | 0);
  while ((blockZ < end)) {
    blockTypes.w(chunk.kl(x, y, blockZ));
    blockZ = ((1 + blockZ) | 0);
  }
  return new $c_Lorg_loveroo_webgl_game_world_DepthElement(new $c_Lorg_loveroo_webgl_engine_math_Vec2f(Math.fround(((x + Math.imul($m_Lorg_loveroo_webgl_game_world_Chunk$().be, chunkX)) | 0)), Math.fround(y)), Math.fround(((z + Math.imul(chunkZ, $m_Lorg_loveroo_webgl_game_world_Chunk$().fF)) | 0)), blockTypes);
}
/** @constructor */
function $c_Lorg_loveroo_webgl_game_world_ChunkRenderer(chunkMap) {
  this.hJ = null;
  this.fI = false;
  this.fH = null;
  this.hH = null;
  this.hI = null;
  this.hG = null;
  this.dg = null;
  this.hK = null;
  this.hJ = chunkMap;
  this.fI = true;
  this.fH = $ct_Lorg_loveroo_webgl_engine_render_Shader__T__(new $c_Lorg_loveroo_webgl_engine_render_Shader(), "chunk/block");
  this.hH = $ct_Lorg_loveroo_webgl_engine_render_Shader__T__(new $c_Lorg_loveroo_webgl_engine_render_Shader(), "chunk/block");
  this.hI = $ct_Lorg_loveroo_webgl_engine_render_Shader__T__(new $c_Lorg_loveroo_webgl_engine_render_Shader(), "chunk/block_pos");
  this.hG = $ct_Lorg_loveroo_webgl_engine_render_Shader__T__(new $c_Lorg_loveroo_webgl_engine_render_Shader(), "chunk/block_depth");
  this.dg = $ct_Lorg_loveroo_webgl_engine_render_batch_Batch__T__Lorg_loveroo_webgl_engine_render_Shader__Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor__(new $c_Lorg_loveroo_webgl_engine_render_batch_Batch(), "chunk_map_blocks", this.fH, new $c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor($m_Lorg_loveroo_predef_ListUtil$().ik(new $c_sjsr_WrappedVarArgs([new $c_Lorg_loveroo_webgl_engine_render_batch_Descriptor("blockPos", $m_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$().lU), new $c_Lorg_loveroo_webgl_engine_render_batch_Descriptor("blockUV", $m_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$().jg)]))));
  this.hK = $ct_Lorg_loveroo_webgl_engine_render_batch_Batch__T__Lorg_loveroo_webgl_engine_render_Shader__Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor__(new $c_Lorg_loveroo_webgl_engine_render_batch_Batch(), "chunk_map_depth", this.hG, new $c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor($m_Lorg_loveroo_predef_ListUtil$().ik(new $c_sjsr_WrappedVarArgs([new $c_Lorg_loveroo_webgl_engine_render_batch_Descriptor("blockPos", $m_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$().jg), new $c_Lorg_loveroo_webgl_engine_render_batch_Descriptor("zIndex", $m_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$().lT), new $c_Lorg_loveroo_webgl_engine_render_batch_Descriptor("block12UV", $m_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$().jh), new $c_Lorg_loveroo_webgl_engine_render_batch_Descriptor("block34UV", $m_Lorg_loveroo_webgl_engine_render_batch_DescriptorType$().jh)]))));
  this.fH.aY("blockSize", new $c_Lorg_loveroo_webgl_engine_render_FloatUniform(Math.fround($m_Lorg_loveroo_webgl_game_world_Chunk$().bd)));
  this.hH.aY("blockSize", new $c_Lorg_loveroo_webgl_engine_render_FloatUniform(Math.fround($m_Lorg_loveroo_webgl_game_world_Chunk$().bd)));
  this.hI.aY("blockSize", new $c_Lorg_loveroo_webgl_engine_render_FloatUniform(Math.fround($m_Lorg_loveroo_webgl_game_world_Chunk$().bd)));
  $f_Lorg_loveroo_webgl_engine_data_resource_Resource__onLoad__F1__jl_Void($m_Lorg_loveroo_webgl_game_world_ChunkRenderer$().dh, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2) => this.fH.aY("tex", new $c_Lorg_loveroo_webgl_engine_render_TextureUniform($m_Lorg_loveroo_webgl_engine_render_data_TextureSlot$().dc, t$2)))));
  $f_Lorg_loveroo_webgl_engine_data_resource_Resource__onLoad__F1__jl_Void($m_Lorg_loveroo_webgl_game_world_ChunkRenderer$().nd, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2$1) => this.hH.aY("tex", new $c_Lorg_loveroo_webgl_engine_render_TextureUniform($m_Lorg_loveroo_webgl_engine_render_data_TextureSlot$().dc, t$2$1)))));
  $f_Lorg_loveroo_webgl_engine_data_resource_Resource__onLoad__F1__jl_Void($m_Lorg_loveroo_webgl_game_world_ChunkRenderer$().ne, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2$2) => this.hI.aY("tex", new $c_Lorg_loveroo_webgl_engine_render_TextureUniform($m_Lorg_loveroo_webgl_engine_render_data_TextureSlot$().dc, t$2$2)))));
  $f_Lorg_loveroo_webgl_engine_data_resource_Resource__onLoad__F1__jl_Void($m_Lorg_loveroo_webgl_game_world_ChunkRenderer$().dX, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2$3) => this.hG.aY("tex", new $c_Lorg_loveroo_webgl_engine_render_TextureUniform($m_Lorg_loveroo_webgl_engine_render_data_TextureSlot$().dc, t$2$3)))));
}
$p = $c_Lorg_loveroo_webgl_game_world_ChunkRenderer.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_world_ChunkRenderer;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_world_ChunkRenderer() {
}
$h_Lorg_loveroo_webgl_game_world_ChunkRenderer.prototype = $p;
$p.rl = (function() {
  if (($m_Lorg_loveroo_webgl_game_world_ChunkRenderer$().dh.bX && $m_Lorg_loveroo_webgl_game_world_ChunkRenderer$().dX.bX)) {
    $p_Lorg_loveroo_webgl_game_world_ChunkRenderer___regenerateBatch__jl_Void(this);
    return (void 0);
  }
  $f_Lorg_loveroo_webgl_engine_data_resource_Resource__onLoad__F1__jl_Void($m_Lorg_loveroo_webgl_game_world_ChunkRenderer$().dh, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => ($m_Lorg_loveroo_webgl_game_world_ChunkRenderer$().dX.bX ? $p_Lorg_loveroo_webgl_game_world_ChunkRenderer___regenerateBatch__jl_Void(this) : (void 0)))));
  return $f_Lorg_loveroo_webgl_engine_data_resource_Resource__onLoad__F1__jl_Void($m_Lorg_loveroo_webgl_game_world_ChunkRenderer$().dX, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => ($m_Lorg_loveroo_webgl_game_world_ChunkRenderer$().dh.bX ? $p_Lorg_loveroo_webgl_game_world_ChunkRenderer___regenerateBatch__jl_Void(this) : (void 0)))));
});
$p.kL = (function() {
  this.dg.b1 = this.fH;
  return this.dg.bP(0.0);
});
$p.kJ = (function() {
  this.dg.b1 = this.hH;
  return this.dg.bP(0.0);
});
$p.kK = (function() {
  this.dg.b1 = this.hI;
  return this.dg.bP(0.0);
});
$p.kI = (function() {
  if ((((this.fI && $m_Lorg_loveroo_webgl_game_world_ChunkRenderer$().dX.bX) && this.hK.fx) && this.hG.h7)) {
    this.hK.bP(0.0);
    this.fI = false;
    return (void 0);
  } else {
    return (void 0);
  }
});
var $d_Lorg_loveroo_webgl_game_world_ChunkRenderer = new $TypeData().i($c_Lorg_loveroo_webgl_game_world_ChunkRenderer, "org.loveroo.webgl.game.world.ChunkRenderer", ({
  f7: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_world_ChunkRenderer$() {
  this.dh = null;
  this.nd = null;
  this.ne = null;
  this.dX = null;
  this.pk = null;
  this.nc = null;
  $n_Lorg_loveroo_webgl_game_world_ChunkRenderer$ = this;
  this.dh = new $c_Lorg_loveroo_webgl_engine_render_TextureAtlas("block_atlas", "block", new $c_Lorg_loveroo_webgl_engine_math_Vec2i(256, 256), new $c_Lorg_loveroo_webgl_engine_math_Vec2i($m_Lorg_loveroo_webgl_game_world_Chunk$().bd, $m_Lorg_loveroo_webgl_game_world_Chunk$().bd), $m_Lorg_loveroo_predef_Predef$().ii($m_Lorg_loveroo_webgl_game_world_BlockType$().eG, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2) => $ct_Lorg_loveroo_webgl_engine_render_AtlasID__T__(new $c_Lorg_loveroo_webgl_engine_render_AtlasID(), t$2.cj)))));
  this.nd = new $c_Lorg_loveroo_webgl_engine_render_TextureAtlas("normal_atlas", "block/normal", new $c_Lorg_loveroo_webgl_engine_math_Vec2i(256, 256), new $c_Lorg_loveroo_webgl_engine_math_Vec2i($m_Lorg_loveroo_webgl_game_world_Chunk$().bd, $m_Lorg_loveroo_webgl_game_world_Chunk$().bd), $m_Lorg_loveroo_predef_Predef$().ii($m_Lorg_loveroo_webgl_game_world_BlockType$().eG, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2$1) => (t$2$1.n4 ? $ct_Lorg_loveroo_webgl_engine_render_AtlasID__T__(new $c_Lorg_loveroo_webgl_engine_render_AtlasID(), t$2$1.cj) : $ct_Lorg_loveroo_webgl_engine_render_AtlasID__T__T__(new $c_Lorg_loveroo_webgl_engine_render_AtlasID(), t$2$1.cj, "default"))))));
  this.ne = new $c_Lorg_loveroo_webgl_engine_render_TextureAtlas("position_atlas", "block/position", new $c_Lorg_loveroo_webgl_engine_math_Vec2i(256, 256), new $c_Lorg_loveroo_webgl_engine_math_Vec2i($m_Lorg_loveroo_webgl_game_world_Chunk$().bd, $m_Lorg_loveroo_webgl_game_world_Chunk$().bd), $m_Lorg_loveroo_predef_Predef$().ii($m_Lorg_loveroo_webgl_game_world_BlockType$().eG, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2$2) => (t$2$2.n5 ? $ct_Lorg_loveroo_webgl_engine_render_AtlasID__T__(new $c_Lorg_loveroo_webgl_engine_render_AtlasID(), t$2$2.cj) : $ct_Lorg_loveroo_webgl_engine_render_AtlasID__T__T__(new $c_Lorg_loveroo_webgl_engine_render_AtlasID(), t$2$2.cj, "default"))))));
  this.dX = new $c_Lorg_loveroo_webgl_engine_render_TextureAtlas("depth_atlas", "block/depth", new $c_Lorg_loveroo_webgl_engine_math_Vec2i(128, 128), new $c_Lorg_loveroo_webgl_engine_math_Vec2i($m_Lorg_loveroo_webgl_game_world_Chunk$().cQ, $m_Lorg_loveroo_webgl_game_world_Chunk$().cQ), $m_Lorg_loveroo_predef_Predef$().ii($m_Lorg_loveroo_webgl_game_world_BlockType$().eG, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2$3) => (t$2$3.n3 ? $ct_Lorg_loveroo_webgl_engine_render_AtlasID__T__(new $c_Lorg_loveroo_webgl_engine_render_AtlasID(), t$2$3.cj) : $ct_Lorg_loveroo_webgl_engine_render_AtlasID__T__T__(new $c_Lorg_loveroo_webgl_engine_render_AtlasID(), t$2$3.cj, "default"))))));
  this.pk = new $c_Lorg_loveroo_webgl_engine_math_Vec2i(this.dh.dR, this.dh.dQ);
  ((0 / $checkIntDivisor($m_Lorg_loveroo_webgl_game_world_Chunk$().bd)) | 0);
  ((0 / $checkIntDivisor($m_Lorg_loveroo_webgl_game_world_Chunk$().bd)) | 0);
  this.nc = $ct_Lorg_loveroo_webgl_engine_render_Shader__T__(new $c_Lorg_loveroo_webgl_engine_render_Shader(), "chunk/block_depth");
  this.nc.aY("blockSize", new $c_Lorg_loveroo_webgl_engine_render_FloatUniform(Math.fround($m_Lorg_loveroo_webgl_game_world_Chunk$().bd)));
}
$p = $c_Lorg_loveroo_webgl_game_world_ChunkRenderer$.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_world_ChunkRenderer$;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_world_ChunkRenderer$() {
}
$h_Lorg_loveroo_webgl_game_world_ChunkRenderer$.prototype = $p;
var $d_Lorg_loveroo_webgl_game_world_ChunkRenderer$ = new $TypeData().i($c_Lorg_loveroo_webgl_game_world_ChunkRenderer$, "org.loveroo.webgl.game.world.ChunkRenderer$", ({
  f8: 1
}));
var $n_Lorg_loveroo_webgl_game_world_ChunkRenderer$;
function $m_Lorg_loveroo_webgl_game_world_ChunkRenderer$() {
  if ((!$n_Lorg_loveroo_webgl_game_world_ChunkRenderer$)) {
    $n_Lorg_loveroo_webgl_game_world_ChunkRenderer$ = new $c_Lorg_loveroo_webgl_game_world_ChunkRenderer$();
  }
  return $n_Lorg_loveroo_webgl_game_world_ChunkRenderer$;
}
function $s_Lorg_loveroo_webgl_main__main__AT__V(args) {
  try {
    $m_Lorg_loveroo_webgl_Runtime$package$().qY();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().rz(e);
    } else {
      throw e;
    }
  }
}
function $ct_Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier__T__($thiz, value) {
  $thiz.eH = value;
  return $thiz;
}
/** @constructor */
function $c_Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier() {
  this.eH = null;
}
$p = $c_Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier.prototype = new $h_O();
$p.constructor = $c_Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier;
/** @constructor */
function $h_Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier() {
}
$h_Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier.prototype = $p;
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rn(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rm(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().qg(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().qf(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().ol(value);
}
function $s_RTLong__fromUnsignedInt__I__J(value) {
  return $bL(value, 0);
}
function $s_RTLong__fromInt__I__J(value) {
  var hi = (value >> 31);
  return $bL(value, hi);
}
function $s_RTLong__clz__I__I__I(lo, hi) {
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(lo)) | 0));
}
function $s_RTLong__toFloat__I__I__F(lo, hi) {
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__I__I__D(lo, hi) {
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__I__I__I(lo, hi) {
  return lo;
}
function $s_RTLong__toString__I__I__T(lo, hi) {
  return $m_RTLong$().oV(lo, hi);
}
function $s_RTLong__bitsToDouble__I__I__O__D(lo, hi, fpBitsDataView) {
  fpBitsDataView.setInt32(0, lo, true);
  fpBitsDataView.setInt32(4, hi, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__I__I__I__I__J(alo, ahi, blo, bhi) {
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, bhi) + Math.imul(ahi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sub__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo - blo) | 0);
  var hi = ((((ahi - bhi) | 0) - (((lo >>> 0) > (alo >>> 0)) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__add__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo + blo) | 0);
  var hi = ((((ahi + bhi) | 0) + (((lo >>> 0) < (alo >>> 0)) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sar__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : (hi >> n));
  var hi$1 = (((32 & n) === 0) ? (hi >> n) : (hi >> 31));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shr__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : ((hi >>> n) | 0));
  var hi$1 = (((32 & n) === 0) ? ((hi >>> n) | 0) : 0);
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shl__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (lo << n) : 0);
  var hi$1 = (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> (~n)) | 0) | (hi << n)) : (lo << n));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__xor__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo ^ blo);
  var hi = (ahi ^ bhi);
  return $bL(lo, hi);
}
function $s_RTLong__and__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo & blo);
  var hi = (ahi & bhi);
  return $bL(lo, hi);
}
function $s_RTLong__or__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo | blo);
  var hi = (ahi | bhi);
  return $bL(lo, hi);
}
function $s_RTLong__geu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__gtu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ltu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) !== 0);
}
function $s_RTLong__equals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) === 0);
}
/** @constructor */
function $c_RTLong$() {
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.oV = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var qHat = (+Math.floor((1.0000000000000265E-9 * aHat)));
    var rHat = ((rlo - Math.imul(1000000000, (qHat | 0.0))) | 0);
    if ((rHat < 0)) {
      qHat = (qHat - 1.0);
      rHat = ((1000000000 + rHat) | 0);
    }
    var this$7 = rHat;
    var remStr = ("" + this$7);
    var $x_1 = qHat;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.ol = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    return $bL(0, (-2147483648));
  } else if ((value >= 9.223372036854776E18)) {
    return $bL((-1), 2147483647);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((2.3283064365386963E-10 * value) | 0.0);
    var hi = (((value < 0.0) && (rawLo !== 0)) ? ((rawHi - 1) | 0) : rawHi);
    return $bL(rawLo, hi);
  }
});
$p.qf = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((rlo$1 >>> 0) < (xlo$1 >>> 0)) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var quotHi = (((rhi >>> 0) / ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var k = ((rhi - Math.imul(rlo$1, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var absR_$_lo = quotLo;
    var absR_$_hi = quotHi;
  } else {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    if ((((((rhi - ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0)) | 0) - (((((rlo - lo$1) | 0) >>> 0) > (rlo >>> 0)) | 0)) | 0) < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + ((lo$3 !== (-1)) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else {
      var absR_$_lo = lo;
      var absR_$_hi = hi;
    }
  }
  if (((ahi ^ bhi) >= 0)) {
    return $bL(absR_$_lo, absR_$_hi);
  } else {
    var lo$4 = ((-absR_$_lo) | 0);
    var hi$4 = ((((-absR_$_hi) | 0) - ((lo$4 !== 0) | 0)) | 0);
    return $bL(lo$4, hi$4);
  }
});
$p.qg = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var quotHi = (((ahi >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    var k = ((ahi - Math.imul(blo, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (alo >>> 0.0)) / blo) | 0.0);
    return $bL(quotLo, quotHi);
  } else if ((bhi >= 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    if ((((((ahi - ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0)) | 0) - (((((alo - lo$1) | 0) >>> 0) > (alo >>> 0)) | 0)) | 0) < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + ((lo$3 !== (-1)) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else {
      return $bL(lo, hi);
    }
  } else if (((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)))) {
    return $bL(0, 0);
  } else {
    return $bL(1, 0);
  }
});
$p.rm = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((rlo$1 >>> 0) < (xlo$1 >>> 0)) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var k$2 = (((rhi >>> 0) % ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var remLo = ((rlo - Math.imul(rlo$1, quotLo$2)) | 0);
    var absR_$_lo = remLo;
    var absR_$_hi = 0;
  } else {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) - (((lo$2 >>> 0) > (rlo >>> 0)) | 0)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + rlo$1) | 0);
      var hi$3 = ((((hi$2 + rhi$1) | 0) + (((lo$3 >>> 0) < (lo$2 >>> 0)) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else {
      var absR_$_lo = lo$2;
      var absR_$_hi = hi$2;
    }
  }
  if ((ahi < 0)) {
    var lo$4 = ((-absR_$_lo) | 0);
    var hi$4 = ((((-absR_$_hi) | 0) - ((lo$4 !== 0) | 0)) | 0);
    return $bL(lo$4, hi$4);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
$p.rn = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var k$2 = (((ahi >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (alo >>> 0.0)) / blo) | 0.0);
    var remLo = ((alo - Math.imul(blo, quotLo$2)) | 0);
    return $bL(remLo, 0);
  } else if ((bhi >= 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) - (((lo$2 >>> 0) > (alo >>> 0)) | 0)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + blo) | 0);
      var hi$3 = ((((hi$2 + bhi) | 0) + (((lo$3 >>> 0) < (lo$2 >>> 0)) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else {
      return $bL(lo$2, hi$2);
    }
  } else if (((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)))) {
    return $bL(alo, ahi);
  } else {
    var lo$4 = ((alo - blo) | 0);
    var hi$4 = ((((ahi - bhi) | 0) - (((lo$4 >>> 0) > (alo >>> 0)) | 0)) | 0);
    return $bL(lo$4, hi$4);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  fh: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().o8(dest, j, $m_sr_ScalaRunTime$().pS(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.q2 = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.bR.Z && $objectGetClass(dest).bR.R(srcClass.bR))) {
    src.m(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  fi: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_Array$EmptyArrays$() {
  this.jG = null;
  this.nh = null;
  $n_s_Array$EmptyArrays$ = this;
  this.jG = new $ac_I(0);
  this.nh = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  fj: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$p = $c_s_LowPriorityImplicits2.prototype = new $h_O();
$p.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $p;
/** @constructor */
function $c_s_Option$() {
}
$p = $c_s_Option$.prototype = new $h_O();
$p.constructor = $c_s_Option$;
/** @constructor */
function $h_s_Option$() {
}
$h_s_Option$.prototype = $p;
$p.pO = (function(x) {
  return ((x === null) ? $m_s_None$() : new $c_s_Some(x));
});
var $d_s_Option$ = new $TypeData().i($c_s_Option$, "scala.Option$", ({
  fr: 1
}));
var $n_s_Option$;
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$();
  }
  return $n_s_Option$;
}
/** @constructor */
function $c_sc_Hashing$() {
}
$p = $c_sc_Hashing$.prototype = new $h_O();
$p.constructor = $c_sc_Hashing$;
/** @constructor */
function $h_sc_Hashing$() {
}
$h_sc_Hashing$.prototype = $p;
$p.cc = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  fy: 1
}));
var $n_sc_Hashing$;
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$();
  }
  return $n_sc_Hashing$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.B();
  while (it.h()) {
    f.n(it.g());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.B();
  while ((res && it.h())) {
    res = (!(!p.n(it.g())));
  }
  return res;
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.B();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.Q();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().ia(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().ia(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.h())) {
    $m_sr_ScalaRunTime$().o8(dest, i, it.g());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.Q() === 0) ? (("" + start) + end) : $thiz.i2($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).bN.K);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.bN;
  if ((start.length !== 0)) {
    jsb.K = (("" + jsb.K) + start);
  }
  var it = $thiz.B();
  if (it.h()) {
    var obj = it.g();
    jsb.K = (("" + jsb.K) + obj);
    while (it.h()) {
      if ((sep.length !== 0)) {
        jsb.K = (("" + jsb.K) + sep);
      }
      var obj$1 = it.g();
      jsb.K = (("" + jsb.K) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.K = (("" + jsb.K) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.nq = null;
  this.fL = null;
  this.nq = head;
  this.fL = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.qH = (function() {
  return this.nq.av().B();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  fG: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.nu = null;
  $n_sc_StringOps$ = this;
  this.nu = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.nu));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  fP: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_scg_CommonErrors$() {
}
$p = $c_scg_CommonErrors$.prototype = new $h_O();
$p.constructor = $c_scg_CommonErrors$;
/** @constructor */
function $h_scg_CommonErrors$() {
}
$h_scg_CommonErrors$.prototype = $p;
$p.qJ = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  fR: 1
}));
var $n_scg_CommonErrors$;
function $m_scg_CommonErrors$() {
  if ((!$n_scg_CommonErrors$)) {
    $n_scg_CommonErrors$ = new $c_scg_CommonErrors$();
  }
  return $n_scg_CommonErrors$;
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.nv = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().id($m_jl_System$SystemProperties$().ko("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.nv = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  fZ: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sci_MapNode$() {
  this.nx = null;
  $n_sci_MapNode$ = this;
  $m_s_reflect_ManifestFactory$IntManifest$();
  this.nx = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  gd: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (($m_jl_reflect_Array$().ia(as) - 1) | 0)));
}
/** @constructor */
function $c_sci_Node() {
}
$p = $c_sci_Node.prototype = new $h_O();
$p.constructor = $c_sci_Node;
/** @constructor */
function $h_sci_Node() {
}
$h_sci_Node.prototype = $p;
$p.oI = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > ((as.a.length - 1) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((as.a.length - 1) | 0));
  as.m(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = ((((as.a.length - ix) | 0) - 1) | 0);
  as.m(srcPos, result, ix, length);
  return result;
});
$p.qO = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.a.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.m(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.m(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  aB: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.fV = 0;
  $n_sci_Node$ = this;
  this.fV = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.dH = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.d3 = (function(mask) {
  return (1 << mask);
});
$p.qI = (function(bitmap, bitpos) {
  return $m_jl_Integer$().cD((bitmap & ((bitpos - 1) | 0)));
});
$p.cd = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.qI(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  gg: 1
}));
var $n_sci_Node$;
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$();
  }
  return $n_sci_Node$;
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.jN = null;
  this.bm = null;
  this.cB = null;
  this.eM = null;
  this.jO = null;
  this.nB = null;
  $n_sci_VectorStatics$ = this;
  this.jN = new $ac_O(0);
  this.bm = new ($d_O.r().r().C)(0);
  this.cB = new ($d_O.r().r().r().C)(0);
  this.eM = new ($d_O.r().r().r().r().C)(0);
  this.jO = new ($d_O.r().r().r().r().r().C)(0);
  this.nB = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.eS = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.m(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.u = (function(a, elem) {
  var ac = $m_ju_Arrays$().S(a, ((1 + a.a.length) | 0));
  ac.a[((ac.a.length - 1) | 0)] = elem;
  return ac;
});
$p.cE = (function(elem, a) {
  var ac = $objectGetClass(a).bR.Q().bR.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.m(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.kj = (function(level, a, f) {
  var i = 0;
  var len = a.a.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.n(a.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    var l = ((level - 1) | 0);
    while ((i < len)) {
      this.kj(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  gx: 1
}));
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$();
  }
  return $n_sci_VectorStatics$;
}
/** @constructor */
function $c_scm_HashMap$Node(_key, _hash, _value, _next) {
  this.dw = null;
  this.cC = 0;
  this.c8 = null;
  this.aD = null;
  this.dw = _key;
  this.cC = _hash;
  this.c8 = _value;
  this.aD = _next;
}
$p = $c_scm_HashMap$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashMap$Node;
/** @constructor */
function $h_scm_HashMap$Node() {
}
$h_scm_HashMap$Node.prototype = $p;
$p.i7 = (function(k, h) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if (((h === \u03b4this$tailLocal1.cC) && $m_sr_BoxesRunTime$().i(k, \u03b4this$tailLocal1.dw))) {
      return \u03b4this$tailLocal1;
    } else if (((\u03b4this$tailLocal1.aD === null) || (\u03b4this$tailLocal1.cC > h))) {
      return null;
    } else {
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.aD;
    }
  }
});
$p.cn = (function(f) {
  var \u03b4this$tailLocal3 = this;
  while (true) {
    f.gg(\u03b4this$tailLocal3.dw, \u03b4this$tailLocal3.c8);
    if ((\u03b4this$tailLocal3.aD !== null)) {
      \u03b4this$tailLocal3 = \u03b4this$tailLocal3.aD;
    } else {
      return (void 0);
    }
  }
});
$p.q = (function() {
  return ((((((("Node(" + this.dw) + ", ") + this.c8) + ", ") + this.cC) + ") -> ") + this.aD);
});
var $d_scm_HashMap$Node = new $TypeData().i($c_scm_HashMap$Node, "scala.collection.mutable.HashMap$Node", ({
  gG: 1
}));
/** @constructor */
function $c_scm_HashSet$Node(_key, _hash, _next) {
  this.dy = null;
  this.ca = 0;
  this.af = null;
  this.dy = _key;
  this.ca = _hash;
  this.af = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.qv = (function(k, h) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if (((h === \u03b4this$tailLocal1.ca) && $m_sr_BoxesRunTime$().i(k, \u03b4this$tailLocal1.dy))) {
      return \u03b4this$tailLocal1;
    } else if (((\u03b4this$tailLocal1.af === null) || (\u03b4this$tailLocal1.ca > h))) {
      return null;
    } else {
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.af;
    }
  }
});
$p.q = (function() {
  return ((((("Node(" + this.dy) + ", ") + this.ca) + ") -> ") + this.af);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  gK: 1
}));
function $ct_s_concurrent_BatchingExecutor$AbstractBatch__jl_Runnable__Ajl_Runnable__I__($thiz, first, other, size) {
  $thiz.g0 = first;
  $thiz.g1 = other;
  $thiz.dz = size;
  return $thiz;
}
function $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable($thiz, curSize) {
  var curOther = $thiz.g1;
  var curLen = curOther.a.length;
  if ((curSize <= curLen)) {
    return curOther;
  } else {
    var newLen = ((curLen === 0) ? 4 : (curLen << 1));
    if ((newLen <= curLen)) {
      throw new $c_jl_StackOverflowError(("Space limit of asynchronous stack reached: " + curLen));
    }
    var newOther = new ($d_jl_Runnable.r().C)(newLen);
    curOther.m(0, newOther, 0, curLen);
    $thiz.g1 = newOther;
    return newOther;
  }
}
/** @constructor */
function $c_s_concurrent_BatchingExecutor$AbstractBatch() {
  this.g0 = null;
  this.g1 = null;
  this.dz = 0;
}
$p = $c_s_concurrent_BatchingExecutor$AbstractBatch.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutor$AbstractBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$AbstractBatch() {
}
$h_s_concurrent_BatchingExecutor$AbstractBatch.prototype = $p;
$p.rg = (function(r) {
  var sz = this.dz;
  if ((sz === 0)) {
    this.g0 = r;
  } else {
    $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable(this, sz).a[((sz - 1) | 0)] = r;
  }
  this.dz = ((1 + sz) | 0);
});
$p.rs = (function(n) {
  var n$tailLocal1 = n;
  while (true) {
    if ((n$tailLocal1 > 0)) {
      var x1 = this.dz;
      if ((x1 === 0)) {
        return (void 0);
      }
      if ((x1 === 1)) {
        var x$proxy1 = this.g0;
        if ((x$proxy1 === null)) {
          $m_sr_Scala3RunTime$().bb();
        }
        this.g0 = null;
        this.dz = 0;
        x$proxy1.ef();
        n$tailLocal1 = ((n$tailLocal1 - 1) | 0);
        continue;
      }
      var o = this.g1;
      var x$proxy2 = o.a[((x1 - 2) | 0)];
      if ((x$proxy2 === null)) {
        $m_sr_Scala3RunTime$().bb();
      }
      o.a[((x1 - 2) | 0)] = null;
      this.dz = ((x1 - 1) | 0);
      x$proxy2.ef();
      n$tailLocal1 = ((n$tailLocal1 - 1) | 0);
    } else {
      return (void 0);
    }
  }
});
/** @constructor */
function $c_s_concurrent_BatchingExecutorStatics$() {
  this.nD = null;
  $n_s_concurrent_BatchingExecutorStatics$ = this;
  this.nD = new ($d_jl_Runnable.r().C)(0);
}
$p = $c_s_concurrent_BatchingExecutorStatics$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutorStatics$;
/** @constructor */
function $h_s_concurrent_BatchingExecutorStatics$() {
}
$h_s_concurrent_BatchingExecutorStatics$.prototype = $p;
var $d_s_concurrent_BatchingExecutorStatics$ = new $TypeData().i($c_s_concurrent_BatchingExecutorStatics$, "scala.concurrent.BatchingExecutorStatics$", ({
  gW: 1
}));
var $n_s_concurrent_BatchingExecutorStatics$;
function $m_s_concurrent_BatchingExecutorStatics$() {
  if ((!$n_s_concurrent_BatchingExecutorStatics$)) {
    $n_s_concurrent_BatchingExecutorStatics$ = new $c_s_concurrent_BatchingExecutorStatics$();
  }
  return $n_s_concurrent_BatchingExecutorStatics$;
}
/** @constructor */
function $c_s_concurrent_ExecutionContext$() {
  this.nE = null;
  this.nF = false;
  this.eN = null;
  $n_s_concurrent_ExecutionContext$ = this;
  this.eN = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$3) => {
    _$1$3.gt($m_jl_System$Streams$().eo);
  }));
}
$p = $c_s_concurrent_ExecutionContext$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_ExecutionContext$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$() {
}
$h_s_concurrent_ExecutionContext$.prototype = $p;
$p.oq = (function() {
  if ((!this.nF)) {
    this.nE = $m_sjs_concurrent_JSExecutionContext$().nR;
    this.nF = true;
  }
  return this.nE;
});
var $d_s_concurrent_ExecutionContext$ = new $TypeData().i($c_s_concurrent_ExecutionContext$, "scala.concurrent.ExecutionContext$", ({
  gX: 1
}));
var $n_s_concurrent_ExecutionContext$;
function $m_s_concurrent_ExecutionContext$() {
  if ((!$n_s_concurrent_ExecutionContext$)) {
    $n_s_concurrent_ExecutionContext$ = new $c_s_concurrent_ExecutionContext$();
  }
  return $n_s_concurrent_ExecutionContext$;
}
/** @constructor */
function $c_s_concurrent_Future$() {
  this.nH = null;
  this.nJ = null;
  this.nI = null;
  this.jU = null;
  this.nK = null;
  $n_s_concurrent_Future$ = this;
  $m_sci_Map$().qy(new $c_sjsr_WrappedVarArgs([new $c_T2($d_Z.l(), $d_jl_Boolean.l()), new $c_T2($d_B.l(), $d_jl_Byte.l()), new $c_T2($d_C.l(), $d_jl_Character.l()), new $c_T2($d_S.l(), $d_jl_Short.l()), new $c_T2($d_I.l(), $d_jl_Integer.l()), new $c_T2($d_J.l(), $d_jl_Long.l()), new $c_T2($d_F.l(), $d_jl_Float.l()), new $c_T2($d_D.l(), $d_jl_Double.l()), new $c_T2($d_V.l(), $d_jl_Void.l())]));
  this.nH = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2) => {
    throw new $c_s_concurrent_Future$$anon$1(t$2);
  }));
  this.nJ = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$2());
  this.nI = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$3());
  $m_s_concurrent_Future$().om(this.nI);
  this.jU = $m_s_concurrent_Future$().qq(new $c_s_concurrent_Future$$anon$4());
  this.nK = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2$1) => this.jU));
  this.om(new $c_s_util_Success((void 0)));
}
$p = $c_s_concurrent_Future$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_Future$;
/** @constructor */
function $h_s_concurrent_Future$() {
}
$h_s_concurrent_Future$.prototype = $p;
$p.qq = (function(exception) {
  return $m_s_concurrent_Promise$().qr(exception);
});
$p.om = (function(result) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), result);
});
var $d_s_concurrent_Future$ = new $TypeData().i($c_s_concurrent_Future$, "scala.concurrent.Future$", ({
  gZ: 1
}));
var $n_s_concurrent_Future$;
function $m_s_concurrent_Future$() {
  if ((!$n_s_concurrent_Future$)) {
    $n_s_concurrent_Future$ = new $c_s_concurrent_Future$();
  }
  return $n_s_concurrent_Future$;
}
function $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result) {
  if ($thiz.rG(result)) {
    return $thiz;
  } else {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "Promise already completed.");
  }
}
function $f_s_concurrent_Promise__success__O__s_concurrent_Promise($thiz, value) {
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, new $c_s_util_Success(value));
}
function $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise($thiz, cause) {
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, new $c_s_util_Failure(cause));
}
/** @constructor */
function $c_s_concurrent_Promise$() {
}
$p = $c_s_concurrent_Promise$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_Promise$;
/** @constructor */
function $h_s_concurrent_Promise$() {
}
$h_s_concurrent_Promise$.prototype = $p;
$p.qr = (function(exception) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), new $c_s_util_Failure(exception));
});
var $d_s_concurrent_Promise$ = new $TypeData().i($c_s_concurrent_Promise$, "scala.concurrent.Promise$", ({
  h4: 1
}));
var $n_s_concurrent_Promise$;
function $m_s_concurrent_Promise$() {
  if ((!$n_s_concurrent_Promise$)) {
    $n_s_concurrent_Promise$ = new $c_s_concurrent_Promise$();
  }
  return $n_s_concurrent_Promise$;
}
/** @constructor */
function $c_s_concurrent_impl_Promise$() {
  this.g2 = null;
  $n_s_concurrent_impl_Promise$ = this;
  this.g2 = $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 0, null, $m_s_concurrent_ExecutionContext$parasitic$());
}
$p = $c_s_concurrent_impl_Promise$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_impl_Promise$;
/** @constructor */
function $h_s_concurrent_impl_Promise$() {
}
$h_s_concurrent_impl_Promise$.prototype = $p;
$p.gv = (function(value) {
  if ((value instanceof $c_s_util_Success)) {
    return value;
  } else {
    var t = value.dA;
    return (((false || false) || (t instanceof $c_jl_Error)) ? (false ? new $c_s_util_Success(t.oZ()) : new $c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed Exception", t))) : value);
  }
});
var $d_s_concurrent_impl_Promise$ = new $TypeData().i($c_s_concurrent_impl_Promise$, "scala.concurrent.impl.Promise$", ({
  h5: 1
}));
var $n_s_concurrent_impl_Promise$;
function $m_s_concurrent_impl_Promise$() {
  if ((!$n_s_concurrent_impl_Promise$)) {
    $n_s_concurrent_impl_Promise$ = new $c_s_concurrent_impl_Promise$();
  }
  return $n_s_concurrent_impl_Promise$;
}
function $is_s_concurrent_impl_Promise$Callbacks(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ak)));
}
function $isArrayOf_s_concurrent_impl_Promise$Callbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.i = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.qm(x, y) : ((x instanceof $Char) ? this.qk(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.qm = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.ql(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $Long)) {
      var $x_1 = $uJ(xn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = y.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.ql = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $Long)) {
      var $x_1 = $uJ(yn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      return (x2 === ((4.294967296E9 * x3_$_hi) + (x3_$_lo >>> 0.0)));
    } else {
      return (false && yn.E(x2));
    }
  } else if ((xn instanceof $Long)) {
    var $x_2 = $uJ(xn);
    var x3$2_$_lo = $x_2.l;
    var x3$2_$_hi = $x_2.h;
    if ((yn instanceof $Long)) {
      var $x_3 = $uJ(yn);
      var x2$3_$_lo = $x_3.l;
      var x2$3_$_hi = $x_3.h;
      return (((x3$2_$_lo ^ x2$3_$_lo) | (x3$2_$_hi ^ x2$3_$_hi)) === 0);
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * x3$2_$_hi) + (x3$2_$_lo >>> 0.0)) === x3$3);
    } else {
      return (false && yn.E($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.qk = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $Long)) {
      var $x_1 = $uJ(y);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = xc.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  hn: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
/** @constructor */
function $c_sr_Scala3RunTime$() {
}
$p = $c_sr_Scala3RunTime$.prototype = new $h_O();
$p.constructor = $c_sr_Scala3RunTime$;
/** @constructor */
function $h_sr_Scala3RunTime$() {
}
$h_sr_Scala3RunTime$.prototype = $p;
$p.bb = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  hr: 1
}));
var $n_sr_Scala3RunTime$;
function $m_sr_Scala3RunTime$() {
  if ((!$n_sr_Scala3RunTime$)) {
    $n_sr_Scala3RunTime$ = new $c_sr_Scala3RunTime$();
  }
  return $n_sr_Scala3RunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.pS = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.a;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.a[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.a[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.o8 = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.a[idx] = value;
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    xs.a[idx] = (+value);
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.a;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    xs.a[idx] = Math.fround(value);
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    xs.a[idx] = $uC(value);
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    xs.a[idx] = (!(!value));
    return (void 0);
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.k2 = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.f2(), (x.cI() + "("), ",", ")");
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  hs: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.qX = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.qh = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().ol(dv);
    var lv_$_lo = $x_1.l;
    var lv_$_hi = $x_1.h;
    if ((((4.294967296E9 * lv_$_hi) + (lv_$_lo >>> 0.0)) === dv)) {
      return (lv_$_lo ^ lv_$_hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
      }
    }
  }
});
$p.I = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.qh((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.qX($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.qP = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  hu: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_sr_Statics$PFMarker$() {
}
$p = $c_sr_Statics$PFMarker$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$PFMarker$;
/** @constructor */
function $h_sr_Statics$PFMarker$() {
}
$h_sr_Statics$PFMarker$.prototype = $p;
var $d_sr_Statics$PFMarker$ = new $TypeData().i($c_sr_Statics$PFMarker$, "scala.runtime.Statics$PFMarker$", ({
  hv: 1
}));
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$();
  }
  return $n_sr_Statics$PFMarker$;
}
/** @constructor */
function $c_sjs_concurrent_JSExecutionContext$() {
  this.nR = null;
  $n_sjs_concurrent_JSExecutionContext$ = this;
  this.nR = $m_sjs_concurrent_QueueExecutionContext$().pR();
}
$p = $c_sjs_concurrent_JSExecutionContext$.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_JSExecutionContext$;
/** @constructor */
function $h_sjs_concurrent_JSExecutionContext$() {
}
$h_sjs_concurrent_JSExecutionContext$.prototype = $p;
var $d_sjs_concurrent_JSExecutionContext$ = new $TypeData().i($c_sjs_concurrent_JSExecutionContext$, "scala.scalajs.concurrent.JSExecutionContext$", ({
  hw: 1
}));
var $n_sjs_concurrent_JSExecutionContext$;
function $m_sjs_concurrent_JSExecutionContext$() {
  if ((!$n_sjs_concurrent_JSExecutionContext$)) {
    $n_sjs_concurrent_JSExecutionContext$ = new $c_sjs_concurrent_JSExecutionContext$();
  }
  return $n_sjs_concurrent_JSExecutionContext$;
}
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$() {
}
$p = $c_sjs_concurrent_QueueExecutionContext$.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$() {
}
$h_sjs_concurrent_QueueExecutionContext$.prototype = $p;
$p.pR = (function() {
  return (((typeof Promise) === "undefined") ? new $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() : new $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext());
});
var $d_sjs_concurrent_QueueExecutionContext$ = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$, "scala.scalajs.concurrent.QueueExecutionContext$", ({
  hx: 1
}));
var $n_sjs_concurrent_QueueExecutionContext$;
function $m_sjs_concurrent_QueueExecutionContext$() {
  if ((!$n_sjs_concurrent_QueueExecutionContext$)) {
    $n_sjs_concurrent_QueueExecutionContext$ = new $c_sjs_concurrent_QueueExecutionContext$();
  }
  return $n_sjs_concurrent_QueueExecutionContext$;
}
/** @constructor */
function $c_sjs_js_Thenable$ThenableOps$() {
}
$p = $c_sjs_js_Thenable$ThenableOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Thenable$ThenableOps$;
/** @constructor */
function $h_sjs_js_Thenable$ThenableOps$() {
}
$h_sjs_js_Thenable$ThenableOps$.prototype = $p;
$p.oU = (function(this$) {
  var p2 = $ct_s_concurrent_impl_Promise$DefaultPromise__(new $c_s_concurrent_impl_Promise$DefaultPromise());
  this$.then(((arg1$2) => {
    $f_s_concurrent_Promise__success__O__s_concurrent_Promise(p2, arg1$2);
  }), $m_sjs_js_defined$().pP(((arg1$2$1) => {
    $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(p2, ((arg1$2$1 instanceof $c_jl_Throwable) ? arg1$2$1 : new $c_sjs_js_JavaScriptException(arg1$2$1)));
  })));
  return p2;
});
var $d_sjs_js_Thenable$ThenableOps$ = new $TypeData().i($c_sjs_js_Thenable$ThenableOps$, "scala.scalajs.js.Thenable$ThenableOps$", ({
  hD: 1
}));
var $n_sjs_js_Thenable$ThenableOps$;
function $m_sjs_js_Thenable$ThenableOps$() {
  if ((!$n_sjs_js_Thenable$ThenableOps$)) {
    $n_sjs_js_Thenable$ThenableOps$ = new $c_sjs_js_Thenable$ThenableOps$();
  }
  return $n_sjs_js_Thenable$ThenableOps$;
}
/** @constructor */
function $c_sjs_js_defined$() {
}
$p = $c_sjs_js_defined$.prototype = new $h_O();
$p.constructor = $c_sjs_js_defined$;
/** @constructor */
function $h_sjs_js_defined$() {
}
$h_sjs_js_defined$.prototype = $p;
$p.pP = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  hG: 1
}));
var $n_sjs_js_defined$;
function $m_sjs_js_defined$() {
  if ((!$n_sjs_js_defined$)) {
    $n_sjs_js_defined$ = new $c_sjs_js_defined$();
  }
  return $n_sjs_js_defined$;
}
/** @constructor */
function $c_s_util_CommandLineParser$() {
}
$p = $c_s_util_CommandLineParser$.prototype = new $h_O();
$p.constructor = $c_s_util_CommandLineParser$;
/** @constructor */
function $h_s_util_CommandLineParser$() {
}
$h_s_util_CommandLineParser$.prototype = $p;
$p.rz = (function(err) {
  var where = ((err.ot() === 0) ? "" : ((err.ot() === 1) ? " after first argument" : ((" after " + err.ot()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.rP());
  $m_s_Console$().oC().ie((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  hI: 1
}));
var $n_s_util_CommandLineParser$;
function $m_s_util_CommandLineParser$() {
  if ((!$n_s_util_CommandLineParser$)) {
    $n_s_util_CommandLineParser$ = new $c_s_util_CommandLineParser$();
  }
  return $n_s_util_CommandLineParser$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.jY = null;
  this.jY = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.q = (function() {
  return (("DynamicVariable(" + this.jY) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  hK: 1
}));
function $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable($thiz) {
  return ($m_s_util_control_NoStackTrace$().nT ? $c_jl_Throwable.prototype.eV.call($thiz) : $thiz);
}
/** @constructor */
function $c_s_util_control_NoStackTrace$() {
  this.nT = false;
  this.nT = false;
}
$p = $c_s_util_control_NoStackTrace$.prototype = new $h_O();
$p.constructor = $c_s_util_control_NoStackTrace$;
/** @constructor */
function $h_s_util_control_NoStackTrace$() {
}
$h_s_util_control_NoStackTrace$.prototype = $p;
var $d_s_util_control_NoStackTrace$ = new $TypeData().i($c_s_util_control_NoStackTrace$, "scala.util.control.NoStackTrace$", ({
  hM: 1
}));
var $n_s_util_control_NoStackTrace$;
function $m_s_util_control_NoStackTrace$() {
  if ((!$n_s_util_control_NoStackTrace$)) {
    $n_s_util_control_NoStackTrace$ = new $c_s_util_control_NoStackTrace$();
  }
  return $n_s_util_control_NoStackTrace$;
}
/** @constructor */
function $c_s_util_control_NonFatal$() {
}
$p = $c_s_util_control_NonFatal$.prototype = new $h_O();
$p.constructor = $c_s_util_control_NonFatal$;
/** @constructor */
function $h_s_util_control_NonFatal$() {
}
$h_s_util_control_NonFatal$.prototype = $p;
$p.i3 = (function(t) {
  matchAlts1: {
    matchAlts2: {
      if ((t instanceof $c_jl_VirtualMachineError)) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      break matchAlts1;
    }
    return false;
  }
  return true;
});
$p.rH = (function(t) {
  return (this.i3(t) ? new $c_s_Some(t) : $m_s_None$());
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  hN: 1
}));
var $n_s_util_control_NonFatal$;
function $m_s_util_control_NonFatal$() {
  if ((!$n_s_util_control_NonFatal$)) {
    $n_s_util_control_NonFatal$ = new $c_s_util_control_NonFatal$();
  }
  return $n_s_util_control_NonFatal$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.H = (function(hash, data) {
  var h = this.ec(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.ec = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.bn = (function(hash, length) {
  return this.ip((hash ^ length));
});
$p.ip = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.oW = (function(x, y, seed) {
  var h = seed;
  h = this.H(h, $f_T__hashCode__I("Tuple2"));
  h = this.H(h, x);
  h = this.H(h, y);
  return this.bn(h, 2);
});
$p.gu = (function(x, seed, ignorePrefix) {
  var arr = x.cG();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.cI()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.H(h, $f_T__hashCode__I(x.cI()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.H(h, $m_sr_Statics$().I(x.cH(i)));
      i = ((1 + i) | 0);
    }
    return this.bn(h, arr);
  }
});
$p.is = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.B();
  while (iterator.h()) {
    var x = iterator.g();
    var h = $m_sr_Statics$().I(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.H(h$2, a);
  h$2 = this.H(h$2, b);
  h$2 = this.ec(h$2, c);
  return this.bn(h$2, n);
});
$p.r9 = (function(xs, seed) {
  var it = xs.B();
  var h = seed;
  if ((!it.h())) {
    return this.bn(h, 0);
  }
  var x0 = it.g();
  if ((!it.h())) {
    return this.bn(this.H(h, $m_sr_Statics$().I(x0)), 1);
  }
  var x1 = it.g();
  var initial = $m_sr_Statics$().I(x0);
  h = this.H(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().I(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.h()) {
    h = this.H(h, prev);
    var hash = $m_sr_Statics$().I(it.g());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.H(h, hash);
      i = ((1 + i) | 0);
      while (it.h()) {
        h = this.H(h, $m_sr_Statics$().I(it.g()));
        i = ((1 + i) | 0);
      }
      return this.bn(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.ip(this.H(this.H(h0, rangeDiff), prev));
});
$p.rj = (function(start, step, last, seed) {
  return this.ip(this.H(this.H(this.H(seed, start), step), last));
});
$p.qK = (function(a, seed) {
  var h = seed;
  var l = a.G();
  switch (l) {
    case 0: {
      return this.bn(h, 0);
      break;
    }
    case 1: {
      return this.bn(this.H(h, $m_sr_Statics$().I(a.V(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().I(a.V(0));
      h = this.H(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().I(a.V(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.H(h, prev);
        var hash = $m_sr_Statics$().I(a.V(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.H(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.H(h, $m_sr_Statics$().I(a.V(i)));
            i = ((1 + i) | 0);
          }
          return this.bn(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.ip(this.H(this.H(h0, rangeDiff), prev));
    }
  }
});
$p.qU = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.t())) {
    var head = elems.cq();
    var tail = elems.bQ();
    var hash = $m_sr_Statics$().I(head);
    h = this.H(h, hash);
    switch (rangeState) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.rj(initial, rangeDiff, prev, seed) : this.bn(h, n));
});
function $f_s_util_matching_Regex$MatchData__matched__T($thiz) {
  return (($thiz.dI() >= 0) ? $dp_toString__T($dp_subSequence__I__I__jl_CharSequence($thiz.kO(), $thiz.dI(), $thiz.eU())) : null);
}
function $f_s_util_matching_Regex$MatchData__group__I__T($thiz, i) {
  return (($thiz.f4(i) >= 0) ? $dp_toString__T($dp_subSequence__I__I__jl_CharSequence($thiz.kO(), $thiz.f4(i), $thiz.gk(i))) : null);
}
function $f_s_util_matching_Regex$MatchData__toString__T($thiz) {
  var x$proxy2 = $f_s_util_matching_Regex$MatchData__matched__T($thiz);
  if ((x$proxy2 === null)) {
    $m_sr_Scala3RunTime$().bb();
  }
  return x$proxy2;
}
function $f_s_util_matching_Regex$Replacement__replaced__T($thiz) {
  $thiz.ky().pK($thiz.i0);
  return $thiz.i0.K;
}
/** @constructor */
function $c_jl_Character$() {
  this.iu = null;
  $n_jl_Character$ = this;
  this.iu = $constArrUDiffs_I(67, "1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]");
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.qe = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().pT(this.iu, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.iu.a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  c2: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
/** @constructor */
function $c_jl_Integer$() {
}
$p = $c_jl_Integer$.prototype = new $h_O();
$p.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $p;
$p.gs = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.id = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().gs(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().gs(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) | 0);
  if ((i >= len)) {
    $m_jl_Integer$().gs(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.qe(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().gs(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().gs(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
$p.cD = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  c8: 1,
  a: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $Long));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.O)));
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.el = null;
  this.f8 = null;
  this.em = null;
  this.en = 0;
  this.ek = 0;
  this.el = declaringClass;
  this.f8 = methodName;
  this.em = fileName;
  this.en = lineNumber;
  this.ek = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.E = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.em === that.em) && (this.en === that.en)) && (this.ek === that.ek)) && (this.el === that.el)) && (this.f8 === that.f8)));
});
$p.q = (function() {
  var result = "";
  if ((this.el !== "<jscode>")) {
    result = ((("" + result) + this.el) + ".");
  }
  result = (("" + result) + this.f8);
  if ((this.em === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.em);
    if ((this.en >= 0)) {
      result = ((result + ":") + this.en);
      if ((this.ek >= 0)) {
        result = ((result + ":") + this.ek);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.A = (function() {
  return (((($f_T__hashCode__I(this.el) ^ $f_T__hashCode__I(this.f8)) ^ $f_T__hashCode__I(this.em)) ^ this.en) ^ this.ek);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aT)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  aT: 1,
  a: 1
}));
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.kV = s;
  $thiz.gA = e;
  $thiz.kW = writableStackTrace;
  if (writableStackTrace) {
    $thiz.eV();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.kV = null;
    this.gA = null;
    this.kW = false;
    this.kU = null;
    this.dL = null;
  }
  gl() {
    return this.kV;
  }
  eV() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.cm : this);
    this.kU = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  kp() {
    if ((this.dL === null)) {
      if (this.kW) {
        this.dL = $m_jl_StackTrace$().qp(this.kU);
      } else {
        this.dL = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.dL;
  }
  gt(s) {
    this.kp();
    var t = this.q();
    s.ed(t);
    if ((this.dL.a.length !== 0)) {
      var i = 0;
      while ((i < this.dL.a.length)) {
        var t$1 = ("  at " + this.dL.a[i]);
        s.ed(t$1);
        i = ((1 + i) | 0);
      }
    } else {
      s.ed("  <no stack trace available>");
    }
    var wCause = this;
    while (((wCause !== wCause.gA) && (wCause.gA !== null))) {
      var parentTrace = wCause.kp();
      wCause = wCause.gA;
      var thisTrace = wCause.kp();
      var thisLength = thisTrace.a.length;
      var parentLength = parentTrace.a.length;
      var t$2 = ("Caused by: " + wCause);
      s.ed(t$2);
      if ((thisLength !== 0)) {
        var sameFrameCount = 0;
        while (true) {
          if (((sameFrameCount < thisLength) && (sameFrameCount < parentLength))) {
            var x = thisTrace.a[((((thisLength - sameFrameCount) | 0) - 1) | 0)];
            var x$2 = parentTrace.a[((((parentLength - sameFrameCount) | 0) - 1) | 0)];
            var $x_1 = ((x === null) ? (x$2 === null) : x.E(x$2));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            sameFrameCount = ((1 + sameFrameCount) | 0);
          } else {
            break;
          }
        }
        if ((sameFrameCount > 0)) {
          sameFrameCount = ((sameFrameCount - 1) | 0);
        }
        var lengthToPrint = ((thisLength - sameFrameCount) | 0);
        var i$2 = 0;
        while ((i$2 < lengthToPrint)) {
          var t$3 = ("  at " + thisTrace.a[i$2]);
          s.ed(t$3);
          i$2 = ((1 + i$2) | 0);
        }
        if ((sameFrameCount > 0)) {
          var t$4 = (("  ... " + sameFrameCount) + " more");
          s.ed(t$4);
        }
      } else {
        s.ed("  <no stack trace available>");
      }
    }
  }
  q() {
    var className = $objectClassName(this);
    var message = this.gl();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  A() {
    return $c_O.prototype.A.call(this);
  }
  E(that) {
    return $c_O.prototype.E.call(this, that);
  }
  get "message"() {
    var m = this.gl();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.q();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.e)));
}
/** @constructor */
function $c_ju_AbstractMap() {
}
$p = $c_ju_AbstractMap.prototype = new $h_O();
$p.constructor = $c_ju_AbstractMap;
/** @constructor */
function $h_ju_AbstractMap() {
}
$h_ju_AbstractMap.prototype = $p;
$p.E = (function(o) {
  if ((o === this)) {
    return true;
  } else if ($is_ju_Map(o)) {
    if ((this.bT === o.bT)) {
      var _\uff3fself = new $c_ju_HashMap$EntrySet(this);
      var _\uff3fself$1 = _\uff3fself.ce();
      _return: {
        while (_\uff3fself$1.h()) {
          var t = _\uff3fself$1.g();
          var a = $p_ju_HashMap__getOrDefaultImpl__O__O__O(o, t.cg, null);
          var b = t.bo;
          if ((!((a === null) ? (b === null) : $dp_equals__O__Z(a, b)))) {
            var $x_1 = true;
            break _return;
          }
        }
        var $x_1 = false;
      }
      return (!$x_1);
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.A = (function() {
  var _\uff3fself = new $c_ju_HashMap$EntrySet(this);
  var _\uff3fself$1 = _\uff3fself.ce();
  var result = 0;
  while (_\uff3fself$1.h()) {
    var t = result;
    var u = _\uff3fself$1.g();
    var t$1 = (t | 0);
    result = ((u.A() + t$1) | 0);
  }
  return (result | 0);
});
$p.q = (function() {
  var result = "{";
  var first = true;
  var iter = new $c_ju_HashMap$EntrySet(this).ce();
  while (iter.h()) {
    var entry = iter.g();
    if (first) {
      first = false;
    } else {
      result = (result + ", ");
    }
    result = (((("" + result) + entry.cg) + "=") + entry.bo);
  }
  return (result + "}");
});
function $is_ju_Collection(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.P)));
}
function $isArrayOf_ju_Collection(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.P)));
}
function $ct_ju_HashMap$AbstractHashMapIterator__ju_HashMap__($thiz, outer) {
  $thiz.gC = outer;
  $thiz.gD = outer.aK.a.length;
  return $thiz;
}
/** @constructor */
function $c_ju_HashMap$AbstractHashMapIterator() {
  this.gD = 0;
  this.er = 0;
  this.es = null;
  this.gC = null;
}
$p = $c_ju_HashMap$AbstractHashMapIterator.prototype = new $h_O();
$p.constructor = $c_ju_HashMap$AbstractHashMapIterator;
/** @constructor */
function $h_ju_HashMap$AbstractHashMapIterator() {
}
$h_ju_HashMap$AbstractHashMapIterator.prototype = $p;
$p.h = (function() {
  if ((this.es !== null)) {
    return true;
  } else {
    while ((this.er < this.gD)) {
      var node = this.gC.aK.a[this.er];
      this.er = ((1 + this.er) | 0);
      if ((node !== null)) {
        this.es = node;
        return true;
      }
    }
    return false;
  }
});
$p.g = (function() {
  if ((!this.h())) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator");
  }
  var node = this.es;
  this.es = node.bC;
  return this.og(node);
});
/** @constructor */
function $c_ju_HashMap$Node(key, hash, value, previous, next) {
  this.cg = null;
  this.dM = 0;
  this.bo = null;
  this.et = null;
  this.bC = null;
  this.cg = key;
  this.dM = hash;
  this.bo = value;
  this.et = previous;
  this.bC = next;
}
$p = $c_ju_HashMap$Node.prototype = new $h_O();
$p.constructor = $c_ju_HashMap$Node;
/** @constructor */
function $h_ju_HashMap$Node() {
}
$h_ju_HashMap$Node.prototype = $p;
$p.E = (function(that) {
  if ($is_ju_Map$Entry(that)) {
    var a = this.cg;
    var b = that.cg;
    if (((a === null) ? (b === null) : $dp_equals__O__Z(a, b))) {
      var a$1 = this.bo;
      var b$1 = that.bo;
      return ((a$1 === null) ? (b$1 === null) : $dp_equals__O__Z(a$1, b$1));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.A = (function() {
  var improvedHash = this.dM;
  var o = this.bo;
  return ((improvedHash ^ ((improvedHash >>> 16) | 0)) ^ ((o === null) ? 0 : $dp_hashCode__I(o)));
});
$p.q = (function() {
  return ((this.cg + "=") + this.bo);
});
var $d_ju_HashMap$Node = new $TypeData().i($c_ju_HashMap$Node, "java.util.HashMap$Node", ({
  cE: 1,
  as: 1
}));
function $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, value) {
  $thiz.M = value;
  return $thiz;
}
/** @constructor */
function $c_ju_concurrent_atomic_AtomicReference() {
  this.M = null;
}
$p = $c_ju_concurrent_atomic_AtomicReference.prototype = new $h_O();
$p.constructor = $c_ju_concurrent_atomic_AtomicReference;
/** @constructor */
function $h_ju_concurrent_atomic_AtomicReference() {
}
$h_ju_concurrent_atomic_AtomicReference.prototype = $p;
$p.gi = (function(expect, update) {
  if (Object.is(expect, this.M)) {
    this.M = update;
    return true;
  } else {
    return false;
  }
});
$p.q = (function() {
  return ("" + this.M);
});
/** @constructor */
function $c_ju_regex_IndicesBuilder$AlternativesNode(alternatives) {
  this.bU = 0;
  this.dN = null;
  this.dN = alternatives;
}
$p = $c_ju_regex_IndicesBuilder$AlternativesNode.prototype = new $h_ju_regex_IndicesBuilder$Node();
$p.constructor = $c_ju_regex_IndicesBuilder$AlternativesNode;
/** @constructor */
function $h_ju_regex_IndicesBuilder$AlternativesNode() {
}
$h_ju_regex_IndicesBuilder$AlternativesNode.prototype = $p;
$p.bc = (function(newGroupIndex) {
  var nextIndex = $c_ju_regex_IndicesBuilder$Node.prototype.bc.call(this, newGroupIndex);
  var len = (this.dN.length | 0);
  var i = 0;
  while ((i !== len)) {
    nextIndex = this.dN[i].bc(nextIndex);
    i = ((1 + i) | 0);
  }
  return nextIndex;
});
$p.cb = (function(groupNodeMap) {
  var result = "(";
  var len = (this.dN.length | 0);
  var i = 0;
  while ((i !== len)) {
    if ((i !== 0)) {
      result = (result + "|");
    }
    result = (("" + result) + this.dN[i].cb(groupNodeMap));
    i = ((1 + i) | 0);
  }
  return (result + ")");
});
$p.cr = (function(matchResult, indices, start, end) {
  var len = (this.dN.length | 0);
  var i = 0;
  while ((i !== len)) {
    this.dN[i].cr(matchResult, indices, start, end);
    i = ((1 + i) | 0);
  }
});
var $d_ju_regex_IndicesBuilder$AlternativesNode = new $TypeData().i($c_ju_regex_IndicesBuilder$AlternativesNode, "java.util.regex.IndicesBuilder$AlternativesNode", ({
  cR: 1,
  Q: 1
}));
/** @constructor */
function $c_ju_regex_IndicesBuilder$BackReferenceNode(groupNumber) {
  this.bU = 0;
  this.iG = 0;
  this.iG = groupNumber;
}
$p = $c_ju_regex_IndicesBuilder$BackReferenceNode.prototype = new $h_ju_regex_IndicesBuilder$Node();
$p.constructor = $c_ju_regex_IndicesBuilder$BackReferenceNode;
/** @constructor */
function $h_ju_regex_IndicesBuilder$BackReferenceNode() {
}
$h_ju_regex_IndicesBuilder$BackReferenceNode.prototype = $p;
$p.cb = (function(groupNodeMap) {
  return (("(\\" + ((this.iG >= (groupNodeMap.length | 0)) ? 0 : groupNodeMap[this.iG].bU)) + ")");
});
$p.cr = (function(matchResult, indices, start, end) {
});
var $d_ju_regex_IndicesBuilder$BackReferenceNode = new $TypeData().i($c_ju_regex_IndicesBuilder$BackReferenceNode, "java.util.regex.IndicesBuilder$BackReferenceNode", ({
  cS: 1,
  Q: 1
}));
/** @constructor */
function $c_ju_regex_IndicesBuilder$GroupNode(number, inner) {
  this.bU = 0;
  this.l5 = 0;
  this.gI = null;
  this.l5 = number;
  this.gI = inner;
}
$p = $c_ju_regex_IndicesBuilder$GroupNode.prototype = new $h_ju_regex_IndicesBuilder$Node();
$p.constructor = $c_ju_regex_IndicesBuilder$GroupNode;
/** @constructor */
function $h_ju_regex_IndicesBuilder$GroupNode() {
}
$h_ju_regex_IndicesBuilder$GroupNode.prototype = $p;
$p.bc = (function(newGroupIndex) {
  return this.gI.bc($c_ju_regex_IndicesBuilder$Node.prototype.bc.call(this, newGroupIndex));
});
$p.cb = (function(groupNodeMap) {
  return (("(" + this.gI.cb(groupNodeMap)) + ")");
});
$p.cr = (function(matchResult, indices, start, end) {
  if ((matchResult[this.bU] !== (void 0))) {
    indices[this.l5] = [start, end];
  }
  this.gI.cr(matchResult, indices, start, end);
});
var $d_ju_regex_IndicesBuilder$GroupNode = new $TypeData().i($c_ju_regex_IndicesBuilder$GroupNode, "java.util.regex.IndicesBuilder$GroupNode", ({
  cT: 1,
  Q: 1
}));
/** @constructor */
function $c_ju_regex_IndicesBuilder$LeafRegexNode(regex) {
  this.bU = 0;
  this.gJ = null;
  this.gJ = regex;
}
$p = $c_ju_regex_IndicesBuilder$LeafRegexNode.prototype = new $h_ju_regex_IndicesBuilder$Node();
$p.constructor = $c_ju_regex_IndicesBuilder$LeafRegexNode;
/** @constructor */
function $h_ju_regex_IndicesBuilder$LeafRegexNode() {
}
$h_ju_regex_IndicesBuilder$LeafRegexNode.prototype = $p;
$p.cb = (function(groupNodeMap) {
  return (("(" + this.gJ) + ")");
});
$p.cr = (function(matchResult, indices, start, end) {
});
function $isArrayOf_ju_regex_IndicesBuilder$LeafRegexNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b0)));
}
var $d_ju_regex_IndicesBuilder$LeafRegexNode = new $TypeData().i($c_ju_regex_IndicesBuilder$LeafRegexNode, "java.util.regex.IndicesBuilder$LeafRegexNode", ({
  b0: 1,
  Q: 1
}));
/** @constructor */
function $c_ju_regex_IndicesBuilder$LookAroundNode(isLookBehind, indicator, inner) {
  this.bU = 0;
  this.l7 = false;
  this.l6 = null;
  this.fe = null;
  this.l7 = isLookBehind;
  this.l6 = indicator;
  this.fe = inner;
}
$p = $c_ju_regex_IndicesBuilder$LookAroundNode.prototype = new $h_ju_regex_IndicesBuilder$Node();
$p.constructor = $c_ju_regex_IndicesBuilder$LookAroundNode;
/** @constructor */
function $h_ju_regex_IndicesBuilder$LookAroundNode() {
}
$h_ju_regex_IndicesBuilder$LookAroundNode.prototype = $p;
$p.bc = (function(newGroupIndex) {
  return this.fe.bc($c_ju_regex_IndicesBuilder$Node.prototype.bc.call(this, newGroupIndex));
});
$p.cb = (function(groupNodeMap) {
  return ((("((" + this.l6) + this.fe.cb(groupNodeMap)) + "))");
});
$p.cr = (function(matchResult, indices, start, end) {
  if (this.l7) {
    this.fe.oE(matchResult, indices, end);
  } else {
    this.fe.oF(matchResult, indices, start);
  }
});
var $d_ju_regex_IndicesBuilder$LookAroundNode = new $TypeData().i($c_ju_regex_IndicesBuilder$LookAroundNode, "java.util.regex.IndicesBuilder$LookAroundNode", ({
  cU: 1,
  Q: 1
}));
/** @constructor */
function $c_ju_regex_IndicesBuilder$RepeatedNode(inner, repeater) {
  this.bU = 0;
  this.gK = null;
  this.l8 = null;
  this.gK = inner;
  this.l8 = repeater;
}
$p = $c_ju_regex_IndicesBuilder$RepeatedNode.prototype = new $h_ju_regex_IndicesBuilder$Node();
$p.constructor = $c_ju_regex_IndicesBuilder$RepeatedNode;
/** @constructor */
function $h_ju_regex_IndicesBuilder$RepeatedNode() {
}
$h_ju_regex_IndicesBuilder$RepeatedNode.prototype = $p;
$p.bc = (function(newGroupIndex) {
  return this.gK.bc($c_ju_regex_IndicesBuilder$Node.prototype.bc.call(this, newGroupIndex));
});
$p.cb = (function(groupNodeMap) {
  return ((("(" + this.gK.cb(groupNodeMap)) + this.l8) + ")");
});
$p.cr = (function(matchResult, indices, start, end) {
  this.gK.oE(matchResult, indices, end);
});
var $d_ju_regex_IndicesBuilder$RepeatedNode = new $TypeData().i($c_ju_regex_IndicesBuilder$RepeatedNode, "java.util.regex.IndicesBuilder$RepeatedNode", ({
  cW: 1,
  Q: 1
}));
/** @constructor */
function $c_ju_regex_IndicesBuilder$SequenceNode(sequence) {
  this.bU = 0;
  this.dO = null;
  this.dO = sequence;
}
$p = $c_ju_regex_IndicesBuilder$SequenceNode.prototype = new $h_ju_regex_IndicesBuilder$Node();
$p.constructor = $c_ju_regex_IndicesBuilder$SequenceNode;
/** @constructor */
function $h_ju_regex_IndicesBuilder$SequenceNode() {
}
$h_ju_regex_IndicesBuilder$SequenceNode.prototype = $p;
$p.bc = (function(newGroupIndex) {
  var nextIndex = $c_ju_regex_IndicesBuilder$Node.prototype.bc.call(this, newGroupIndex);
  var len = (this.dO.length | 0);
  var i = 0;
  while ((i !== len)) {
    nextIndex = this.dO[i].bc(nextIndex);
    i = ((1 + i) | 0);
  }
  return nextIndex;
});
$p.cb = (function(groupNodeMap) {
  var result = "(";
  var len = (this.dO.length | 0);
  var i = 0;
  while ((i !== len)) {
    result = (("" + result) + this.dO[i].cb(groupNodeMap));
    i = ((1 + i) | 0);
  }
  return (result + ")");
});
$p.cr = (function(matchResult, indices, start, end) {
  var len = (this.dO.length | 0);
  var i = 0;
  var nextStart = start;
  while ((i !== len)) {
    nextStart = this.dO[i].oF(matchResult, indices, nextStart);
    i = ((1 + i) | 0);
  }
});
var $d_ju_regex_IndicesBuilder$SequenceNode = new $TypeData().i($c_ju_regex_IndicesBuilder$SequenceNode, "java.util.regex.IndicesBuilder$SequenceNode", ({
  cX: 1,
  Q: 1
}));
function $p_ju_regex_Matcher__ensureLastMatch__O($thiz) {
  if (($thiz.gL === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "No match available");
  }
  return $thiz.gL;
}
function $p_ju_regex_Matcher__startInternal__I__I($thiz, compiledGroup) {
  var x = $thiz.cM.on($p_ju_regex_Matcher__ensureLastMatch__O($thiz), $thiz.gM)[compiledGroup];
  return ((x !== (void 0)) ? (((x[0] | 0) + $thiz.gN) | 0) : (-1));
}
function $p_ju_regex_Matcher__endInternal__I__I($thiz, compiledGroup) {
  var x = $thiz.cM.on($p_ju_regex_Matcher__ensureLastMatch__O($thiz), $thiz.gM)[compiledGroup];
  return ((x !== (void 0)) ? (((x[1] | 0) + $thiz.gN) | 0) : (-1));
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.cM = null;
  this.l9 = null;
  this.gN = 0;
  this.ev = null;
  this.iH = 0;
  this.gL = null;
  this.gM = false;
  this.ff = 0;
  this.cM = pattern0;
  this.l9 = input0;
  this.gN = 0;
  this.ev = this.l9;
  this.iH = 0;
  this.gL = null;
  this.gM = false;
  this.ff = 0;
}
$p = $c_ju_regex_Matcher.prototype = new $h_O();
$p.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
$h_ju_regex_Matcher.prototype = $p;
$p.qs = (function() {
  var this$1 = this.cM;
  var input = this.ev;
  var start = this.iH;
  var mtch = this$1.qS(input, start);
  var end = (this$1.fh.lastIndex | 0);
  this.iH = ((mtch !== null) ? ((end === (mtch.index | 0)) ? ((1 + end) | 0) : end) : ((1 + this.ev.length) | 0));
  this.gL = mtch;
  this.gM = false;
  return (mtch !== null);
});
$p.pJ = (function(sb, replacement) {
  var this$1 = this.ev;
  var beginIndex = this.ff;
  var endIndex = this.dI();
  var csq = this$1.substring(beginIndex, endIndex);
  sb.K = (("" + sb.K) + csq);
  var len = replacement.length;
  var i = 0;
  while ((i < len)) {
    var index = i;
    var x1 = replacement.charCodeAt(index);
    switch (x1) {
      case 36: {
        i = ((1 + i) | 0);
        var j = i;
        while (((i < len) && ((((replacement.charCodeAt(i) - 48) | 0) >>> 0) <= 9))) {
          i = ((1 + i) | 0);
        }
        var $x_1 = $m_jl_Integer$();
        var endIndex$1 = i;
        var group = $x_1.id(replacement.substring(j, endIndex$1), 10, 214748364);
        var replaced = this.qF(group);
        if ((replaced !== null)) {
          sb.K = (("" + sb.K) + replaced);
        }
        break;
      }
      case 92: {
        i = ((1 + i) | 0);
        if ((i < len)) {
          var index$2 = i;
          var c$1 = replacement.charCodeAt(index$2);
          var str = ("" + $cToS(c$1));
          sb.K = (sb.K + str);
        }
        i = ((1 + i) | 0);
        break;
      }
      default: {
        var str$1 = ("" + $cToS(x1));
        sb.K = (sb.K + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  this.ff = this.eU();
  return this;
});
$p.pK = (function(sb) {
  var this$1 = this.ev;
  var beginIndex = this.ff;
  var str = this$1.substring(beginIndex);
  sb.K = (("" + sb.K) + str);
  this.ff = this.ev.length;
  return sb;
});
$p.dI = (function() {
  return ((($p_ju_regex_Matcher__ensureLastMatch__O(this).index | 0) + this.gN) | 0);
});
$p.eU = (function() {
  return ((this.dI() + this.or().length) | 0);
});
$p.or = (function() {
  return $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
});
$p.f4 = (function(group) {
  return $p_ju_regex_Matcher__startInternal__I__I(this, this.cM.kC(group));
});
$p.gk = (function(group) {
  return $p_ju_regex_Matcher__endInternal__I__I(this, this.cM.kC(group));
});
$p.qF = (function(group) {
  var x = $p_ju_regex_Matcher__ensureLastMatch__O(this)[this.cM.kC(group)];
  return ((x !== (void 0)) ? x : null);
});
var $d_ju_regex_Matcher = new $TypeData().i($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
  cZ: 1,
  cY: 1
}));
function $p_ju_regex_Pattern__indicesBuilder$lzycompute__ju_regex_IndicesBuilder($thiz) {
  if ((!$thiz.iJ)) {
    $thiz.iL = $m_ju_regex_IndicesBuilder$().pQ($thiz.gP, $thiz.fg);
    $thiz.iJ = true;
  }
  return $thiz.iL;
}
function $p_ju_regex_Pattern__indicesBuilder__ju_regex_IndicesBuilder($thiz) {
  return ((!$thiz.iJ) ? $p_ju_regex_Pattern__indicesBuilder$lzycompute__ju_regex_IndicesBuilder($thiz) : $thiz.iL);
}
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.iL = null;
  this.iI = null;
  this.gP = null;
  this.fg = null;
  this.iM = false;
  this.gO = 0;
  this.la = null;
  this.iK = false;
  this.fh = null;
  this.iN = null;
  this.iJ = false;
  this.iI = _pattern;
  this.gP = jsPattern;
  this.fg = jsFlags;
  this.iM = sticky;
  this.gO = groupCount;
  this.la = groupNumberMap;
  this.iK = false;
  this.fh = new RegExp(jsPattern, (this.fg + (this.iM ? "gy" : "g")));
  this.iN = new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
}
$p = $c_ju_regex_Pattern.prototype = new $h_O();
$p.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
}
$h_ju_regex_Pattern.prototype = $p;
$p.qS = (function(input, start) {
  var regexp = this.fh;
  regexp.lastIndex = start;
  return regexp.exec(input);
});
$p.kC = (function(group) {
  var length = this.gO;
  if (((group >>> 0) > (length >>> 0))) {
    $m_jl_BoundsChecks$().ku(group, length);
  }
  return (this.la[group] | 0);
});
$p.on = (function(lastMatch, forMatches) {
  if ((lastMatch.indices === (void 0))) {
    if ($m_ju_regex_PatternCompiler$().lg) {
      if ((!this.iK)) {
        this.fh = new RegExp(this.gP, ((this.fg + (this.iM ? "gy" : "g")) + "d"));
        this.iN = new RegExp((("^(?:" + this.gP) + ")$"), (this.fg + "d"));
        this.iK = true;
      }
      var regexp = (forMatches ? this.iN : this.fh);
      regexp.lastIndex = (lastMatch.index | 0);
      lastMatch.indices = regexp.exec(lastMatch.input).indices;
    } else {
      lastMatch.indices = $p_ju_regex_Pattern__indicesBuilder__ju_regex_IndicesBuilder(this).pL(forMatches, lastMatch.input, (lastMatch.index | 0));
    }
  }
  return lastMatch.indices;
});
$p.q = (function() {
  return this.iI;
});
var $d_ju_regex_Pattern = new $TypeData().i($c_ju_regex_Pattern, "java.util.regex.Pattern", ({
  d0: 1,
  a: 1
}));
/** @constructor */
function $c_Lorg_loveroo_predef_Predef$$anon$2(newList$3, func$3) {
  this.ln = null;
  this.lm = null;
  this.ln = newList$3;
  this.lm = func$3;
}
$p = $c_Lorg_loveroo_predef_Predef$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_predef_Predef$$anon$2;
/** @constructor */
function $h_Lorg_loveroo_predef_Predef$$anon$2() {
}
$h_Lorg_loveroo_predef_Predef$$anon$2.prototype = $p;
$p.b7 = (function(e) {
  var newList$1 = this.ln;
  var func$1 = this.lm;
  newList$1.w(func$1.n(e));
});
var $d_Lorg_loveroo_predef_Predef$$anon$2 = new $TypeData().i($c_Lorg_loveroo_predef_Predef$$anon$2, "org.loveroo.predef.Predef$$anon$2", ({
  d8: 1,
  r: 1
}));
function $f_Lorg_loveroo_webgl_engine_data_resource_Resource__$init$__V($thiz) {
  $thiz.kD(new $c_ju_LinkedList());
  $thiz.im(false);
  $thiz.kE(new $c_ju_LinkedList());
}
function $f_Lorg_loveroo_webgl_engine_data_resource_Resource__onLoad__F1__jl_Void($thiz, value) {
  return ((!$thiz.il()) ? ($thiz.gr().k5(value), (void 0)) : value.n($thiz));
}
function $f_Lorg_loveroo_webgl_engine_data_resource_Resource__postCreate__jl_Void($thiz) {
  $thiz.im(true);
  $f_jl_Iterable__forEach__ju_function_Consumer__V($thiz.gr(), new $c_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$1($thiz));
  $thiz.gr().dE();
  $f_jl_Iterable__forEach__ju_function_Consumer__V($thiz.gq(), new $c_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$2($thiz));
  $thiz.gq().dE();
}
function $f_Lorg_loveroo_webgl_engine_data_resource_Resource__buffer__F0__jl_Void($thiz, func) {
  return ($thiz.il() ? (func.av(), (void 0)) : ($thiz.gq().w(func), (void 0)));
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$1(outer) {
  this.lq = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.lq = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$1;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$1() {
}
$h_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$1.prototype = $p;
$p.py = (function(_$1) {
  var this$1 = this.lq;
  _$1.n(this$1);
});
$p.b7 = (function(x$0) {
  this.py(x$0);
});
var $d_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$1 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$1, "org.loveroo.webgl.engine.data.resource.Resource$$anon$1", ({
  df: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$2(outer) {
  this.pa = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.pa = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$2;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$2() {
}
$h_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$2.prototype = $p;
$p.px = (function(_$2) {
  _$2.av();
});
$p.b7 = (function(x$0) {
  this.px(x$0);
});
var $d_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$2 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_data_resource_Resource$$anon$2, "org.loveroo.webgl.engine.data.resource.Resource$$anon$2", ({
  dg: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_math_Vec2f(_x, _y) {
  this.aZ = 0.0;
  this.b0 = 0.0;
  this.aZ = _x;
  this.b0 = _y;
}
$p = $c_Lorg_loveroo_webgl_engine_math_Vec2f.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_math_Vec2f;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_math_Vec2f() {
}
$h_Lorg_loveroo_webgl_engine_math_Vec2f.prototype = $p;
$p.q = (function() {
  return $f_Lorg_loveroo_webgl_engine_math_Vec2__toString__T(this);
});
$p.r3 = (function(x, y) {
  this.aZ = Math.fround((this.aZ * x));
  this.b0 = Math.fround((this.b0 * y));
  return this;
});
$p.rv = (function(other) {
  var value = other.aZ;
  this.aZ = value;
  var value$1 = other.b0;
  this.b0 = value$1;
  return this;
});
$p.go = (function() {
  return "Vec2f";
});
$p.gy = (function() {
  return this.aZ;
});
$p.gz = (function() {
  return this.b0;
});
var $d_Lorg_loveroo_webgl_engine_math_Vec2f = new $TypeData().i($c_Lorg_loveroo_webgl_engine_math_Vec2f, "org.loveroo.webgl.engine.math.Vec2f", ({
  ds: 1,
  b1: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_math_Vec2i(_x, _y) {
  this.bW = 0;
  this.bF = 0;
  this.bW = _x;
  this.bF = _y;
}
$p = $c_Lorg_loveroo_webgl_engine_math_Vec2i.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_math_Vec2i;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_math_Vec2i() {
}
$h_Lorg_loveroo_webgl_engine_math_Vec2i.prototype = $p;
$p.q = (function() {
  return $f_Lorg_loveroo_webgl_engine_math_Vec2__toString__T(this);
});
$p.go = (function() {
  return "Vec2i";
});
$p.gy = (function() {
  return this.bW;
});
$p.gz = (function() {
  return this.bF;
});
var $d_Lorg_loveroo_webgl_engine_math_Vec2i = new $TypeData().i($c_Lorg_loveroo_webgl_engine_math_Vec2i, "org.loveroo.webgl.engine.math.Vec2i", ({
  dt: 1,
  b1: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_math_Vec3f(_x, _y, _z) {
  this.ah = 0.0;
  this.X = 0.0;
  this.a6 = 0.0;
  this.ah = _x;
  this.X = _y;
  this.a6 = _z;
}
$p = $c_Lorg_loveroo_webgl_engine_math_Vec3f.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_math_Vec3f;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_math_Vec3f() {
}
$h_Lorg_loveroo_webgl_engine_math_Vec3f.prototype = $p;
$p.q = (function() {
  return $f_Lorg_loveroo_webgl_engine_math_Vec3__toString__T(this);
});
$p.oO = (function(other) {
  var value = other.ah;
  this.ah = value;
  var value$1 = other.X;
  this.X = value$1;
  var value$2 = other.a6;
  this.a6 = value$2;
  return this;
});
$p.go = (function() {
  return "Vec3f";
});
$p.gy = (function() {
  return this.ah;
});
$p.gz = (function() {
  return this.X;
});
$p.p1 = (function() {
  return this.a6;
});
var $d_Lorg_loveroo_webgl_engine_math_Vec3f = new $TypeData().i($c_Lorg_loveroo_webgl_engine_math_Vec3f, "org.loveroo.webgl.engine.math.Vec3f", ({
  du: 1,
  b2: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_math_Vec3i(_x, _y, _z) {
  this.gV = 0;
  this.gW = 0;
  this.gX = 0;
  this.gV = _x;
  this.gW = _y;
  this.gX = _z;
}
$p = $c_Lorg_loveroo_webgl_engine_math_Vec3i.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_math_Vec3i;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_math_Vec3i() {
}
$h_Lorg_loveroo_webgl_engine_math_Vec3i.prototype = $p;
$p.q = (function() {
  return $f_Lorg_loveroo_webgl_engine_math_Vec3__toString__T(this);
});
$p.go = (function() {
  return "Vec3i";
});
$p.gy = (function() {
  return this.gV;
});
$p.gz = (function() {
  return this.gW;
});
$p.p1 = (function() {
  return this.gX;
});
var $d_Lorg_loveroo_webgl_engine_math_Vec3i = new $TypeData().i($c_Lorg_loveroo_webgl_engine_math_Vec3i, "org.loveroo.webgl.engine.math.Vec3i", ({
  dv: 1,
  b2: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_math_collision_BasicAABB(_minX, _minY, _minZ, _maxX, _maxY, _maxZ) {
  this.h1 = 0.0;
  this.h2 = 0.0;
  this.h3 = 0.0;
  this.gY = 0.0;
  this.gZ = 0.0;
  this.h0 = 0.0;
  this.h1 = _minX;
  this.h2 = _minY;
  this.h3 = _minZ;
  this.gY = _maxX;
  this.gZ = _maxY;
  this.h0 = _maxZ;
}
$p = $c_Lorg_loveroo_webgl_engine_math_collision_BasicAABB.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_math_collision_BasicAABB;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_math_collision_BasicAABB() {
}
$h_Lorg_loveroo_webgl_engine_math_collision_BasicAABB.prototype = $p;
$p.d8 = (function() {
  return this.h1;
});
$p.d9 = (function() {
  return this.h2;
});
$p.da = (function() {
  return this.h3;
});
$p.d5 = (function() {
  return this.gY;
});
$p.d6 = (function() {
  return this.gZ;
});
$p.d7 = (function() {
  return this.h0;
});
$p.qo = (function(x, y, z) {
  if ((x > 0.0)) {
    var value = Math.fround((this.gY + x));
    this.gY = value;
  } else {
    var value$1 = Math.fround((this.h1 + x));
    this.h1 = value$1;
  }
  if ((y > 0.0)) {
    var value$2 = Math.fround((this.gZ + y));
    this.gZ = value$2;
  } else {
    var value$3 = Math.fround((this.h2 + y));
    this.h2 = value$3;
  }
  if ((z > 0.0)) {
    var value$4 = Math.fround((this.h0 + z));
    this.h0 = value$4;
  } else {
    var value$5 = Math.fround((this.h3 + z));
    this.h3 = value$5;
  }
  return this;
});
var $d_Lorg_loveroo_webgl_engine_math_collision_BasicAABB = new $TypeData().i($c_Lorg_loveroo_webgl_engine_math_collision_BasicAABB, "org.loveroo.webgl.engine.math.collision.BasicAABB", ({
  dx: 1,
  b3: 1
}));
function $ct_Lorg_loveroo_webgl_engine_math_collision_CenteredAABB__F0__F__F__F__($thiz, center, sizeX, sizeY, sizeZ) {
  $thiz.dP = center;
  $thiz.iV = sizeX;
  $thiz.iW = sizeY;
  $thiz.iX = sizeZ;
  return $thiz;
}
function $ct_Lorg_loveroo_webgl_engine_math_collision_CenteredAABB__F0__F__($thiz, center, size) {
  $ct_Lorg_loveroo_webgl_engine_math_collision_CenteredAABB__F0__F__F__F__($thiz, center, Math.fround((0.5 * size)), Math.fround((0.5 * size)), Math.fround((0.5 * size)));
  return $thiz;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_math_collision_CenteredAABB() {
  this.dP = null;
  this.iV = 0.0;
  this.iW = 0.0;
  this.iX = 0.0;
}
$p = $c_Lorg_loveroo_webgl_engine_math_collision_CenteredAABB.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_math_collision_CenteredAABB;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_math_collision_CenteredAABB() {
}
$h_Lorg_loveroo_webgl_engine_math_collision_CenteredAABB.prototype = $p;
$p.d8 = (function() {
  return Math.fround((this.dP.av().ah - this.iV));
});
$p.d9 = (function() {
  return Math.fround((this.dP.av().X - this.iW));
});
$p.da = (function() {
  return Math.fround((this.dP.av().a6 - this.iX));
});
$p.d5 = (function() {
  return Math.fround((this.dP.av().ah + this.iV));
});
$p.d6 = (function() {
  return Math.fround((this.dP.av().X + this.iW));
});
$p.d7 = (function() {
  return Math.fround((this.dP.av().a6 + this.iX));
});
var $d_Lorg_loveroo_webgl_engine_math_collision_CenteredAABB = new $TypeData().i($c_Lorg_loveroo_webgl_engine_math_collision_CenteredAABB, "org.loveroo.webgl.engine.math.collision.CenteredAABB", ({
  dy: 1,
  b3: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_FloatUniform(value) {
  this.h5 = 0.0;
  this.h5 = value;
}
$p = $c_Lorg_loveroo_webgl_engine_render_FloatUniform.prototype = new $h_Lorg_loveroo_webgl_engine_render_UniformValue();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_FloatUniform;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_FloatUniform() {
}
$h_Lorg_loveroo_webgl_engine_render_FloatUniform.prototype = $p;
$p.E = (function(obj) {
  var any = ((obj instanceof $c_Lorg_loveroo_webgl_engine_render_FloatUniform) ? obj : null);
  var any$1 = ((any === null) ? null : (any.h5 === this.h5));
  return (!(!((any$1 === null) ? false : any$1)));
});
function $isArrayOf_Lorg_loveroo_webgl_engine_render_FloatUniform(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b4)));
}
var $d_Lorg_loveroo_webgl_engine_render_FloatUniform = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_FloatUniform, "org.loveroo.webgl.engine.render.FloatUniform", ({
  b4: 1,
  a6: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_FragmentShaderComponent(id) {
  this.ex = null;
  this.h8 = null;
  $ct_Lorg_loveroo_webgl_engine_render_ShaderComponent__T__T__(this, id, "fsh");
}
$p = $c_Lorg_loveroo_webgl_engine_render_FragmentShaderComponent.prototype = new $h_Lorg_loveroo_webgl_engine_render_ShaderComponent();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_FragmentShaderComponent;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_FragmentShaderComponent() {
}
$h_Lorg_loveroo_webgl_engine_render_FragmentShaderComponent.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_FragmentShaderComponent = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_FragmentShaderComponent, "org.loveroo.webgl.engine.render.FragmentShaderComponent", ({
  dD: 1,
  b7: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$1(i$5, outer) {
  this.lG = null;
  this.lF = null;
  this.lG = i$5;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.lF = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$1;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$1() {
}
$h_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$1.prototype = $p;
$p.gd = (function(id) {
  var this$1 = this.lF;
  var i$1 = this.lG;
  var posX = Math.fround(Math.imul(this$1.cO.bW, ((i$1.R % $checkIntDivisor(this$1.fu)) | 0)));
  var posY = Math.fround(((this$1.db.bF - Math.imul(((i$1.R / $checkIntDivisor(this$1.fu)) | 0), this$1.cO.bF)) | 0));
  var this$11 = this$1.ja;
  var key = id.fl;
  var $x_2 = new $c_Lorg_loveroo_webgl_engine_render_AtlasInfo(Math.fround((posX / Math.fround(this$1.db.bW))), Math.fround((Math.fround((posY - Math.fround(this$1.cO.bF))) / Math.fround(this$1.db.bF))), Math.fround((Math.fround((posX + Math.fround(this$1.cO.bW))) / Math.fround(this$1.db.bW))), Math.fround((posY / Math.fround(this$1.db.bF))));
  if ((key === null)) {
    var $x_1 = 0;
  } else {
    var originalHash = $f_T__hashCode__I(key);
    var $x_1 = (originalHash ^ ((originalHash >>> 16) | 0));
  }
  this$11.bA(key, $x_2, $x_1, false);
  i$1.R = ((1 + i$1.R) | 0);
});
$p.b7 = (function(x$0) {
  this.gd(x$0);
});
var $d_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$1 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$1, "org.loveroo.webgl.engine.render.TextureAtlas$$anon$1", ({
  dO: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$2(textures$7, loaded$4, outer) {
  this.lJ = null;
  this.lI = null;
  this.lH = null;
  this.lJ = textures$7;
  this.lI = loaded$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.lH = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$2;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$2() {
}
$h_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$2.prototype = $p;
$p.gd = (function(id) {
  var this$1 = this.lH;
  var textures$1 = this.lJ;
  var loaded$1 = this.lI;
  var image = new $c_Lorg_loveroo_webgl_engine_render_ImageTexture(((this$1.lE + "/") + id.iY));
  var key = id.fl;
  if ((key === null)) {
    var $x_1 = 0;
  } else {
    var originalHash = $f_T__hashCode__I(key);
    var $x_1 = (originalHash ^ ((originalHash >>> 16) | 0));
  }
  textures$1.bA(key, image, $x_1, false);
  $f_Lorg_loveroo_webgl_engine_data_resource_Resource__onLoad__F1__jl_Void(image, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((i$2) => {
    loaded$1.R = ((1 + loaded$1.R) | 0);
    return ((loaded$1.R >= this$1.ft.l()) ? $f_Lorg_loveroo_webgl_engine_data_resource_Resource__onLoad__F1__jl_Void(this$1.hb, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$3$2) => $p_Lorg_loveroo_webgl_engine_render_TextureAtlas__onTextureLoadComplete__ju_Map__jl_Void(this$1, textures$1)))) : (void 0));
  })));
});
$p.b7 = (function(x$0) {
  this.gd(x$0);
});
var $d_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$2 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$2, "org.loveroo.webgl.engine.render.TextureAtlas$$anon$2", ({
  dP: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$3(textures$8, i$6, outer) {
  this.lM = null;
  this.lL = null;
  this.lK = null;
  this.lM = textures$8;
  this.lL = i$6;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.lK = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$3.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$3;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$3() {
}
$h_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$3.prototype = $p;
$p.gd = (function(id) {
  var this$1 = this.lK;
  var textures$4 = this.lM;
  var i$2 = this.lL;
  var texture = $p_ju_HashMap__getOrDefaultImpl__O__O__O(textures$4, id.fl, null);
  var sprite = new $c_Lorg_loveroo_webgl_engine_render_Sprite(texture, this$1.hb, new $c_Lorg_loveroo_webgl_engine_math_Vec3f(0.0, 0.0, 0.0), new $c_Lorg_loveroo_webgl_engine_math_Vec2f(1.0, 1.0));
  sprite.oD(new $c_Lorg_loveroo_webgl_engine_math_Vec3f(Math.fround(Math.imul(this$1.cO.bW, ((i$2.R % $checkIntDivisor(this$1.fu)) | 0))), Math.fround(((((this$1.db.bF - Math.imul(((i$2.R / $checkIntDivisor(this$1.fu)) | 0), this$1.cO.bF)) | 0) - this$1.cO.bF) | 0)), 1.0));
  texture.pU($m_Lorg_loveroo_webgl_engine_render_data_TextureSlot$().dc);
  sprite.bP(0.0);
  i$2.R = ((1 + i$2.R) | 0);
});
$p.b7 = (function(x$0) {
  this.gd(x$0);
});
var $d_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$3 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$3, "org.loveroo.webgl.engine.render.TextureAtlas$$anon$3", ({
  dQ: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$4(outer) {
  this.pb = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.pb = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$4.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$4;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$4() {
}
$h_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$4.prototype = $p;
$p.pq = (function(_$4, t) {
  t.eT();
});
$p.eR = (function(x$0, x$1) {
  this.pq(x$0, x$1);
});
var $d_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$4 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$4, "org.loveroo.webgl.engine.render.TextureAtlas$$anon$4", ({
  dR: 1,
  a0: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_TextureUniform(slot, texture) {
  this.fv = null;
  this.hc = null;
  this.fv = slot;
  this.hc = texture;
}
$p = $c_Lorg_loveroo_webgl_engine_render_TextureUniform.prototype = new $h_Lorg_loveroo_webgl_engine_render_UniformValue();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_TextureUniform;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_TextureUniform() {
}
$h_Lorg_loveroo_webgl_engine_render_TextureUniform.prototype = $p;
$p.E = (function(obj) {
  var any = ((obj instanceof $c_Lorg_loveroo_webgl_engine_render_TextureUniform) ? obj : null);
  if ((any === null)) {
    var any$1 = null;
  } else {
    var x = any.fv;
    var x$2 = this.fv;
    if (((x === null) ? (x$2 === null) : (x === x$2))) {
      var x$3 = any.hc;
      var x$4 = this.hc;
      var any$1 = ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      var any$1 = false;
    }
  }
  return (!(!((any$1 === null) ? false : any$1)));
});
function $isArrayOf_Lorg_loveroo_webgl_engine_render_TextureUniform(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b9)));
}
var $d_Lorg_loveroo_webgl_engine_render_TextureUniform = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_TextureUniform, "org.loveroo.webgl.engine.render.TextureUniform", ({
  b9: 1,
  a6: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_Uniform2f(x, y) {
  this.hd = 0.0;
  this.he = 0.0;
  this.hd = x;
  this.he = y;
}
$p = $c_Lorg_loveroo_webgl_engine_render_Uniform2f.prototype = new $h_Lorg_loveroo_webgl_engine_render_UniformValue();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_Uniform2f;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_Uniform2f() {
}
$h_Lorg_loveroo_webgl_engine_render_Uniform2f.prototype = $p;
$p.E = (function(obj) {
  var any = ((obj instanceof $c_Lorg_loveroo_webgl_engine_render_Uniform2f) ? obj : null);
  var any$1 = ((any === null) ? null : ((any.hd === this.hd) && (any.he === this.he)));
  return (!(!((any$1 === null) ? false : any$1)));
});
function $isArrayOf_Lorg_loveroo_webgl_engine_render_Uniform2f(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ba)));
}
var $d_Lorg_loveroo_webgl_engine_render_Uniform2f = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_Uniform2f, "org.loveroo.webgl.engine.render.Uniform2f", ({
  ba: 1,
  a6: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_Uniform3f(x, y, z) {
  this.hf = 0.0;
  this.hg = 0.0;
  this.hh = 0.0;
  this.hf = x;
  this.hg = y;
  this.hh = z;
}
$p = $c_Lorg_loveroo_webgl_engine_render_Uniform3f.prototype = new $h_Lorg_loveroo_webgl_engine_render_UniformValue();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_Uniform3f;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_Uniform3f() {
}
$h_Lorg_loveroo_webgl_engine_render_Uniform3f.prototype = $p;
$p.E = (function(obj) {
  var any = ((obj instanceof $c_Lorg_loveroo_webgl_engine_render_Uniform3f) ? obj : null);
  var any$1 = ((any === null) ? null : (((any.hf === this.hf) && (any.hg === this.hg)) && (any.hh === this.hh)));
  return (!(!((any$1 === null) ? false : any$1)));
});
function $isArrayOf_Lorg_loveroo_webgl_engine_render_Uniform3f(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bb)));
}
var $d_Lorg_loveroo_webgl_engine_render_Uniform3f = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_Uniform3f, "org.loveroo.webgl.engine.render.Uniform3f", ({
  bb: 1,
  a6: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_Uniform4f(x, y, z, w) {
  this.hj = 0.0;
  this.hk = 0.0;
  this.hl = 0.0;
  this.hi = 0.0;
  this.hj = x;
  this.hk = y;
  this.hl = z;
  this.hi = w;
}
$p = $c_Lorg_loveroo_webgl_engine_render_Uniform4f.prototype = new $h_Lorg_loveroo_webgl_engine_render_UniformValue();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_Uniform4f;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_Uniform4f() {
}
$h_Lorg_loveroo_webgl_engine_render_Uniform4f.prototype = $p;
$p.E = (function(obj) {
  var any = ((obj instanceof $c_Lorg_loveroo_webgl_engine_render_Uniform4f) ? obj : null);
  var any$1 = ((any === null) ? null : ((((any.hj === this.hj) && (any.hk === this.hk)) && (any.hl === this.hl)) && (any.hi === this.hi)));
  return (!(!((any$1 === null) ? false : any$1)));
});
function $isArrayOf_Lorg_loveroo_webgl_engine_render_Uniform4f(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bc)));
}
var $d_Lorg_loveroo_webgl_engine_render_Uniform4f = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_Uniform4f, "org.loveroo.webgl.engine.render.Uniform4f", ({
  bc: 1,
  a6: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_VertexShaderComponent(id) {
  this.ex = null;
  this.h8 = null;
  $ct_Lorg_loveroo_webgl_engine_render_ShaderComponent__T__T__(this, id, "vsh");
}
$p = $c_Lorg_loveroo_webgl_engine_render_VertexShaderComponent.prototype = new $h_Lorg_loveroo_webgl_engine_render_ShaderComponent();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_VertexShaderComponent;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_VertexShaderComponent() {
}
$h_Lorg_loveroo_webgl_engine_render_VertexShaderComponent.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_VertexShaderComponent = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_VertexShaderComponent, "org.loveroo.webgl.engine.render.VertexShaderComponent", ({
  dS: 1,
  b7: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$1(_size$3, outer) {
  this.lQ = null;
  this.pc = null;
  this.lQ = _size$3;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.pc = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$1;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$1() {
}
$h_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$1.prototype = $p;
$p.ge = (function(t) {
  var _size$1 = this.lQ;
  _size$1.R = ((_size$1.R + t.eC.jf) | 0);
});
$p.b7 = (function(x$0) {
  this.ge(x$0);
});
var $d_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$1 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$1, "org.loveroo.webgl.engine.render.batch.BatchDescriptor$$anon$1", ({
  dV: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$2(_count$3, outer) {
  this.lR = null;
  this.pd = null;
  this.lR = _count$3;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.pd = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$2;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$2() {
}
$h_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$2.prototype = $p;
$p.ge = (function(t) {
  var _count$1 = this.lR;
  _count$1.R = ((_count$1.R + t.eC.je) | 0);
});
$p.b7 = (function(x$0) {
  this.ge(x$0);
});
var $d_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$2 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor$$anon$2, "org.loveroo.webgl.engine.render.batch.BatchDescriptor$$anon$2", ({
  dW: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_batch_FloatElementData(value) {
  this.lV = 0.0;
  this.lV = value;
}
$p = $c_Lorg_loveroo_webgl_engine_render_batch_FloatElementData.prototype = new $h_Lorg_loveroo_webgl_engine_render_batch_ElementData();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_batch_FloatElementData;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_batch_FloatElementData() {
}
$h_Lorg_loveroo_webgl_engine_render_batch_FloatElementData.prototype = $p;
function $isArrayOf_Lorg_loveroo_webgl_engine_render_batch_FloatElementData(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bf)));
}
var $d_Lorg_loveroo_webgl_engine_render_batch_FloatElementData = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_batch_FloatElementData, "org.loveroo.webgl.engine.render.batch.FloatElementData", ({
  bf: 1,
  ad: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_batch_Vec2ElementData(x, y) {
  this.lW = 0.0;
  this.lX = 0.0;
  this.lW = x;
  this.lX = y;
}
$p = $c_Lorg_loveroo_webgl_engine_render_batch_Vec2ElementData.prototype = new $h_Lorg_loveroo_webgl_engine_render_batch_ElementData();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_batch_Vec2ElementData;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_batch_Vec2ElementData() {
}
$h_Lorg_loveroo_webgl_engine_render_batch_Vec2ElementData.prototype = $p;
function $isArrayOf_Lorg_loveroo_webgl_engine_render_batch_Vec2ElementData(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bg)));
}
var $d_Lorg_loveroo_webgl_engine_render_batch_Vec2ElementData = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_batch_Vec2ElementData, "org.loveroo.webgl.engine.render.batch.Vec2ElementData", ({
  bg: 1,
  ad: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_batch_Vec3ElementData(x, y, z) {
  this.lY = 0.0;
  this.lZ = 0.0;
  this.m0 = 0.0;
  this.lY = x;
  this.lZ = y;
  this.m0 = z;
}
$p = $c_Lorg_loveroo_webgl_engine_render_batch_Vec3ElementData.prototype = new $h_Lorg_loveroo_webgl_engine_render_batch_ElementData();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_batch_Vec3ElementData;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_batch_Vec3ElementData() {
}
$h_Lorg_loveroo_webgl_engine_render_batch_Vec3ElementData.prototype = $p;
function $isArrayOf_Lorg_loveroo_webgl_engine_render_batch_Vec3ElementData(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bh)));
}
var $d_Lorg_loveroo_webgl_engine_render_batch_Vec3ElementData = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_batch_Vec3ElementData, "org.loveroo.webgl.engine.render.batch.Vec3ElementData", ({
  bh: 1,
  ad: 1
}));
function $isArrayOf_Lorg_loveroo_webgl_engine_render_batch_Vec4ElementData(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bi)));
}
var $d_Lorg_loveroo_webgl_engine_render_batch_Vec4ElementData = new $TypeData().i(0, "org.loveroo.webgl.engine.render.batch.Vec4ElementData", ({
  bi: 1,
  ad: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_BindRenderBufferCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_BindRenderBufferCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_BindRenderBufferCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_BindRenderBufferCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_BindRenderBufferCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.k8(data.s(0));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_BindRenderBufferCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_BindRenderBufferCommand, "org.loveroo.webgl.engine.render.frame.command.BindRenderBufferCommand", ({
  ea: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_BindShaderCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_BindShaderCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_BindShaderCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_BindShaderCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_BindShaderCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.k9(data.s(0));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_BindShaderCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_BindShaderCommand, "org.loveroo.webgl.engine.render.frame.command.BindShaderCommand", ({
  eb: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_BindTextureCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_BindTextureCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_BindTextureCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_BindTextureCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_BindTextureCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.ka(data.s(0), data.s(1));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_BindTextureCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_BindTextureCommand, "org.loveroo.webgl.engine.render.frame.command.BindTextureCommand", ({
  ec: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_ClearRenderBufferCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_ClearRenderBufferCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_ClearRenderBufferCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_ClearRenderBufferCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_ClearRenderBufferCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.pY(data.s(0));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_ClearRenderBufferCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_ClearRenderBufferCommand, "org.loveroo.webgl.engine.render.frame.command.ClearRenderBufferCommand", ({
  ed: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateBatchCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateBatchCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateBatchCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_CreateBatchCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_CreateBatchCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.q7(data.s(0));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_CreateBatchCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_CreateBatchCommand, "org.loveroo.webgl.engine.render.frame.command.CreateBatchCommand", ({
  ef: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateRenderBufferCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateRenderBufferCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateRenderBufferCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_CreateRenderBufferCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_CreateRenderBufferCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.q8(data.s(0));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_CreateRenderBufferCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_CreateRenderBufferCommand, "org.loveroo.webgl.engine.render.frame.command.CreateRenderBufferCommand", ({
  eg: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateShaderCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateShaderCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateShaderCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_CreateShaderCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_CreateShaderCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.q9(data.s(0));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_CreateShaderCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_CreateShaderCommand, "org.loveroo.webgl.engine.render.frame.command.CreateShaderCommand", ({
  eh: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateTextureCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateTextureCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_CreateTextureCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_CreateTextureCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_CreateTextureCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.qa(data.s(0));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_CreateTextureCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_CreateTextureCommand, "org.loveroo.webgl.engine.render.frame.command.CreateTextureCommand", ({
  ei: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_DepthTestCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_DepthTestCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_DepthTestCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_DepthTestCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_DepthTestCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return ((!(!data.s(0))) ? renderer.i6() : renderer.i5());
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_DepthTestCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_DepthTestCommand, "org.loveroo.webgl.engine.render.frame.command.DepthTestCommand", ({
  ej: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyRenderBufferCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyRenderBufferCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyRenderBufferCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_DestroyRenderBufferCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_DestroyRenderBufferCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.qb(data.s(0));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_DestroyRenderBufferCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyRenderBufferCommand, "org.loveroo.webgl.engine.render.frame.command.DestroyRenderBufferCommand", ({
  ek: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyShaderCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyShaderCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyShaderCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_DestroyShaderCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_DestroyShaderCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.qc(data.s(0));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_DestroyShaderCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyShaderCommand, "org.loveroo.webgl.engine.render.frame.command.DestroyShaderCommand", ({
  el: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyTextureCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyTextureCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyTextureCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_DestroyTextureCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_DestroyTextureCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.qd(data.s(0));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_DestroyTextureCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_DestroyTextureCommand, "org.loveroo.webgl.engine.render.frame.command.DestroyTextureCommand", ({
  em: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_PutBatchCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_PutBatchCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_PutBatchCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_PutBatchCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_PutBatchCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.ri(data.s(0), data.s(1));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_PutBatchCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_PutBatchCommand, "org.loveroo.webgl.engine.render.frame.command.PutBatchCommand", ({
  eo: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_RenderBatchCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_RenderBatchCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_RenderBatchCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_RenderBatchCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_RenderBatchCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.rp(data.s(0));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_RenderBatchCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_RenderBatchCommand, "org.loveroo.webgl.engine.render.frame.command.RenderBatchCommand", ({
  ep: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.iq(data.s(0), data.s(1), data.s(2));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformCommand, "org.loveroo.webgl.engine.render.frame.command.SetShaderUniformCommand", ({
  eq: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformGlobalCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformGlobalCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformGlobalCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformGlobalCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformGlobalCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.rw(data.s(0), data.s(1));
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformGlobalCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_SetShaderUniformGlobalCommand, "org.loveroo.webgl.engine.render.frame.command.SetShaderUniformGlobalCommand", ({
  er: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_frame_command_UnbindRenderBufferCommand() {
}
$p = $c_Lorg_loveroo_webgl_engine_render_frame_command_UnbindRenderBufferCommand.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_frame_command_UnbindRenderBufferCommand;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_frame_command_UnbindRenderBufferCommand() {
}
$h_Lorg_loveroo_webgl_engine_render_frame_command_UnbindRenderBufferCommand.prototype = $p;
$p.b8 = (function(data, renderer) {
  return renderer.ir();
});
var $d_Lorg_loveroo_webgl_engine_render_frame_command_UnbindRenderBufferCommand = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_frame_command_UnbindRenderBufferCommand, "org.loveroo.webgl.engine.render.frame.command.UnbindRenderBufferCommand", ({
  es: 1,
  s: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_impl_WebGLColorFormats() {
  this.dT = null;
  this.mp = null;
  this.dT = new $c_Lorg_loveroo_webgl_engine_render_data_ColorFormat(6408, 5121, 6408);
  this.mp = new $c_Lorg_loveroo_webgl_engine_render_data_ColorFormat(6402, 5123, 6402);
}
$p = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLColorFormats.prototype = new $h_Lorg_loveroo_webgl_engine_render_data_ColorFormats();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLColorFormats;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_impl_WebGLColorFormats() {
}
$h_Lorg_loveroo_webgl_engine_render_impl_WebGLColorFormats.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_impl_WebGLColorFormats = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_WebGLColorFormats, "org.loveroo.webgl.engine.render.impl.WebGLColorFormats", ({
  ev: 1,
  e3: 1
}));
function $p_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer__enableExtension__Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier__O($thiz, obj) {
  var id = obj.eH;
  var ext = $thiz.k.getExtension(id);
  if ((ext !== null)) {
    $f_Lorg_loveroo_webgl_engine_runtime_EngineRuntime__debugLog__T__jl_Void($m_Lorg_loveroo_webgl_Game$().y.x, ("Loaded WebGL extension: " + id));
    return ext;
  } else {
    throw new $c_Lorg_loveroo_webgl_engine_render_impl_ExtensionNotAvailableException(id);
  }
}
function $p_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer__putBuff__Lorg_loveroo_webgl_engine_data_BufferWrapper__ju_List__jl_Void($thiz, buff, data) {
  $f_jl_Iterable__forEach__ju_function_Consumer__V(data, new $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$8(buff, $thiz));
}
function $p_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer__compileShader$1__Lorg_loveroo_webgl_engine_render_Shader__T__I__T__Lorg_scalajs_dom_WebGLShader($thiz, shader$1, source, shaderType, code) {
  var ptr = $thiz.k.createShader(shaderType);
  $thiz.k.shaderSource(ptr, code);
  $thiz.k.compileShader(ptr);
  if ($m_sr_BoxesRunTime$().i($thiz.k.getShaderParameter(ptr, 35713), $m_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$().jt)) {
    throw new $c_Lorg_loveroo_webgl_engine_render_ShaderCompilationFailureException(shader$1.bq, source, $thiz.k.getShaderInfoLog(ptr), code);
  }
  return ptr;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer(gl) {
  this.k = null;
  this.ms = null;
  this.mr = null;
  this.fC = null;
  this.js = null;
  this.hs = 0.0;
  this.fA = 0;
  this.jp = 0;
  this.fB = false;
  this.dd = null;
  this.cP = null;
  this.fz = null;
  this.eF = null;
  this.jr = null;
  this.hp = null;
  this.eE = null;
  this.jq = 0;
  this.hr = 0;
  this.hq = 0;
  this.k = gl;
  this.ms = new $c_Lorg_loveroo_webgl_engine_render_impl_WebGLTextureTypes();
  this.mr = new $c_Lorg_loveroo_webgl_engine_render_impl_WebGLColorFormats();
  $m_Lorg_loveroo_webgl_engine_render_Renderer$().qN(this, (gl.drawingBufferWidth | 0), (gl.drawingBufferHeight | 0));
  $p_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer__enableExtension__Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier__O(this, $m_Lorg_scalajs_dom_webgl_WEBGL\uff3fdepth\uff3ftexture$());
  $p_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer__enableExtension__Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier__O(this, $m_Lorg_scalajs_dom_webgl_OES\uff3felement\uff3findex\uff3fuint$());
  this.fC = $p_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer__enableExtension__Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier__O(this, $m_Lorg_scalajs_dom_webgl_OES\uff3fvertex\uff3farray\uff3fobject$());
  this.js = $p_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer__enableExtension__Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier__O(this, $m_Lorg_scalajs_dom_webgl_ANGLE\uff3finstanced\uff3farrays$());
  this.hs = 0.0;
  this.fA = 0;
  this.jp = 0;
  this.fB = false;
  this.dd = $ct_ju_HashMap__(new $c_ju_HashMap());
  this.cP = $ct_ju_HashMap__(new $c_ju_HashMap());
  this.fz = $ct_ju_HashMap__(new $c_ju_HashMap());
  this.eF = $ct_ju_HashMap__(new $c_ju_HashMap());
  this.jr = $ct_ju_HashMap__(new $c_ju_HashMap());
  this.hp = null;
  this.eE = "";
  this.jq = (-1);
  this.hr = 0;
  this.hq = 0;
  gl.clearColor(0.0, 0.0, 0.0, 0.0);
  gl.clearDepth(1.0);
  gl.depthFunc(513);
  this.i6();
}
$p = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer() {
}
$h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer.prototype = $p;
$p.bP = (function(delta) {
  this.k.clear(16640);
  var frame = $m_Lorg_loveroo_webgl_Game$().y.x.ay;
  $f_Lorg_loveroo_webgl_engine_runtime_EngineRuntime__newFrame__jl_Void($m_Lorg_loveroo_webgl_Game$().y.x);
  frame.rq(this);
  this.fA = ((1 + this.fA) | 0);
  while (((delta - this.hs) >= 1000.0)) {
    this.hs = (this.hs + 1000.0);
    this.jp = this.fA;
    this.fA = 0;
    $f_Lorg_loveroo_webgl_engine_runtime_EngineRuntime__debugLog__T__jl_Void($m_Lorg_loveroo_webgl_Game$().y.x, ("FPS: " + this.jp));
  }
});
$p.i6 = (function() {
  if ((!this.fB)) {
    this.k.enable(2929);
    this.fB = true;
    return (void 0);
  } else {
    return (void 0);
  }
});
$p.i5 = (function() {
  if (this.fB) {
    this.k.disable(2929);
    this.fB = false;
    return (void 0);
  } else {
    return (void 0);
  }
});
$p.qa = (function(texture) {
  if (this.dd.d4(texture.ak)) {
    return (void 0);
  }
  var ptr = this.k.createTexture();
  var this$1 = this.dd;
  var key = texture.ak;
  if ((key === null)) {
    var $x_1 = 0;
  } else {
    var originalHash = $f_T__hashCode__I(key);
    var $x_1 = (originalHash ^ ((originalHash >>> 16) | 0));
  }
  this$1.bA(key, ptr, $x_1, false);
  this.ka($m_Lorg_loveroo_webgl_engine_render_data_TextureSlot$().dc, texture);
  this.k.texParameteri(texture.br.cu, 10241, 9728);
  this.k.texParameteri(texture.br.cu, 10240, 9728);
  this.k.texParameteri(texture.br.cu, 10242, 33071);
  this.k.texParameteri(texture.br.cu, 10243, 33071);
  matchResult1: {
    if ((texture instanceof $c_Lorg_loveroo_webgl_engine_render_ImageTexture)) {
      this.k.pixelStorei(37440, 1);
      this.k.texImage2D(texture.br.cu, 0, texture.ci.jk, texture.ci.jj, texture.ci.ji, texture.fo);
      break matchResult1;
    }
    if ((texture instanceof $c_Lorg_loveroo_webgl_engine_render_EmptyTexture)) {
      this.k.texImage2D(texture.br.cu, 0, texture.ci.jk, texture.kP(), texture.kr(), 0, texture.ci.jj, texture.ci.ji, null);
      break matchResult1;
    }
    throw new $c_s_MatchError(texture);
  }
});
$p.pz = (function(slot) {
  var id = ((33984 + slot.jl) | 0);
  if ((this.jq !== id)) {
    this.k.activeTexture(id);
    this.jq = id;
    return (void 0);
  } else {
    return (void 0);
  }
});
$p.ka = (function(slot, texture) {
  var ptr = $p_ju_HashMap__getOrDefaultImpl__O__O__O(this.dd, texture.ak, null);
  if (((ptr === null) || $m_sr_BoxesRunTime$().i($p_ju_HashMap__getOrDefaultImpl__O__O__O(this.jr, slot, null), ptr))) {
    return (void 0);
  }
  var $x_2 = this.jr;
  if ((slot === null)) {
    var $x_1 = 0;
  } else {
    var originalHash = $systemIdentityHashCode(slot);
    var $x_1 = (originalHash ^ ((originalHash >>> 16) | 0));
  }
  $x_2.bA(slot, ptr, $x_1, false);
  this.pz(slot);
  this.k.bindTexture(texture.br.cu, ptr);
});
$p.qd = (function(texture) {
  var ptr = $p_ju_HashMap__getOrDefaultImpl__O__O__O(this.dd, texture.ak, null);
  if ((ptr === null)) {
    return (void 0);
  }
  this.k.deleteTexture(ptr);
  this.dd.kH(texture.ak);
});
$p.q9 = (function(shader) {
  if (this.cP.d4(shader.bq)) {
    return (void 0);
  }
  var ptrs = $ct_ju_ArrayList__I__(new $c_ju_ArrayList(), 2);
  var any = shader.j6;
  if ((any !== null)) {
    ptrs.w($p_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer__compileShader$1__Lorg_loveroo_webgl_engine_render_Shader__T__I__T__Lorg_scalajs_dom_WebGLShader(this, shader, "vert", 35633, any));
  }
  var any$1 = shader.j5;
  if ((any$1 !== null)) {
    ptrs.w($p_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer__compileShader$1__Lorg_loveroo_webgl_engine_render_Shader__T__I__T__Lorg_scalajs_dom_WebGLShader(this, shader, "frag", 35632, any$1));
  }
  var programPtr = this.k.createProgram();
  $f_jl_Iterable__forEach__ju_function_Consumer__V(ptrs, new $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$1(programPtr, this));
  this.k.linkProgram(programPtr);
  if ($m_sr_BoxesRunTime$().i(this.k.getProgramParameter(programPtr, 35714), $m_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$().jt)) {
    throw new $c_Lorg_loveroo_webgl_engine_render_ShaderLinkFailureException(shader.bq, this.k.getProgramInfoLog(programPtr));
  }
  $f_jl_Iterable__forEach__ju_function_Consumer__V(ptrs, new $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$2(this));
  var this$3 = this.cP;
  var key = shader.bq;
  var $x_2 = new $c_Lorg_loveroo_webgl_engine_render_impl_WebGLCompiledShader(shader, programPtr);
  if ((key === null)) {
    var $x_1 = 0;
  } else {
    var originalHash = key.A();
    var $x_1 = (originalHash ^ ((originalHash >>> 16) | 0));
  }
  this$3.bA(key, $x_2, $x_1, false);
});
$p.qc = (function(shader) {
  var ptr = $p_ju_HashMap__getOrDefaultImpl__O__O__O(this.cP, shader.bq, null);
  return ((ptr !== null) ? (this.k.deleteProgram(ptr.fy), this.cP.kH(shader.bq), (void 0)) : (void 0));
});
$p.k9 = (function(shader) {
  var x = this.hp;
  var x$2 = shader.bq;
  if (((x === null) ? (x$2 === null) : (x === x$2))) {
    return (void 0);
  }
  var obj = $p_ju_HashMap__getOrDefaultImpl__O__O__O(this.cP, shader.bq, null);
  if ((obj === null)) {
    return (void 0);
  }
  this.hp = shader.bq;
  this.k.useProgram(obj.fy);
  obj.jn.eW(new $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$3(this));
  obj.ho.eW(new $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$4(shader, this));
  obj.ho.dE();
  return this.iq(shader, "frameSize", new $c_Lorg_loveroo_webgl_engine_render_Uniform2f(Math.fround(this.hr), Math.fround(this.hq)));
});
$p.iq = (function(shader, id, value) {
  var obj = $p_ju_HashMap__getOrDefaultImpl__O__O__O(this.cP, shader.bq, null);
  if ((obj === null)) {
    return (void 0);
  }
  if ((obj.eD.d4(id) && ($p_ju_HashMap__getOrDefaultImpl__O__O__O(obj.eD, id, null) === null))) {
    return (void 0);
  }
  var any = $p_ju_HashMap__getOrDefaultImpl__O__O__O(obj.jo, id, null);
  var any$1 = ((any === null) ? null : ((any === null) ? (value === null) : any.E(value)));
  if ((!(!((any$1 === null) ? false : any$1)))) {
    return (void 0);
  }
  var any$2 = $p_ju_HashMap__getOrDefaultImpl__O__O__O(obj.eD, id, null);
  var loc = ((any$2 === null) ? (this.k9(shader), this.k.getUniformLocation(obj.fy, id)) : any$2);
  if ((loc === null)) {
    $f_Lorg_loveroo_webgl_engine_runtime_EngineRuntime__debugLog__T__jl_Void($m_Lorg_loveroo_webgl_Game$().y.x, ((("Uniform " + id) + " not found in ") + shader.bq));
  }
  if ((!obj.eD.d4(id))) {
    var $x_2 = obj.eD;
    if ((id === null)) {
      var $x_1 = 0;
    } else {
      var originalHash = $f_T__hashCode__I(id);
      var $x_1 = (originalHash ^ ((originalHash >>> 16) | 0));
    }
    $x_2.bA(id, loc, $x_1, false);
  }
  if ((loc === null)) {
    return (void 0);
  }
  var x = this.hp;
  var x$2 = shader.bq;
  if ((!((x === null) ? (x$2 === null) : (x === x$2)))) {
    var $x_4 = obj.ho;
    if ((id === null)) {
      var $x_3 = 0;
    } else {
      var originalHash$1 = $f_T__hashCode__I(id);
      var $x_3 = (originalHash$1 ^ ((originalHash$1 >>> 16) | 0));
    }
    $x_4.bA(id, value, $x_3, false);
    return (void 0);
  }
  var $x_6 = obj.jo;
  if ((id === null)) {
    var $x_5 = 0;
  } else {
    var originalHash$2 = $f_T__hashCode__I(id);
    var $x_5 = (originalHash$2 ^ ((originalHash$2 >>> 16) | 0));
  }
  $x_6.bA(id, value, $x_5, false);
  if ((value instanceof $c_Lorg_loveroo_webgl_engine_render_FloatUniform)) {
    this.k.uniform1f(loc, value.h5);
  } else if ((value instanceof $c_Lorg_loveroo_webgl_engine_render_Uniform2f)) {
    this.k.uniform2f(loc, value.hd, value.he);
  } else if ((value instanceof $c_Lorg_loveroo_webgl_engine_render_Uniform3f)) {
    this.k.uniform3f(loc, value.hf, value.hg, value.hh);
  } else if ((value instanceof $c_Lorg_loveroo_webgl_engine_render_Uniform4f)) {
    this.k.uniform4f(loc, value.hj, value.hk, value.hl, value.hi);
  } else if ((value instanceof $c_Lorg_loveroo_webgl_engine_render_TextureUniform)) {
    var this$26 = obj.jn;
    var key$1 = value.fv;
    var $x_8 = value.hc;
    if ((key$1 === null)) {
      var $x_7 = 0;
    } else {
      var originalHash$3 = $systemIdentityHashCode(key$1);
      var $x_7 = (originalHash$3 ^ ((originalHash$3 >>> 16) | 0));
    }
    this$26.bA(key$1, $x_8, $x_7, false);
    this.k.uniform1i(loc, value.fv.jl);
  }
});
$p.rw = (function(id, value) {
  this.cP.eW(new $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$5(id, value, this));
});
$p.q7 = (function(batch) {
  if (this.fz.d4(batch.dS)) {
    return (void 0);
  }
  var shaderPtr = $p_ju_HashMap__getOrDefaultImpl__O__O__O(this.cP, batch.b1.bq, null);
  if ((shaderPtr === null)) {
    return (void 0);
  }
  var vao = this.fC.createVertexArrayOES();
  this.fC.bindVertexArrayOES(vao);
  var vbo = this.k.createBuffer();
  var tbo = this.k.createBuffer();
  var ebo = this.k.createBuffer();
  var this$2 = this.fz;
  var key$1 = batch.dS;
  var $x_2 = new $c_Lorg_loveroo_webgl_engine_render_impl_WebGLBatch(vao, vbo, ebo, tbo);
  if ((key$1 === null)) {
    var $x_1 = 0;
  } else {
    var originalHash = $f_T__hashCode__I(key$1);
    var $x_1 = (originalHash ^ ((originalHash >>> 16) | 0));
  }
  this$2.bA(key$1, $x_2, $x_1, false);
  var indices = new $c_Lorg_loveroo_webgl_engine_data_BufferWrapper(new Uint8Array(6));
  indices.ag(0);
  indices.ag(1);
  indices.ag(2);
  indices.ag(1);
  indices.ag(2);
  indices.ag(3);
  this.k.bindBuffer(34963, ebo);
  this.k.bufferData(34963, indices.fk, 35044);
  var vertices = new $c_Lorg_loveroo_webgl_engine_data_BufferWrapper(new Float32Array(8));
  vertices.ag(0.0);
  vertices.ag(0.0);
  vertices.ag(1.0);
  vertices.ag(0.0);
  vertices.ag(0.0);
  vertices.ag(1.0);
  vertices.ag(1.0);
  vertices.ag(1.0);
  this.k.bindBuffer(34962, vbo);
  this.k.bufferData(34962, vertices.fk, 35048);
  this.k9(batch.b1);
  this.k.enableVertexAttribArray(0);
  this.k.vertexAttribPointer(0, 2, 5126, false, 8, 0);
  this.k.bindBuffer(34962, tbo);
  var offset = new $c_sr_IntRef(0);
  $f_jl_Iterable__forEach__ju_function_Consumer__V(batch.fw.lP, new $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$6(shaderPtr, batch, offset, this));
  this.fC.bindVertexArrayOES(null);
});
$p.ri = (function(batch, elements) {
  var ptr = $p_ju_HashMap__getOrDefaultImpl__O__O__O(this.fz, batch.dS, null);
  if ((ptr === null)) {
    return (void 0);
  }
  var buffer = new $c_Lorg_loveroo_webgl_engine_data_BufferWrapper(new Float32Array(Math.imul(elements.l(), batch.fw.lN)));
  $f_jl_Iterable__forEach__ju_function_Consumer__V(elements, new $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$7(buffer, this));
  this.k.bindBuffer(34962, ptr.mn);
  this.k.bufferData(34962, buffer.fk, 35048);
});
$p.rp = (function(batch) {
  var ptr = $p_ju_HashMap__getOrDefaultImpl__O__O__O(this.fz, batch.dS, null);
  if ((ptr === null)) {
    return (void 0);
  }
  this.fC.bindVertexArrayOES(ptr.mo);
  this.js.drawElementsInstancedANGLE(4, 6, 5121, 0, batch.od());
});
$p.q8 = (function(buffer) {
  if (this.eF.d4(buffer.ak)) {
    return (void 0);
  }
  var ptr = this.k.createFramebuffer();
  var this$1 = this.eF;
  var key = buffer.ak;
  if ((key === null)) {
    var $x_1 = 0;
  } else {
    var originalHash = $f_T__hashCode__I(key);
    var $x_1 = (originalHash ^ ((originalHash >>> 16) | 0));
  }
  this$1.bA(key, ptr, $x_1, false);
  this.k8(buffer);
  this.k.framebufferTexture2D(36160, 36064, buffer.br.cu, $p_ju_HashMap__getOrDefaultImpl__O__O__O(this.dd, buffer.ak, null), 0);
  this.k.framebufferTexture2D(36160, 36096, buffer.fp.br.cu, $p_ju_HashMap__getOrDefaultImpl__O__O__O(this.dd, buffer.fp.ak, null), 0);
  if (((this.k.checkFramebufferStatus(36160) | 0) !== 36053)) {
    throw new $c_Lorg_loveroo_webgl_engine_render_RenderBufferCreateException(buffer.ak);
  } else {
    return (void 0);
  }
});
$p.qb = (function(buffer) {
  var ptr = $p_ju_HashMap__getOrDefaultImpl__O__O__O(this.eF, buffer.ak, null);
  if ((ptr === null)) {
    return (void 0);
  }
  if ((this.eE === buffer.ak)) {
    this.ir();
  }
  this.k.deleteFramebuffer(ptr);
  this.eF.kH(buffer.ak);
});
$p.k8 = (function(buffer) {
  if ((this.eE === buffer.ak)) {
    return (void 0);
  }
  var ptr = $p_ju_HashMap__getOrDefaultImpl__O__O__O(this.eF, buffer.ak, null);
  if ((ptr === null)) {
    return (void 0);
  }
  this.k.bindFramebuffer(36160, ptr);
  this.oP(buffer.dR, buffer.dQ);
  this.eE = buffer.ak;
});
$p.ir = (function() {
  if ((!(this.eE === ""))) {
    this.eE = "";
    this.k.bindFramebuffer(36160, null);
    return this.oP($m_Lorg_loveroo_webgl_engine_render_Renderer$().j4, $m_Lorg_loveroo_webgl_engine_render_Renderer$().j3);
  } else {
    return (void 0);
  }
});
$p.pY = (function(buffer) {
  this.k8(buffer);
  this.k.clear(16640);
});
$p.oP = (function(width, height) {
  if (((width !== this.hr) || (height !== this.hq))) {
    this.hr = width;
    this.hq = height;
    this.k.viewport(0.0, 0.0, width, height);
    return (void 0);
  } else {
    return (void 0);
  }
});
var $d_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer, "org.loveroo.webgl.engine.render.impl.WebGLRenderer", ({
  ex: 1,
  dF: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$1(programPtr$3, outer) {
  this.mu = null;
  this.mt = null;
  this.mu = programPtr$3;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mt = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$1;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$1() {
}
$h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$1.prototype = $p;
$p.k4 = (function(p) {
  var this$1 = this.mt;
  var programPtr$1 = this.mu;
  this$1.k.attachShader(programPtr$1, p);
});
$p.b7 = (function(x$0) {
  this.k4(x$0);
});
var $d_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$1 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$1, "org.loveroo.webgl.engine.render.impl.WebGLRenderer$$anon$1", ({
  ez: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$2(outer) {
  this.mv = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mv = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$2;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$2() {
}
$h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$2.prototype = $p;
$p.k4 = (function(shader) {
  var this$1 = this.mv;
  this$1.k.deleteShader(shader);
});
$p.b7 = (function(x$0) {
  this.k4(x$0);
});
var $d_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$2 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$2, "org.loveroo.webgl.engine.render.impl.WebGLRenderer$$anon$2", ({
  eA: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$3(outer) {
  this.mw = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mw = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$3.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$3;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$3() {
}
$h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$3.prototype = $p;
$p.pv = (function(s, t) {
  this.mw.ka(s, t);
});
$p.eR = (function(x$0, x$1) {
  this.pv(x$0, x$1);
});
var $d_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$3 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$3, "org.loveroo.webgl.engine.render.impl.WebGLRenderer$$anon$3", ({
  eB: 1,
  a0: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$4(shader$7, outer) {
  this.my = null;
  this.mx = null;
  this.my = shader$7;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mx = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$4.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$4;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$4() {
}
$h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$4.prototype = $p;
$p.pr = (function(id, v) {
  this.mx.iq(this.my, id, v);
});
$p.eR = (function(x$0, x$1) {
  this.pr(x$0, x$1);
});
var $d_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$4 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$4, "org.loveroo.webgl.engine.render.impl.WebGLRenderer$$anon$4", ({
  eC: 1,
  a0: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$5(id$4, value$4, outer) {
  this.mA = null;
  this.mB = null;
  this.mz = null;
  this.mA = id$4;
  this.mB = value$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mz = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$5.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$5;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$5() {
}
$h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$5.prototype = $p;
$p.ps = (function(_$2, obj) {
  var this$1 = this.mz;
  var id$2 = this.mA;
  var value$2 = this.mB;
  this$1.iq(obj.mq, id$2, value$2);
});
$p.eR = (function(x$0, x$1) {
  this.ps(x$0, x$1);
});
var $d_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$5 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$5, "org.loveroo.webgl.engine.render.impl.WebGLRenderer$$anon$5", ({
  eD: 1,
  a0: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$6(shaderPtr$3, batch$3, offset$3, outer) {
  this.mF = null;
  this.mD = null;
  this.mE = null;
  this.mC = null;
  this.mF = shaderPtr$3;
  this.mD = batch$3;
  this.mE = offset$3;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mC = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$6.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$6;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$6() {
}
$h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$6.prototype = $p;
$p.ge = (function(d) {
  var this$1 = this.mC;
  var shaderPtr$1 = this.mF;
  var batch$1 = this.mD;
  var offset$1 = this.mE;
  matchResult3: {
    var valueType;
    var x10 = d.eC.lS;
    var x = $m_Lorg_loveroo_webgl_engine_render_batch_DataType$().eB;
    if (((x === null) ? (x10 === null) : (x === x10))) {
      var valueType = 5126;
      break matchResult3;
    }
    var valueType = 0;
  }
  var index = (this$1.k.getAttribLocation(shaderPtr$1.fy, d.jd) | 0);
  if ((index === (-1))) {
    throw new $c_Lorg_loveroo_webgl_engine_render_batch_AttributeNotFoundException(batch$1.dS, d.jd);
  }
  this$1.k.enableVertexAttribArray(index);
  this$1.js.vertexAttribDivisorANGLE(index, 1);
  this$1.k.vertexAttribPointer(index, d.eC.je, valueType, false, batch$1.fw.lO, offset$1.R);
  offset$1.R = ((offset$1.R + d.eC.jf) | 0);
});
$p.b7 = (function(x$0) {
  this.ge(x$0);
});
var $d_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$6 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$6, "org.loveroo.webgl.engine.render.impl.WebGLRenderer$$anon$6", ({
  eE: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$7(buffer$3, outer) {
  this.mH = null;
  this.mG = null;
  this.mH = buffer$3;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mG = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$7.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$7;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$7() {
}
$h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$7.prototype = $p;
$p.pt = (function(e) {
  $p_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer__putBuff__Lorg_loveroo_webgl_engine_data_BufferWrapper__ju_List__jl_Void(this.mG, this.mH, e.oe());
});
$p.b7 = (function(x$0) {
  this.pt(x$0);
});
var $d_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$7 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$7, "org.loveroo.webgl.engine.render.impl.WebGLRenderer$$anon$7", ({
  eF: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$8(buff$3, outer) {
  this.mI = null;
  this.pg = null;
  this.mI = buff$3;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.pg = outer;
}
$p = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$8;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$8() {
}
$h_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$8.prototype = $p;
$p.pu = (function(x$1) {
  var buff$1 = this.mI;
  matchResult4: {
    if ((x$1 instanceof $c_Lorg_loveroo_webgl_engine_render_batch_FloatElementData)) {
      buff$1.ag(x$1.lV);
      break matchResult4;
    }
    if ((x$1 instanceof $c_Lorg_loveroo_webgl_engine_render_batch_Vec2ElementData)) {
      buff$1.ag(x$1.lW);
      buff$1.ag(x$1.lX);
      break matchResult4;
    }
    if ((x$1 instanceof $c_Lorg_loveroo_webgl_engine_render_batch_Vec3ElementData)) {
      buff$1.ag(x$1.lY);
      buff$1.ag(x$1.lZ);
      buff$1.ag(x$1.m0);
      break matchResult4;
    }
    if (false) {
      buff$1.ag(x$1.rU());
      buff$1.ag(x$1.rV());
      buff$1.ag(x$1.rW());
      buff$1.ag(x$1.rT());
      break matchResult4;
    }
    throw new $c_s_MatchError(x$1);
  }
});
$p.b7 = (function(x$0) {
  this.pu(x$0);
});
var $d_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$8 = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_WebGLRenderer$$anon$8, "org.loveroo.webgl.engine.render.impl.WebGLRenderer$$anon$8", ({
  eG: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_impl_WebGLTextureTypes() {
  this.ht = null;
  this.ht = new $c_Lorg_loveroo_webgl_engine_render_data_TextureType(3553);
}
$p = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLTextureTypes.prototype = new $h_Lorg_loveroo_webgl_engine_render_data_TextureTypes();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_impl_WebGLTextureTypes;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_impl_WebGLTextureTypes() {
}
$h_Lorg_loveroo_webgl_engine_render_impl_WebGLTextureTypes.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_render_impl_WebGLTextureTypes = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_WebGLTextureTypes, "org.loveroo.webgl.engine.render.impl.WebGLTextureTypes", ({
  eH: 1,
  e7: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_runtime_impl_WebButtons() {
  this.mR = null;
  this.mO = null;
  this.mP = null;
  this.mQ = null;
  this.mN = null;
  this.mJ = null;
  this.mK = null;
  this.mL = null;
  this.mM = null;
  this.mR = new $c_Lorg_loveroo_webgl_engine_input_Button(87);
  this.mO = new $c_Lorg_loveroo_webgl_engine_input_Button(83);
  this.mP = new $c_Lorg_loveroo_webgl_engine_input_Button(65);
  this.mQ = new $c_Lorg_loveroo_webgl_engine_input_Button(68);
  this.mN = new $c_Lorg_loveroo_webgl_engine_input_Button(32);
  this.mJ = new $c_Lorg_loveroo_webgl_engine_input_Button(114);
  this.mK = new $c_Lorg_loveroo_webgl_engine_input_Button(78);
  this.mL = new $c_Lorg_loveroo_webgl_engine_input_Button(80);
  this.mM = new $c_Lorg_loveroo_webgl_engine_input_Button(79);
}
$p = $c_Lorg_loveroo_webgl_engine_runtime_impl_WebButtons.prototype = new $h_Lorg_loveroo_webgl_engine_input_Buttons();
$p.constructor = $c_Lorg_loveroo_webgl_engine_runtime_impl_WebButtons;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_runtime_impl_WebButtons() {
}
$h_Lorg_loveroo_webgl_engine_runtime_impl_WebButtons.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_runtime_impl_WebButtons = new $TypeData().i($c_Lorg_loveroo_webgl_engine_runtime_impl_WebButtons, "org.loveroo.webgl.engine.runtime.impl.WebButtons", ({
  eJ: 1,
  dm: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_runtime_impl_WebEngineRuntime() {
  this.mS = null;
  this.hv = null;
  this.ju = null;
  this.ay = null;
  this.hu = 0;
  this.dU = null;
  $f_Lorg_loveroo_webgl_engine_runtime_EngineRuntime__$init$__V(this);
  this.dU = new $c_Lorg_loveroo_webgl_engine_runtime_impl_WebInput();
}
$p = $c_Lorg_loveroo_webgl_engine_runtime_impl_WebEngineRuntime.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_runtime_impl_WebEngineRuntime;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_runtime_impl_WebEngineRuntime() {
}
$h_Lorg_loveroo_webgl_engine_runtime_impl_WebEngineRuntime.prototype = $p;
var $d_Lorg_loveroo_webgl_engine_runtime_impl_WebEngineRuntime = new $TypeData().i($c_Lorg_loveroo_webgl_engine_runtime_impl_WebEngineRuntime, "org.loveroo.webgl.engine.runtime.impl.WebEngineRuntime", ({
  eK: 1,
  eI: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_runtime_impl_WebInput() {
  this.mT = null;
  this.hw = null;
  this.mT = new $c_Lorg_loveroo_webgl_engine_runtime_impl_WebButtons();
  this.hw = $ct_scm_HashSet__(new $c_scm_HashSet());
  $m_Lorg_loveroo_webgl_engine_input_Input$().qL(this);
  window.onkeydown = ((event$2) => this.hw.w((event$2.keyCode | 0)));
  window.onkeyup = ((event$2$1) => this.hw.ro((event$2$1.keyCode | 0)));
}
$p = $c_Lorg_loveroo_webgl_engine_runtime_impl_WebInput.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_runtime_impl_WebInput;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_runtime_impl_WebInput() {
}
$h_Lorg_loveroo_webgl_engine_runtime_impl_WebInput.prototype = $p;
$p.kb = (function(button) {
  return (this.hw.aX(button.ly) ? 1.0 : 0.0);
});
var $d_Lorg_loveroo_webgl_engine_runtime_impl_WebInput = new $TypeData().i($c_Lorg_loveroo_webgl_engine_runtime_impl_WebInput, "org.loveroo.webgl.engine.runtime.impl.WebInput", ({
  eL: 1,
  dn: 1
}));
function $f_Lorg_loveroo_webgl_game_entity_Entity__$init$__V($thiz) {
  $thiz.fE = $thiz.aT;
  $thiz.b2 = new $c_Lorg_loveroo_webgl_engine_math_Vec3f(0.0, 0.0, 0.0);
  $thiz.fD = $ct_Lorg_loveroo_webgl_engine_math_collision_CenteredAABB__F0__F__(new $c_Lorg_loveroo_webgl_engine_math_collision_CenteredAABB(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $thiz.aT)), 0.800000011920929);
  $thiz.hy = new $c_ju_LinkedList();
  $thiz.jw = null;
}
function $f_Lorg_loveroo_webgl_game_entity_Entity__uuid_$eq__ju_UUID__jl_Void($thiz, value) {
  if (($thiz.jw === null)) {
    $thiz.jw = value;
    return (void 0);
  } else {
    return (void 0);
  }
}
function $f_Lorg_loveroo_webgl_game_entity_Entity__tick__jl_Void($thiz) {
  $thiz.r2();
  $thiz.fE.oO($thiz.aT);
  var this$1 = $thiz.b2;
  var movement = new $c_Lorg_loveroo_webgl_engine_math_Vec3f(this$1.ah, this$1.X, this$1.a6);
  var blocks = $f_Lorg_loveroo_webgl_game_entity_Entity__collectBlocks__Lorg_loveroo_webgl_engine_math_Vec3f__ju_List($thiz, $thiz.b2);
  $f_jl_Iterable__forEach__ju_function_Consumer__V(blocks, new $c_Lorg_loveroo_webgl_game_entity_Entity$$anon$1(movement, $thiz));
  var this$3 = $thiz.aT;
  var value = Math.fround(($thiz.aT.X + movement.X));
  this$3.X = value;
  $f_jl_Iterable__forEach__ju_function_Consumer__V(blocks, new $c_Lorg_loveroo_webgl_game_entity_Entity$$anon$2(movement, $thiz));
  var this$5 = $thiz.aT;
  var value$1 = Math.fround(($thiz.aT.ah + movement.ah));
  this$5.ah = value$1;
  $f_jl_Iterable__forEach__ju_function_Consumer__V(blocks, new $c_Lorg_loveroo_webgl_game_entity_Entity$$anon$3(movement, $thiz));
  var this$7 = $thiz.aT;
  var value$2 = Math.fround(($thiz.aT.a6 + movement.a6));
  this$7.a6 = value$2;
  if ((movement.ah !== $thiz.b2.ah)) {
    var this$9 = $thiz.b2;
    this$9.ah = 0.0;
  }
  if ((movement.X !== $thiz.b2.X)) {
    var this$11 = $thiz.b2;
    this$11.X = 0.0;
  }
  if ((movement.a6 !== $thiz.b2.a6)) {
    var this$13 = $thiz.b2;
    this$13.a6 = 0.0;
    return (void 0);
  } else {
    return (void 0);
  }
}
function $f_Lorg_loveroo_webgl_game_entity_Entity__collectBlocks__Lorg_loveroo_webgl_engine_math_Vec3f__ju_List($thiz, offset) {
  $thiz.hy.dE();
  var this$1 = $thiz.fD;
  var hitbox = new $c_Lorg_loveroo_webgl_engine_math_collision_BasicAABB(this$1.d8(), this$1.d9(), this$1.da(), this$1.d5(), this$1.d6(), this$1.d7()).qo(offset.ah, offset.X, offset.a6);
  var xMin = (+Math.floor(hitbox.d8()));
  var yMin = (+Math.floor(hitbox.d9()));
  var zMin = (+Math.floor(hitbox.da()));
  var xMax = (+Math.ceil(hitbox.d5()));
  var yMax = (+Math.ceil(hitbox.d6()));
  var zMax = (+Math.ceil(hitbox.d7()));
  var x$6 = xMin;
  while ((x$6 < xMax)) {
    var y = yMin;
    while ((y < yMax)) {
      var z = zMin;
      while ((z < zMax)) {
        var any = $thiz.n0.qE($doubleToInt(x$6), $doubleToInt(y), $doubleToInt(z));
        if ((any !== null)) {
          $thiz.hy.w(any);
        }
        z = (z + 1.0);
      }
      y = (y + 1.0);
    }
    x$6 = (x$6 + 1.0);
  }
  return $thiz.hy;
}
function $p_Lorg_loveroo_webgl_game_entity_Entity__blendPos__D__Lorg_loveroo_webgl_engine_math_Vec3f($thiz, delta) {
  var worldPos = $m_Lorg_loveroo_webgl_game_entity_Entity$().it(Math.fround($m_Lorg_loveroo_webgl_engine_math_Lerp$().gn(delta, $thiz.fE.ah, $thiz.aT.ah, false, true)), Math.fround($m_Lorg_loveroo_webgl_engine_math_Lerp$().gn(delta, $thiz.fE.X, $thiz.aT.X, false, true)), Math.fround($m_Lorg_loveroo_webgl_engine_math_Lerp$().gn(delta, $thiz.fE.a6, $thiz.aT.a6, false, true)));
  return new $c_Lorg_loveroo_webgl_engine_math_Vec3f(worldPos.aZ, worldPos.b0, Math.fround((Math.fround((-$thiz.aT.X)) - $thiz.aT.a6)));
}
function $f_Lorg_loveroo_webgl_game_entity_Entity__render__D__jl_Void($thiz, delta) {
  return $f_Lorg_loveroo_webgl_game_entity_SpriteEntity__renderEntity__Lorg_loveroo_webgl_engine_math_Vec3f__jl_Void($thiz, $p_Lorg_loveroo_webgl_game_entity_Entity__blendPos__D__Lorg_loveroo_webgl_engine_math_Vec3f($thiz, delta));
}
/** @constructor */
function $c_Lorg_loveroo_webgl_game_entity_Entity$$anon$1(movement$7, outer) {
  this.mV = null;
  this.mU = null;
  this.mV = movement$7;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mU = outer;
}
$p = $c_Lorg_loveroo_webgl_game_entity_Entity$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_entity_Entity$$anon$1;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_entity_Entity$$anon$1() {
}
$h_Lorg_loveroo_webgl_game_entity_Entity$$anon$1.prototype = $p;
$p.gf = (function(b) {
  var this$1 = this.mU;
  var movement$1 = this.mV;
  var value = $f_Lorg_loveroo_webgl_engine_math_collision_AABB__resolveY__Lorg_loveroo_webgl_engine_math_collision_AABB__F__F(this$1.fD, b.hC, movement$1.X);
  movement$1.X = value;
});
$p.b7 = (function(x$0) {
  this.gf(x$0);
});
var $d_Lorg_loveroo_webgl_game_entity_Entity$$anon$1 = new $TypeData().i($c_Lorg_loveroo_webgl_game_entity_Entity$$anon$1, "org.loveroo.webgl.game.entity.Entity$$anon$1", ({
  eP: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_entity_Entity$$anon$2(movement$8, outer) {
  this.mX = null;
  this.mW = null;
  this.mX = movement$8;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mW = outer;
}
$p = $c_Lorg_loveroo_webgl_game_entity_Entity$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_entity_Entity$$anon$2;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_entity_Entity$$anon$2() {
}
$h_Lorg_loveroo_webgl_game_entity_Entity$$anon$2.prototype = $p;
$p.gf = (function(b) {
  var this$1 = this.mW;
  var movement$2 = this.mX;
  var value = $f_Lorg_loveroo_webgl_engine_math_collision_AABB__resolveX__Lorg_loveroo_webgl_engine_math_collision_AABB__F__F(this$1.fD, b.hC, movement$2.ah);
  movement$2.ah = value;
});
$p.b7 = (function(x$0) {
  this.gf(x$0);
});
var $d_Lorg_loveroo_webgl_game_entity_Entity$$anon$2 = new $TypeData().i($c_Lorg_loveroo_webgl_game_entity_Entity$$anon$2, "org.loveroo.webgl.game.entity.Entity$$anon$2", ({
  eQ: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_entity_Entity$$anon$3(movement$9, outer) {
  this.mZ = null;
  this.mY = null;
  this.mZ = movement$9;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mY = outer;
}
$p = $c_Lorg_loveroo_webgl_game_entity_Entity$$anon$3.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_entity_Entity$$anon$3;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_entity_Entity$$anon$3() {
}
$h_Lorg_loveroo_webgl_game_entity_Entity$$anon$3.prototype = $p;
$p.gf = (function(b) {
  var this$1 = this.mY;
  var movement$3 = this.mZ;
  var value = $f_Lorg_loveroo_webgl_engine_math_collision_AABB__resolveZ__Lorg_loveroo_webgl_engine_math_collision_AABB__F__F(this$1.fD, b.hC, movement$3.a6);
  movement$3.a6 = value;
});
$p.b7 = (function(x$0) {
  this.gf(x$0);
});
var $d_Lorg_loveroo_webgl_game_entity_Entity$$anon$3 = new $TypeData().i($c_Lorg_loveroo_webgl_game_entity_Entity$$anon$3, "org.loveroo.webgl.game.entity.Entity$$anon$3", ({
  eR: 1,
  r: 1
}));
function $p_Lorg_loveroo_webgl_game_scene_World__ifTrue$proxy1$1__F($thiz) {
  return ($f_Lorg_loveroo_webgl_engine_input_Input__isButtonPressed__Lorg_loveroo_webgl_engine_input_Button__Z($m_Lorg_loveroo_webgl_Game$().y.x.dU, $m_Lorg_loveroo_webgl_engine_input_Input$().ch.mK) ? 1.0 : ($f_Lorg_loveroo_webgl_engine_input_Input__isButtonPressed__Lorg_loveroo_webgl_engine_input_Button__Z($m_Lorg_loveroo_webgl_Game$().y.x.dU, $m_Lorg_loveroo_webgl_engine_input_Input$().ch.mL) ? 2.0 : ($f_Lorg_loveroo_webgl_engine_input_Input__isButtonPressed__Lorg_loveroo_webgl_engine_input_Button__Z($m_Lorg_loveroo_webgl_Game$().y.x.dU, $m_Lorg_loveroo_webgl_engine_input_Input$().ch.mM) ? 3.0 : 0.0)));
}
/** @constructor */
function $c_Lorg_loveroo_webgl_game_scene_World() {
  this.hB = 0.0;
  this.jy = 0.0;
  this.df = 0.0;
  this.jx = 0.0;
  this.hA = 0;
  this.jz = null;
  this.jB = null;
  this.jC = null;
  this.jA = null;
  this.bY = null;
  this.de = null;
  this.hz = null;
  $f_Lorg_loveroo_webgl_game_Scene__$init$__V(this);
  this.jz = $ct_Lorg_loveroo_webgl_engine_render_RenderBuffer__T__Lorg_loveroo_webgl_engine_render_data_ColorFormat__I__I__(new $c_Lorg_loveroo_webgl_engine_render_RenderBuffer(), "world", $m_Lorg_loveroo_webgl_engine_render_Renderer$().cN.dT, $m_Lorg_loveroo_webgl_engine_render_Camera$().fm, $m_Lorg_loveroo_webgl_engine_render_Camera$().fn);
  this.jB = $ct_Lorg_loveroo_webgl_engine_render_RenderBuffer__T__Lorg_loveroo_webgl_engine_render_data_ColorFormat__I__I__(new $c_Lorg_loveroo_webgl_engine_render_RenderBuffer(), "world_normal", $m_Lorg_loveroo_webgl_engine_render_Renderer$().cN.dT, $m_Lorg_loveroo_webgl_engine_render_Camera$().fm, $m_Lorg_loveroo_webgl_engine_render_Camera$().fn);
  this.jC = $ct_Lorg_loveroo_webgl_engine_render_RenderBuffer__T__Lorg_loveroo_webgl_engine_render_data_ColorFormat__I__I__(new $c_Lorg_loveroo_webgl_engine_render_RenderBuffer(), "world_position", $m_Lorg_loveroo_webgl_engine_render_Renderer$().cN.dT, $m_Lorg_loveroo_webgl_engine_render_Camera$().fm, $m_Lorg_loveroo_webgl_engine_render_Camera$().fn);
  this.jA = $ct_Lorg_loveroo_webgl_engine_render_RenderBuffer__T__Lorg_loveroo_webgl_engine_render_data_ColorFormat__I__I__(new $c_Lorg_loveroo_webgl_engine_render_RenderBuffer(), "world_depth", $m_Lorg_loveroo_webgl_engine_render_Renderer$().cN.dT, $m_Lorg_loveroo_webgl_game_world_ChunkMap$().fG.bW, $m_Lorg_loveroo_webgl_game_world_ChunkMap$().fG.bF);
  this.bY = new $c_Lorg_loveroo_webgl_engine_render_Sprite(this.jz, $ct_Lorg_loveroo_webgl_engine_render_Shader__T__T__(new $c_Lorg_loveroo_webgl_engine_render_Shader(), "sprite_raw", "world/world_lighting"), new $c_Lorg_loveroo_webgl_engine_math_Vec3f(0.0, 0.0, 0.0), new $c_Lorg_loveroo_webgl_engine_math_Vec2f(1.0, 1.0));
  $f_Lorg_loveroo_webgl_engine_data_resource_Resource__onLoad__F1__jl_Void(this.bY, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.bY.ru(this.bY.fs.r3(2.0, 2.0)))));
  this.bY.b1.aY("worldSize", new $c_Lorg_loveroo_webgl_engine_render_Uniform3f(Math.fround(Math.imul(Math.imul($m_Lorg_loveroo_webgl_game_world_Chunk$().be, $m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU), $m_Lorg_loveroo_webgl_game_world_Chunk$().cQ)), Math.fround(Math.imul($m_Lorg_loveroo_webgl_game_world_Chunk$().cv, $m_Lorg_loveroo_webgl_game_world_Chunk$().cQ)), Math.fround(Math.imul(Math.imul($m_Lorg_loveroo_webgl_game_world_Chunk$().bs, $m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU), $m_Lorg_loveroo_webgl_game_world_Chunk$().cQ))));
  this.bY.b1.aY("normalTex", new $c_Lorg_loveroo_webgl_engine_render_TextureUniform($m_Lorg_loveroo_webgl_engine_render_data_TextureSlot$().m3, this.jB));
  this.bY.b1.aY("posTex", new $c_Lorg_loveroo_webgl_engine_render_TextureUniform($m_Lorg_loveroo_webgl_engine_render_data_TextureSlot$().m2, this.jC));
  this.de = new $c_Lorg_loveroo_webgl_game_world_ChunkMap();
  this.de.ks();
  this.bY.b1.aY("depthTex", new $c_Lorg_loveroo_webgl_engine_render_TextureUniform($m_Lorg_loveroo_webgl_engine_render_data_TextureSlot$().m1, this.jA));
  this.bY.b1.aY("depthSize", new $c_Lorg_loveroo_webgl_engine_render_Uniform2f(Math.fround($m_Lorg_loveroo_webgl_game_world_ChunkMap$().fG.bW), Math.fround($m_Lorg_loveroo_webgl_game_world_ChunkMap$().fG.bF)));
  this.hz = $ct_ju_HashMap__(new $c_ju_HashMap());
}
$p = $c_Lorg_loveroo_webgl_game_scene_World.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_scene_World;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_scene_World() {
}
$h_Lorg_loveroo_webgl_game_scene_World.prototype = $p;
$p.rD = (function(value) {
  return this.bY.b1.aY("sunPos", new $c_Lorg_loveroo_webgl_engine_render_Uniform3f(Math.fround(value.gV), Math.fround(value.gW), Math.fround(value.gX)));
});
$p.ks = (function() {
  this.rA(new $c_Lorg_loveroo_webgl_game_entity_living_DummyEntity(new $c_Lorg_loveroo_webgl_engine_math_Vec3f(10.0, 90.0, 10.0), this));
});
$p.rF = (function() {
  $f_Lorg_loveroo_webgl_game_Scene__tick__jl_Void(this);
  this.hz.eW(new $c_Lorg_loveroo_webgl_game_scene_World$$anon$1(this));
  var degrees$proxy1 = (0.5 * this.hA);
  var rad = (degrees$proxy1 * $m_Lorg_loveroo_webgl_engine_math_\uff3fMath$().lz);
  var value$proxy1 = (+Math.cos(rad));
  var $x_1 = Math.min(0.8, (+Math.max((-0.8), value$proxy1)));
  var value$proxy2 = (+Math.sin(rad));
  this.rD(new $c_Lorg_loveroo_webgl_engine_math_Vec3i((($doubleToInt((5.0 * (+$x_1))) - 160) | 0), 120, (($doubleToInt((5.0 * (+Math.min(0.8, (+Math.max((-0.8), value$proxy2)))))) - 120) | 0)));
  var bool$proxy1 = $f_Lorg_loveroo_webgl_engine_input_Input__isButtonPressed__Lorg_loveroo_webgl_engine_input_Button__Z($m_Lorg_loveroo_webgl_Game$().y.x.dU, $m_Lorg_loveroo_webgl_engine_input_Input$().ch.mJ);
  var renderState = (bool$proxy1 ? $p_Lorg_loveroo_webgl_game_scene_World__ifTrue$proxy1$1__F(this) : 0.0);
  return this.bY.b1.aY("renderState", new $c_Lorg_loveroo_webgl_engine_render_FloatUniform(renderState));
});
$p.bP = (function(delta) {
  $m_Lorg_loveroo_webgl_Game$().y.x.ju.qT(delta);
  if (this.de.rk()) {
    $m_Lorg_loveroo_webgl_engine_render_Renderer$().i5();
    this.jA.e6(true);
    this.de.kI();
    $m_Lorg_loveroo_webgl_engine_render_Renderer$().i6();
  }
  this.jB.e6(true);
  this.de.kJ();
  this.jC.e6(true);
  this.de.kK();
  this.jz.e6(true);
  this.de.kL();
  this.hz.eW(new $c_Lorg_loveroo_webgl_game_scene_World$$anon$2(delta, this));
  $m_Lorg_loveroo_webgl_engine_render_Renderer$().ir();
  return this.bY.bP(delta);
});
$p.rA = (function(entity) {
  var id = new $c_ju_UUID(0, 0, 0, 0);
  $f_Lorg_loveroo_webgl_game_entity_Entity__uuid_$eq__ju_UUID__jl_Void(entity, id);
  var $x_1 = this.hz;
  var originalHash = id.A();
  $x_1.bA(id, entity, (originalHash ^ ((originalHash >>> 16) | 0)), false);
  return id;
});
$p.qD = (function(x, y, z) {
  var any = this.de.pX(x, z);
  return ((any === null) ? null : any.kl(((x - Math.imul(any.hE, $m_Lorg_loveroo_webgl_game_world_Chunk$().be)) | 0), y, ((z - Math.imul(any.hF, $m_Lorg_loveroo_webgl_game_world_Chunk$().bs)) | 0)));
});
$p.qE = (function(x, y, z) {
  var any = this.qD(x, y, z);
  return ((any === null) ? null : new $c_Lorg_loveroo_webgl_game_world_BlockState(any, new $c_Lorg_loveroo_webgl_engine_math_Vec3i(x, y, z)));
});
var $d_Lorg_loveroo_webgl_game_scene_World = new $TypeData().i($c_Lorg_loveroo_webgl_game_scene_World, "org.loveroo.webgl.game.scene.World", ({
  eW: 1,
  eM: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_scene_World$$anon$1(outer) {
  this.pi = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.pi = outer;
}
$p = $c_Lorg_loveroo_webgl_game_scene_World$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_scene_World$$anon$1;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_scene_World$$anon$1() {
}
$h_Lorg_loveroo_webgl_game_scene_World$$anon$1.prototype = $p;
$p.k3 = (function(_$2, e) {
  $f_Lorg_loveroo_webgl_game_entity_Entity__tick__jl_Void(e);
});
$p.eR = (function(x$0, x$1) {
  this.k3(x$0, x$1);
});
var $d_Lorg_loveroo_webgl_game_scene_World$$anon$1 = new $TypeData().i($c_Lorg_loveroo_webgl_game_scene_World$$anon$1, "org.loveroo.webgl.game.scene.World$$anon$1", ({
  eX: 1,
  a0: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_scene_World$$anon$2(delta$3, outer) {
  this.n1 = 0.0;
  this.pj = null;
  this.n1 = delta$3;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.pj = outer;
}
$p = $c_Lorg_loveroo_webgl_game_scene_World$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_scene_World$$anon$2;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_scene_World$$anon$2() {
}
$h_Lorg_loveroo_webgl_game_scene_World$$anon$2.prototype = $p;
$p.k3 = (function(_$3, e) {
  $f_Lorg_loveroo_webgl_game_entity_Entity__render__D__jl_Void(e, this.n1);
});
$p.eR = (function(x$0, x$1) {
  this.k3(x$0, x$1);
});
var $d_Lorg_loveroo_webgl_game_scene_World$$anon$2 = new $TypeData().i($c_Lorg_loveroo_webgl_game_scene_World$$anon$2, "org.loveroo.webgl.game.scene.World$$anon$2", ({
  eY: 1,
  a0: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_world_BlockElement(pos, blockType) {
  this.n2 = null;
  var atlas = $m_Lorg_loveroo_webgl_game_world_ChunkRenderer$().dh.ou(blockType.cj);
  this.n2 = $m_Lorg_loveroo_predef_ListUtil$().ik(new $c_sjsr_WrappedVarArgs([new $c_Lorg_loveroo_webgl_engine_render_batch_Vec3ElementData(pos.ah, pos.X, pos.a6), new $c_Lorg_loveroo_webgl_engine_render_batch_Vec2ElementData(atlas.iZ, atlas.j0)]));
}
$p = $c_Lorg_loveroo_webgl_game_world_BlockElement.prototype = new $h_Lorg_loveroo_webgl_engine_render_batch_BatchElement();
$p.constructor = $c_Lorg_loveroo_webgl_game_world_BlockElement;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_world_BlockElement() {
}
$h_Lorg_loveroo_webgl_game_world_BlockElement.prototype = $p;
$p.oe = (function() {
  return this.n2;
});
var $d_Lorg_loveroo_webgl_game_world_BlockElement = new $TypeData().i($c_Lorg_loveroo_webgl_game_world_BlockElement, "org.loveroo.webgl.game.world.BlockElement", ({
  eZ: 1,
  be: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_world_Chunk(chunkX, chunkZ, generator) {
  this.hE = 0;
  this.hF = 0;
  this.na = null;
  this.hE = chunkX;
  this.hF = chunkZ;
  this.na = generator.qB(chunkX, chunkZ);
  $ct_ju_ArrayList__(new $c_ju_ArrayList());
}
$p = $c_Lorg_loveroo_webgl_game_world_Chunk.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_world_Chunk;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_world_Chunk() {
}
$h_Lorg_loveroo_webgl_game_world_Chunk.prototype = $p;
$p.kl = (function(x, y, z) {
  return $m_Lorg_loveroo_predef_Predef$().oo(this.na, $m_Lorg_loveroo_webgl_game_world_Chunk$().p0(x, y, z));
});
var $d_Lorg_loveroo_webgl_game_world_Chunk = new $TypeData().i($c_Lorg_loveroo_webgl_game_world_Chunk, "org.loveroo.webgl.game.world.Chunk", ({
  f3: 1,
  H: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_world_ChunkMap() {
  this.jF = null;
  this.dW = null;
  var list = $ct_ju_ArrayList__I__(new $c_ju_ArrayList(), Math.imul($m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU, $m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU));
  var targetSize = Math.imul($m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU, $m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU);
  var i = 0;
  while ((i < targetSize)) {
    list.w(null);
    i = ((1 + i) | 0);
  }
  this.jF = list;
  this.dW = new $c_Lorg_loveroo_webgl_game_world_ChunkRenderer(this);
}
$p = $c_Lorg_loveroo_webgl_game_world_ChunkMap.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_world_ChunkMap;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_world_ChunkMap() {
}
$h_Lorg_loveroo_webgl_game_world_ChunkMap.prototype = $p;
$p.ks = (function() {
  var generator = new $c_Lorg_loveroo_webgl_game_world_TestGenerator();
  var x = 0;
  while ((x < $m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU)) {
    var z = 0;
    while ((z < $m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU)) {
      this.jF.kN(this.oa(x, z), new $c_Lorg_loveroo_webgl_game_world_Chunk(x, z, generator));
      z = ((1 + z) | 0);
    }
    x = ((1 + x) | 0);
  }
  return this.dW.rl();
});
$p.pX = (function(x, z) {
  return this.i4(((x / $checkIntDivisor($m_Lorg_loveroo_webgl_game_world_Chunk$().be)) | 0), ((z / $checkIntDivisor($m_Lorg_loveroo_webgl_game_world_Chunk$().bs)) | 0));
});
$p.i4 = (function(x, z) {
  return $m_Lorg_loveroo_predef_Predef$().oo(this.jF, this.oa(x, z));
});
$p.oa = (function(x, z) {
  return ((Math.imul(x, $m_Lorg_loveroo_webgl_game_world_ChunkMap$().aU) + z) | 0);
});
$p.kL = (function() {
  return this.dW.kL();
});
$p.kJ = (function() {
  return this.dW.kJ();
});
$p.kK = (function() {
  return this.dW.kK();
});
$p.rk = (function() {
  return this.dW.fI;
});
$p.kI = (function() {
  return this.dW.kI();
});
var $d_Lorg_loveroo_webgl_game_world_ChunkMap = new $TypeData().i($c_Lorg_loveroo_webgl_game_world_ChunkMap, "org.loveroo.webgl.game.world.ChunkMap", ({
  f5: 1,
  H: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_world_DepthElement(pos, zIndex, blockTypes) {
  this.nf = null;
  if ((blockTypes.l() !== $m_Lorg_loveroo_webgl_game_world_Chunk$().dV)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ("Block types size not " + $m_Lorg_loveroo_webgl_game_world_Chunk$().dV));
  }
  var list = $ct_ju_ArrayList__I__(new $c_ju_ArrayList(), ((2 + blockTypes.l()) | 0));
  list.w(new $c_Lorg_loveroo_webgl_engine_render_batch_Vec2ElementData(pos.aZ, pos.b0));
  list.w(new $c_Lorg_loveroo_webgl_engine_render_batch_FloatElementData(zIndex));
  $f_jl_Iterable__forEach__ju_function_Consumer__V(blockTypes, new $c_Lorg_loveroo_webgl_game_world_DepthElement$$anon$1(list, this));
  this.nf = list;
}
$p = $c_Lorg_loveroo_webgl_game_world_DepthElement.prototype = new $h_Lorg_loveroo_webgl_engine_render_batch_BatchElement();
$p.constructor = $c_Lorg_loveroo_webgl_game_world_DepthElement;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_world_DepthElement() {
}
$h_Lorg_loveroo_webgl_game_world_DepthElement.prototype = $p;
$p.oe = (function() {
  return this.nf;
});
var $d_Lorg_loveroo_webgl_game_world_DepthElement = new $TypeData().i($c_Lorg_loveroo_webgl_game_world_DepthElement, "org.loveroo.webgl.game.world.DepthElement", ({
  f9: 1,
  be: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_world_DepthElement$$anon$1(list$3, outer) {
  this.ng = null;
  this.pl = null;
  this.ng = list$3;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.pl = outer;
}
$p = $c_Lorg_loveroo_webgl_game_world_DepthElement$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_world_DepthElement$$anon$1;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_world_DepthElement$$anon$1() {
}
$h_Lorg_loveroo_webgl_game_world_DepthElement$$anon$1.prototype = $p;
$p.pw = (function(t) {
  var list$1 = this.ng;
  var atlas = $m_Lorg_loveroo_webgl_game_world_ChunkRenderer$().dX.ou(t.cj);
  list$1.w(new $c_Lorg_loveroo_webgl_engine_render_batch_Vec2ElementData(atlas.iZ, atlas.j0));
});
$p.b7 = (function(x$0) {
  this.pw(x$0);
});
var $d_Lorg_loveroo_webgl_game_world_DepthElement$$anon$1 = new $TypeData().i($c_Lorg_loveroo_webgl_game_world_DepthElement$$anon$1, "org.loveroo.webgl.game.world.DepthElement$$anon$1", ({
  fa: 1,
  r: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_world_TestGenerator() {
  (0, $i_$002flib$002fnoise$002ejs.noiseSeed)((+Date.now()));
}
$p = $c_Lorg_loveroo_webgl_game_world_TestGenerator.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_world_TestGenerator;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_world_TestGenerator() {
}
$h_Lorg_loveroo_webgl_game_world_TestGenerator.prototype = $p;
$p.qB = (function(chunkX, chunkZ) {
  var blocks = $ct_ju_ArrayList__I__(new $c_ju_ArrayList(), $m_Lorg_loveroo_webgl_game_world_Chunk$().jE);
  while ((blocks.l() < $m_Lorg_loveroo_webgl_game_world_Chunk$().jE)) {
    blocks.w($m_Lorg_loveroo_webgl_game_world_BlockType$().jD);
  }
  var this$1 = $m_Lorg_loveroo_webgl_game_world_Chunk$();
  var x = 0;
  var z = 0;
  while ((x < this$1.be)) {
    while ((z < this$1.bs)) {
      var v1 = x;
      var v2 = z;
      var height = ((6.0 * (+(0, $i_$002flib$002fnoise$002ejs.noise)((((v1 + Math.imul(chunkX, $m_Lorg_loveroo_webgl_game_world_Chunk$().be)) | 0) / 10.0), (((v2 + Math.imul(chunkZ, $m_Lorg_loveroo_webgl_game_world_Chunk$().bs)) | 0) / 10.0)))) + 70.0);
      var y = 0;
      while ((y < height)) {
        blocks.kN($m_Lorg_loveroo_webgl_game_world_Chunk$().p0(v1, y, v2), ((y < 66) ? $m_Lorg_loveroo_webgl_game_world_BlockType$().n9 : ((y < (height - 2.0)) ? $m_Lorg_loveroo_webgl_game_world_BlockType$().n7 : ((y <= (height - 1.0)) ? $m_Lorg_loveroo_webgl_game_world_BlockType$().n8 : $m_Lorg_loveroo_webgl_game_world_BlockType$().jD))));
        y = ((1 + y) | 0);
      }
      z = ((1 + z) | 0);
    }
    z = 0;
    x = ((1 + x) | 0);
  }
  return blocks;
});
var $d_Lorg_loveroo_webgl_game_world_TestGenerator = new $TypeData().i($c_Lorg_loveroo_webgl_game_world_TestGenerator, "org.loveroo.webgl.game.world.TestGenerator", ({
  fc: 1,
  fb: 1
}));
/** @constructor */
function $c_Lorg_scalajs_dom_webgl_ANGLE\uff3finstanced\uff3farrays$() {
  this.eH = null;
  $ct_Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier__T__(this, "ANGLE_instanced_arrays");
}
$p = $c_Lorg_scalajs_dom_webgl_ANGLE\uff3finstanced\uff3farrays$.prototype = new $h_Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier();
$p.constructor = $c_Lorg_scalajs_dom_webgl_ANGLE\uff3finstanced\uff3farrays$;
/** @constructor */
function $h_Lorg_scalajs_dom_webgl_ANGLE\uff3finstanced\uff3farrays$() {
}
$h_Lorg_scalajs_dom_webgl_ANGLE\uff3finstanced\uff3farrays$.prototype = $p;
var $d_Lorg_scalajs_dom_webgl_ANGLE\uff3finstanced\uff3farrays$ = new $TypeData().i($c_Lorg_scalajs_dom_webgl_ANGLE\uff3finstanced\uff3farrays$, "org.scalajs.dom.webgl.ANGLE_instanced_arrays$", ({
  fd: 1,
  ae: 1
}));
var $n_Lorg_scalajs_dom_webgl_ANGLE\uff3finstanced\uff3farrays$;
function $m_Lorg_scalajs_dom_webgl_ANGLE\uff3finstanced\uff3farrays$() {
  if ((!$n_Lorg_scalajs_dom_webgl_ANGLE\uff3finstanced\uff3farrays$)) {
    $n_Lorg_scalajs_dom_webgl_ANGLE\uff3finstanced\uff3farrays$ = new $c_Lorg_scalajs_dom_webgl_ANGLE\uff3finstanced\uff3farrays$();
  }
  return $n_Lorg_scalajs_dom_webgl_ANGLE\uff3finstanced\uff3farrays$;
}
/** @constructor */
function $c_Lorg_scalajs_dom_webgl_OES\uff3felement\uff3findex\uff3fuint$() {
  this.eH = null;
  $ct_Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier__T__(this, "OES_element_index_uint");
}
$p = $c_Lorg_scalajs_dom_webgl_OES\uff3felement\uff3findex\uff3fuint$.prototype = new $h_Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier();
$p.constructor = $c_Lorg_scalajs_dom_webgl_OES\uff3felement\uff3findex\uff3fuint$;
/** @constructor */
function $h_Lorg_scalajs_dom_webgl_OES\uff3felement\uff3findex\uff3fuint$() {
}
$h_Lorg_scalajs_dom_webgl_OES\uff3felement\uff3findex\uff3fuint$.prototype = $p;
var $d_Lorg_scalajs_dom_webgl_OES\uff3felement\uff3findex\uff3fuint$ = new $TypeData().i($c_Lorg_scalajs_dom_webgl_OES\uff3felement\uff3findex\uff3fuint$, "org.scalajs.dom.webgl.OES_element_index_uint$", ({
  fe: 1,
  ae: 1
}));
var $n_Lorg_scalajs_dom_webgl_OES\uff3felement\uff3findex\uff3fuint$;
function $m_Lorg_scalajs_dom_webgl_OES\uff3felement\uff3findex\uff3fuint$() {
  if ((!$n_Lorg_scalajs_dom_webgl_OES\uff3felement\uff3findex\uff3fuint$)) {
    $n_Lorg_scalajs_dom_webgl_OES\uff3felement\uff3findex\uff3fuint$ = new $c_Lorg_scalajs_dom_webgl_OES\uff3felement\uff3findex\uff3fuint$();
  }
  return $n_Lorg_scalajs_dom_webgl_OES\uff3felement\uff3findex\uff3fuint$;
}
/** @constructor */
function $c_Lorg_scalajs_dom_webgl_OES\uff3fvertex\uff3farray\uff3fobject$() {
  this.eH = null;
  $ct_Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier__T__(this, "OES_vertex_array_object");
}
$p = $c_Lorg_scalajs_dom_webgl_OES\uff3fvertex\uff3farray\uff3fobject$.prototype = new $h_Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier();
$p.constructor = $c_Lorg_scalajs_dom_webgl_OES\uff3fvertex\uff3farray\uff3fobject$;
/** @constructor */
function $h_Lorg_scalajs_dom_webgl_OES\uff3fvertex\uff3farray\uff3fobject$() {
}
$h_Lorg_scalajs_dom_webgl_OES\uff3fvertex\uff3farray\uff3fobject$.prototype = $p;
var $d_Lorg_scalajs_dom_webgl_OES\uff3fvertex\uff3farray\uff3fobject$ = new $TypeData().i($c_Lorg_scalajs_dom_webgl_OES\uff3fvertex\uff3farray\uff3fobject$, "org.scalajs.dom.webgl.OES_vertex_array_object$", ({
  ff: 1,
  ae: 1
}));
var $n_Lorg_scalajs_dom_webgl_OES\uff3fvertex\uff3farray\uff3fobject$;
function $m_Lorg_scalajs_dom_webgl_OES\uff3fvertex\uff3farray\uff3fobject$() {
  if ((!$n_Lorg_scalajs_dom_webgl_OES\uff3fvertex\uff3farray\uff3fobject$)) {
    $n_Lorg_scalajs_dom_webgl_OES\uff3fvertex\uff3farray\uff3fobject$ = new $c_Lorg_scalajs_dom_webgl_OES\uff3fvertex\uff3farray\uff3fobject$();
  }
  return $n_Lorg_scalajs_dom_webgl_OES\uff3fvertex\uff3farray\uff3fobject$;
}
/** @constructor */
function $c_Lorg_scalajs_dom_webgl_WEBGL\uff3fdepth\uff3ftexture$() {
  this.eH = null;
  $ct_Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier__T__(this, "WEBGL_depth_texture");
}
$p = $c_Lorg_scalajs_dom_webgl_WEBGL\uff3fdepth\uff3ftexture$.prototype = new $h_Lorg_scalajs_dom_webgl_WebGLExtensionIdentifier();
$p.constructor = $c_Lorg_scalajs_dom_webgl_WEBGL\uff3fdepth\uff3ftexture$;
/** @constructor */
function $h_Lorg_scalajs_dom_webgl_WEBGL\uff3fdepth\uff3ftexture$() {
}
$h_Lorg_scalajs_dom_webgl_WEBGL\uff3fdepth\uff3ftexture$.prototype = $p;
var $d_Lorg_scalajs_dom_webgl_WEBGL\uff3fdepth\uff3ftexture$ = new $TypeData().i($c_Lorg_scalajs_dom_webgl_WEBGL\uff3fdepth\uff3ftexture$, "org.scalajs.dom.webgl.WEBGL_depth_texture$", ({
  fg: 1,
  ae: 1
}));
var $n_Lorg_scalajs_dom_webgl_WEBGL\uff3fdepth\uff3ftexture$;
function $m_Lorg_scalajs_dom_webgl_WEBGL\uff3fdepth\uff3ftexture$() {
  if ((!$n_Lorg_scalajs_dom_webgl_WEBGL\uff3fdepth\uff3ftexture$)) {
    $n_Lorg_scalajs_dom_webgl_WEBGL\uff3fdepth\uff3ftexture$ = new $c_Lorg_scalajs_dom_webgl_WEBGL\uff3fdepth\uff3ftexture$();
  }
  return $n_Lorg_scalajs_dom_webgl_WEBGL\uff3fdepth\uff3ftexture$;
}
/** @constructor */
function $c_s_Console$() {
  this.ni = null;
  $n_s_Console$ = this;
  this.ni = new $c_s_util_DynamicVariable($m_jl_System$Streams$().kR);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.oC = (function() {
  return this.ni.jY;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  fk: 1,
  h6: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$p = $c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$p.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $p;
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.ic(x) ? $thiz.n(x) : default$1.n(x));
}
/** @constructor */
function $c_sci_MapNode() {
}
$p = $c_sci_MapNode.prototype = new $h_sci_Node();
$p.constructor = $c_sci_MapNode;
/** @constructor */
function $h_sci_MapNode() {
}
$h_sci_MapNode.prototype = $p;
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.e3($m_scm_Buffer$().oj(elems));
  } else {
    var it = elems.B();
    while (it.h()) {
      $thiz.e5(it.g());
    }
  }
  return $thiz;
}
function $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V($thiz, runnable) {
  var tl = $thiz.nG;
  var b = tl.bO();
  if ((b instanceof $c_s_concurrent_BatchingExecutor$SyncBatch)) {
    b.rg(runnable);
  } else {
    var i = ((b !== null) ? b : 0);
    if ((i < 16)) {
      tl.gw(((1 + i) | 0));
      try {
        runnable.ef();
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        if (false) {
          $m_s_concurrent_ExecutionContext$().eN.n(e$2);
        } else {
          matchResult3: {
            if ($m_s_util_control_NonFatal$().i3(e$2)) {
              $m_s_concurrent_ExecutionContext$().eN.n(e$2);
              break matchResult3;
            }
            throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.cm : e$2);
          }
        }
      } finally {
        tl.gw(b);
      }
    } else {
      var batch = new $c_s_concurrent_BatchingExecutor$SyncBatch($thiz, runnable);
      tl.gw(batch);
      batch.ef();
      tl.gw(b);
    }
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$ManyCallbacks(first, rest) {
  this.jV = null;
  this.jW = null;
  this.jV = first;
  this.jW = rest;
}
$p = $c_s_concurrent_impl_Promise$ManyCallbacks.prototype = new $h_O();
$p.constructor = $c_s_concurrent_impl_Promise$ManyCallbacks;
/** @constructor */
function $h_s_concurrent_impl_Promise$ManyCallbacks() {
}
$h_s_concurrent_impl_Promise$ManyCallbacks.prototype = $p;
$p.q = (function() {
  return "ManyCallbacks";
});
function $isArrayOf_s_concurrent_impl_Promise$ManyCallbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bO)));
}
var $d_s_concurrent_impl_Promise$ManyCallbacks = new $TypeData().i($c_s_concurrent_impl_Promise$ManyCallbacks, "scala.concurrent.impl.Promise$ManyCallbacks", ({
  bO: 1,
  ak: 1
}));
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.q = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.q = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$p = $c_sr_AbstractFunction2.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $p;
$p.q = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction3() {
}
$p = $c_sr_AbstractFunction3.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
}
$h_sr_AbstractFunction3.prototype = $p;
$p.q = (function() {
  return "<function3>";
});
/** @constructor */
function $c_sr_IntRef(elem) {
  this.R = 0;
  this.R = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.q = (function() {
  return ("" + this.R);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  ho: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.g6 = null;
  this.g6 = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.q = (function() {
  return ("" + this.g6);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  hq: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.hU = 0;
  this.d0 = 0;
  this.nU = 0;
  this.hT = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.hU = $f_T__hashCode__I("Seq");
  this.d0 = $f_T__hashCode__I("Map");
  this.nU = $f_T__hashCode__I("Set");
  this.hT = this.is($m_sci_Nil$(), this.d0);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cf = (function(x, y) {
  return this.oW($m_sr_Statics$().I(x), $m_sr_Statics$().I(y), (-889275714));
});
$p.oN = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.qK(xs, this.hU) : ((xs instanceof $c_sci_List) ? this.qU(xs, this.hU) : this.r9(xs, this.hU)));
});
$p.r0 = (function(xs) {
  if (xs.t()) {
    return this.hT;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.d0;
    xs.cn(accum);
    h = this.H(h, accum.hV);
    h = this.H(h, accum.hW);
    h = this.ec(h, accum.hX);
    return this.bn(h, accum.hY);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  hP: 1,
  hO: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$accum$1() {
  this.hV = 0;
  this.hW = 0;
  this.hY = 0;
  this.hX = 0;
  this.hV = 0;
  this.hW = 0;
  this.hY = 0;
  this.hX = 1;
}
$p = $c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $p;
$p.q = (function() {
  return "<function2>";
});
$p.pM = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cf(k, v);
  this.hV = ((this.hV + h) | 0);
  this.hW = (this.hW ^ h);
  this.hX = Math.imul(this.hX, (1 | h));
  this.hY = ((1 + this.hY) | 0);
});
$p.gg = (function(v1, v2) {
  this.pM(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  hQ: 1,
  bj: 1
}));
function $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, pattern, groupNames) {
  $thiz.jZ = pattern;
  $thiz.k0 = groupNames;
  return $thiz;
}
function $ct_s_util_matching_Regex__T__sci_Seq__($thiz, regex, groupNames) {
  $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, $m_ju_regex_PatternCompiler$().pZ(regex, 0), groupNames);
  return $thiz;
}
/** @constructor */
function $c_s_util_matching_Regex() {
  this.jZ = null;
  this.k0 = null;
}
$p = $c_s_util_matching_Regex.prototype = new $h_O();
$p.constructor = $c_s_util_matching_Regex;
/** @constructor */
function $h_s_util_matching_Regex() {
}
$h_s_util_matching_Regex.prototype = $p;
$p.qt = (function(source) {
  return new $c_s_util_matching_Regex$MatchIterator(source, this, this.k0);
});
$p.qu = (function(source) {
  return new $c_s_util_matching_Regex$$anon$1(this.qt(source));
});
$p.q = (function() {
  return this.jZ.iI;
});
var $d_s_util_matching_Regex = new $TypeData().i($c_s_util_matching_Regex, "scala.util.matching.Regex", ({
  hR: 1,
  a: 1
}));
function $p_s_util_matching_Regex$Match__starts__AI($thiz) {
  if ((!$thiz.o1)) {
    var n = ((1 + $thiz.g8.cM.gO) | 0);
    $m_s_reflect_ManifestFactory$IntManifest$();
    if ((n <= 0)) {
      var $x_1 = new $ac_I(0);
    } else {
      var array = new $ac_I(n);
      var i = 0;
      while ((i < n)) {
        var $x_2 = i;
        var x0 = i;
        array.a[$x_2] = $thiz.g8.f4(x0);
        i = ((1 + i) | 0);
      }
      var $x_1 = array;
    }
    $thiz.o0 = $x_1;
    $thiz.o1 = true;
  }
  return $thiz.o0;
}
function $p_s_util_matching_Regex$Match__ends__AI($thiz) {
  if ((!$thiz.nX)) {
    var n = ((1 + $thiz.g8.cM.gO) | 0);
    $m_s_reflect_ManifestFactory$IntManifest$();
    if ((n <= 0)) {
      var $x_1 = new $ac_I(0);
    } else {
      var array = new $ac_I(n);
      var i = 0;
      while ((i < n)) {
        var $x_2 = i;
        var x0 = i;
        array.a[$x_2] = $thiz.g8.gk(x0);
        i = ((1 + i) | 0);
      }
      var $x_1 = array;
    }
    $thiz.nW = $x_1;
    $thiz.nX = true;
  }
  return $thiz.nW;
}
/** @constructor */
function $c_s_util_matching_Regex$Match(source, matcher, _groupNames) {
  this.nY = null;
  this.g8 = null;
  this.nZ = 0;
  this.nV = 0;
  this.o0 = null;
  this.o1 = false;
  this.nW = null;
  this.nX = false;
  this.nY = source;
  this.g8 = matcher;
  this.nZ = matcher.dI();
  this.nV = matcher.eU();
}
$p = $c_s_util_matching_Regex$Match.prototype = new $h_O();
$p.constructor = $c_s_util_matching_Regex$Match;
/** @constructor */
function $h_s_util_matching_Regex$Match() {
}
$h_s_util_matching_Regex$Match.prototype = $p;
$p.q = (function() {
  return $f_s_util_matching_Regex$MatchData__toString__T(this);
});
$p.kO = (function() {
  return this.nY;
});
$p.dI = (function() {
  return this.nZ;
});
$p.eU = (function() {
  return this.nV;
});
$p.f4 = (function(i) {
  return $p_s_util_matching_Regex$Match__starts__AI(this).a[i];
});
$p.gk = (function(i) {
  return $p_s_util_matching_Regex$Match__ends__AI(this).a[i];
});
$p.oi = (function() {
  $p_s_util_matching_Regex$Match__starts__AI(this);
  $p_s_util_matching_Regex$Match__ends__AI(this);
  return this;
});
var $d_s_util_matching_Regex$Match = new $TypeData().i($c_s_util_matching_Regex$Match, "scala.util.matching.Regex$Match", ({
  hT: 1,
  bT: 1
}));
/** @constructor */
function $c_jl_Class($data) {
  this.bR = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.q = (function() {
  return ((this.bR.Y ? "interface " : (this.bR.X ? "" : "class ")) + this.bR.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  c3: 1,
  a: 1,
  B: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
function $isArrayOf_jl_Error(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
class $c_jl_Exception extends $c_jl_Throwable {
}
/** @constructor */
function $c_ju_AbstractCollection() {
}
$p = $c_ju_AbstractCollection.prototype = new $h_O();
$p.constructor = $c_ju_AbstractCollection;
/** @constructor */
function $h_ju_AbstractCollection() {
}
$h_ju_AbstractCollection.prototype = $p;
$p.aX = (function(o) {
  var _\uff3fself = this.ce();
  while (_\uff3fself.h()) {
    var t = _\uff3fself.g();
    if (((o === null) ? (t === null) : $dp_equals__O__Z(o, t))) {
      return true;
    }
  }
  return false;
});
$p.ke = (function(c) {
  var _\uff3fself = c.ce();
  _return: {
    while (_\uff3fself.h()) {
      if ((!this.aX(_\uff3fself.g()))) {
        var $x_1 = true;
        break _return;
      }
    }
    var $x_1 = false;
  }
  return (!$x_1);
});
$p.q = (function() {
  var _\uff3fself = this.ce();
  var result = "[";
  var first = true;
  while (_\uff3fself.h()) {
    if (first) {
      first = false;
    } else {
      result = (result + ", ");
    }
    result = (("" + result) + _\uff3fself.g());
  }
  return (result + "]");
});
/** @constructor */
function $c_ju_HashMap$KeyIterator(outer) {
  this.gD = 0;
  this.er = 0;
  this.es = null;
  this.gC = null;
  $ct_ju_HashMap$AbstractHashMapIterator__ju_HashMap__(this, outer);
}
$p = $c_ju_HashMap$KeyIterator.prototype = new $h_ju_HashMap$AbstractHashMapIterator();
$p.constructor = $c_ju_HashMap$KeyIterator;
/** @constructor */
function $h_ju_HashMap$KeyIterator() {
}
$h_ju_HashMap$KeyIterator.prototype = $p;
$p.og = (function(node) {
  return node.cg;
});
var $d_ju_HashMap$KeyIterator = new $TypeData().i($c_ju_HashMap$KeyIterator, "java.util.HashMap$KeyIterator", ({
  cC: 1,
  aW: 1,
  a8: 1
}));
/** @constructor */
function $c_ju_HashMap$NodeIterator(outer) {
  this.gD = 0;
  this.er = 0;
  this.es = null;
  this.gC = null;
  $ct_ju_HashMap$AbstractHashMapIterator__ju_HashMap__(this, outer);
}
$p = $c_ju_HashMap$NodeIterator.prototype = new $h_ju_HashMap$AbstractHashMapIterator();
$p.constructor = $c_ju_HashMap$NodeIterator;
/** @constructor */
function $h_ju_HashMap$NodeIterator() {
}
$h_ju_HashMap$NodeIterator.prototype = $p;
$p.og = (function(node) {
  return node;
});
var $d_ju_HashMap$NodeIterator = new $TypeData().i($c_ju_HashMap$NodeIterator, "java.util.HashMap$NodeIterator", ({
  cF: 1,
  aW: 1,
  a8: 1
}));
/** @constructor */
function $c_ju_LinkedList$$anon$1(outer, index$1) {
  this.fc = 0.0;
  this.fb = null;
  this.iF = null;
  this.iE = null;
  this.iE = outer;
  this.fc = index$1;
  this.fb = ((index$1 === $doubleToInt(outer.bp)) ? null : outer.kv(index$1));
  this.iF = ((this.fb !== null) ? null : outer.cL);
}
$p = $c_ju_LinkedList$$anon$1.prototype = new $h_O();
$p.constructor = $c_ju_LinkedList$$anon$1;
/** @constructor */
function $h_ju_LinkedList$$anon$1() {
}
$h_ju_LinkedList$$anon$1.prototype = $p;
$p.h = (function() {
  return (this.fc < $doubleToInt(this.iE.bp));
});
$p.g = (function() {
  if ((this.fc >= $doubleToInt(this.iE.bp))) {
    throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException());
  }
  this.fc = (this.fc + 1.0);
  this.iF = this.fb;
  this.fb = this.fb.gH;
  return this.iF.fd;
});
var $d_ju_LinkedList$$anon$1 = new $TypeData().i($c_ju_LinkedList$$anon$1, "java.util.LinkedList$$anon$1", ({
  cI: 1,
  aX: 1,
  a8: 1
}));
/** @constructor */
function $c_ju_UUID(mostSigBits_$_lo, mostSigBits_$_hi, leastSigBits_$_lo, leastSigBits_$_hi) {
  this.gb = 0;
  this.gc = 0;
  this.g9 = 0;
  this.ga = 0;
  this.gb = mostSigBits_$_lo;
  this.gc = mostSigBits_$_hi;
  this.g9 = leastSigBits_$_lo;
  this.ga = leastSigBits_$_hi;
}
$p = $c_ju_UUID.prototype = new $h_O();
$p.constructor = $c_ju_UUID;
/** @constructor */
function $h_ju_UUID() {
}
$h_ju_UUID.prototype = $p;
$p.q = (function() {
  var mostSigBits_$_lo = this.gb;
  var mostSigBits_$_hi = this.gc;
  var leastSigBits_$_lo = this.g9;
  var leastSigBits_$_hi = this.ga;
  var s = (mostSigBits_$_hi >>> 0.0).toString(16);
  var beginIndex = s.length;
  var $x_5 = "00000000".substring(beginIndex);
  var i = (65535 & (((mostSigBits_$_lo >>> 16) | 0) | (mostSigBits_$_hi << 16)));
  var s$1 = (i >>> 0.0).toString(16);
  var beginIndex$1 = s$1.length;
  var $x_4 = "0000".substring(beginIndex$1);
  var i$1 = (65535 & mostSigBits_$_lo);
  var s$2 = (i$1 >>> 0.0).toString(16);
  var beginIndex$2 = s$2.length;
  var $x_3 = "0000".substring(beginIndex$2);
  var i$2 = (65535 & ((leastSigBits_$_hi >>> 16) | 0));
  var s$3 = (i$2 >>> 0.0).toString(16);
  var beginIndex$3 = s$3.length;
  var $x_2 = "0000".substring(beginIndex$3);
  var i$3 = (65535 & leastSigBits_$_hi);
  var s$4 = (i$3 >>> 0.0).toString(16);
  var beginIndex$4 = s$4.length;
  var $x_1 = "0000".substring(beginIndex$4);
  var s$5 = (leastSigBits_$_lo >>> 0.0).toString(16);
  var beginIndex$5 = s$5.length;
  return ((((((((((("" + $x_5) + s) + "-") + (("" + $x_4) + s$1)) + "-") + (("" + $x_3) + s$2)) + "-") + (("" + $x_2) + s$3)) + "-") + (("" + $x_1) + s$4)) + (("" + "00000000".substring(beginIndex$5)) + s$5));
});
$p.A = (function() {
  var value_$_lo = this.gb;
  var value_$_hi = this.gc;
  var value$1_$_lo = this.g9;
  var value$1_$_hi = this.ga;
  return ((value_$_lo ^ value_$_hi) ^ (value$1_$_lo ^ value$1_$_hi));
});
$p.E = (function(that) {
  if ((that instanceof $c_ju_UUID)) {
    var x_$_lo = this.gb;
    var x_$_hi = this.gc;
    var $x_1 = that;
    var x$1_$_lo = $x_1.gb;
    var x$1_$_hi = $x_1.gc;
    if ((((x_$_lo ^ x$1_$_lo) | (x_$_hi ^ x$1_$_hi)) === 0)) {
      var x$2_$_lo = this.g9;
      var x$2_$_hi = this.ga;
      var $x_2 = that;
      var x$3_$_lo = $x_2.g9;
      var x$3_$_hi = $x_2.ga;
      return (((x$2_$_lo ^ x$3_$_lo) | (x$2_$_hi ^ x$3_$_hi)) === 0);
    } else {
      return false;
    }
  } else {
    return false;
  }
});
function $isArrayOf_ju_UUID(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aZ)));
}
var $d_ju_UUID = new $TypeData().i($c_ju_UUID, "java.util.UUID", ({
  aZ: 1,
  a: 1,
  A: 1
}));
function $ct_Lorg_loveroo_webgl_engine_render_Shader__Lorg_loveroo_webgl_engine_render_VertexShaderComponent__Lorg_loveroo_webgl_engine_render_FragmentShaderComponent__($thiz, vertex, fragment) {
  $f_Lorg_loveroo_webgl_engine_data_resource_Resource__$init$__V($thiz);
  var any = ((vertex === null) ? null : vertex.ex);
  var any$1 = ((fragment === null) ? null : fragment.ex);
  $thiz.bq = new $c_Lorg_loveroo_webgl_engine_render_ShaderID(((any === null) ? "" : any), ((any$1 === null) ? "" : any$1));
  $thiz.lC = ((((!(vertex === null)) | 0) + ((!(fragment === null)) | 0)) | 0);
  $thiz.h6 = 0;
  $thiz.j6 = "";
  $thiz.j5 = "";
  $p_Lorg_loveroo_webgl_engine_render_Shader__loadShader__Lorg_loveroo_webgl_engine_render_ShaderComponent__F1__jl_Void($thiz, vertex, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((s$2) => {
    $thiz.j6 = s$2;
  })));
  $p_Lorg_loveroo_webgl_engine_render_Shader__loadShader__Lorg_loveroo_webgl_engine_render_ShaderComponent__F1__jl_Void($thiz, fragment, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((s$2$1) => {
    $thiz.j5 = s$2$1;
  })));
  return $thiz;
}
function $ct_Lorg_loveroo_webgl_engine_render_Shader__T__T__($thiz, vertex, fragment) {
  $ct_Lorg_loveroo_webgl_engine_render_Shader__Lorg_loveroo_webgl_engine_render_VertexShaderComponent__Lorg_loveroo_webgl_engine_render_FragmentShaderComponent__($thiz, new $c_Lorg_loveroo_webgl_engine_render_VertexShaderComponent(vertex), new $c_Lorg_loveroo_webgl_engine_render_FragmentShaderComponent(fragment));
  return $thiz;
}
function $ct_Lorg_loveroo_webgl_engine_render_Shader__T__($thiz, id) {
  $ct_Lorg_loveroo_webgl_engine_render_Shader__T__T__($thiz, id, id);
  return $thiz;
}
function $p_Lorg_loveroo_webgl_engine_render_Shader__loadShader__Lorg_loveroo_webgl_engine_render_ShaderComponent__F1__jl_Void($thiz, component, setter) {
  return $p_Lorg_loveroo_webgl_engine_render_Shader__loadIncludes$1__ju_HashMap__sr_IntRef__sr_ObjectRef__sr_IntRef__F1__T__jl_Void($thiz, $ct_ju_HashMap__(new $c_ju_HashMap()), new $c_sr_IntRef(0), new $c_sr_ObjectRef(null), new $c_sr_IntRef(0), setter, ((component.ex + ".") + component.h8));
}
function $p_Lorg_loveroo_webgl_engine_render_Shader__replaceIncludes$1__ju_HashSet__ju_HashMap__T__T($thiz, replaced$1, includes$3, str) {
  var this$1 = $m_Lorg_loveroo_webgl_engine_render_Shader$().j7;
  var rit = new $c_s_util_matching_Regex$MatchIterator$$anon$4(new $c_s_util_matching_Regex$MatchIterator(str, this$1, this$1.k0));
  while (rit.h()) {
    var x0 = rit.ij();
    var id = $f_s_util_matching_Regex$MatchData__group__I__T(x0, 1);
    var replacement = ((!replaced$1.aX(id)) ? (replaced$1.w(id), $p_Lorg_loveroo_webgl_engine_render_Shader__replaceIncludes$1__ju_HashSet__ju_HashMap__T__T($thiz, replaced$1, includes$3, $p_ju_HashMap__getOrDefaultImpl__O__O__O(includes$3, id, null))) : "");
    rit.ky().pJ(rit.i0, replacement);
  }
  return $f_s_util_matching_Regex$Replacement__replaced__T(rit);
}
function $p_Lorg_loveroo_webgl_engine_render_Shader__loadIncludes$1__ju_HashMap__sr_IntRef__sr_ObjectRef__sr_IntRef__F1__T__jl_Void($thiz, includes$1, total$1, root$1, loaded$1, setter$1, path) {
  if (includes$1.d4(path)) {
    return (void 0);
  }
  total$1.R = ((1 + total$1.R) | 0);
  return $m_Lorg_loveroo_webgl_Game$().y.x.hv.oz((($m_Lorg_loveroo_webgl_engine_data_resource_ResourceLoader$().ls + "/") + path), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((s$2) => {
    if ((path === null)) {
      var $x_1 = 0;
    } else {
      var originalHash = $f_T__hashCode__I(path);
      var $x_1 = (originalHash ^ ((originalHash >>> 16) | 0));
    }
    includes$1.bA(path, s$2, $x_1, false);
    if ((root$1.g6 === null)) {
      root$1.g6 = s$2;
    }
    var this$4 = $m_Lorg_loveroo_webgl_engine_render_Shader$().j7.qu(s$2);
    while (this$4.h()) {
      $p_Lorg_loveroo_webgl_engine_render_Shader__loadIncludes$1__ju_HashMap__sr_IntRef__sr_ObjectRef__sr_IntRef__F1__T__jl_Void($thiz, includes$1, total$1, root$1, loaded$1, setter$1, $f_s_util_matching_Regex$MatchData__group__I__T(this$4.g(), 1));
    }
    loaded$1.R = ((1 + loaded$1.R) | 0);
    if ((loaded$1.R >= total$1.R)) {
      var replaced = $ct_ju_HashSet__I__(new $c_ju_HashSet(), ((total$1.R - 1) | 0));
      setter$1.n($p_Lorg_loveroo_webgl_engine_render_Shader__replaceIncludes$1__ju_HashSet__ju_HashMap__T__T($thiz, replaced, includes$1, root$1.g6));
      $thiz.h6 = ((1 + $thiz.h6) | 0);
      return (($thiz.h6 >= $thiz.lC) ? $thiz.bz() : (void 0));
    } else {
      return (void 0);
    }
  })));
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_Shader() {
  this.lA = null;
  this.h7 = false;
  this.lB = null;
  this.bq = null;
  this.lC = 0;
  this.h6 = 0;
  this.j6 = null;
  this.j5 = null;
}
$p = $c_Lorg_loveroo_webgl_engine_render_Shader.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_Shader;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_Shader() {
}
$h_Lorg_loveroo_webgl_engine_render_Shader.prototype = $p;
$p.gq = (function() {
  return this.lA;
});
$p.il = (function() {
  return this.h7;
});
$p.gr = (function() {
  return this.lB;
});
$p.im = (function(x$1) {
  this.h7 = x$1;
});
$p.kD = (function(x$0) {
  this.lA = x$0;
});
$p.kE = (function(x$0) {
  this.lB = x$0;
});
$p.bz = (function() {
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().md;
  cmd.aw(this);
  this$2.j = ((1 + this$2.j) | 0);
  return $f_Lorg_loveroo_webgl_engine_data_resource_Resource__postCreate__jl_Void(this);
});
$p.aY = (function(id, value) {
  return $f_Lorg_loveroo_webgl_engine_data_resource_Resource__buffer__F0__jl_Void(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
    var this$3 = EngineRuntime_this.ay;
    if ((this$3.o().l() <= this$3.j)) {
      this$3.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
    }
    var cmd = this$3.o().s(this$3.j);
    cmd.aJ();
    cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().mk;
    cmd.aw(this);
    cmd.aw(id);
    cmd.aw(value);
    this$3.j = ((1 + this$3.j) | 0);
  })));
});
$p.pV = (function() {
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().m8;
  cmd.aw(this);
  this$2.j = ((1 + this$2.j) | 0);
});
$p.eT = (function() {
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().mg;
  cmd.aw(this);
  this$2.j = ((1 + this$2.j) | 0);
});
var $d_Lorg_loveroo_webgl_engine_render_Shader = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_Shader, "org.loveroo.webgl.engine.render.Shader", ({
  dH: 1,
  H: 1,
  R: 1
}));
function $ct_Lorg_loveroo_webgl_engine_render_Texture__T__Lorg_loveroo_webgl_engine_render_data_ColorFormat__Lorg_loveroo_webgl_engine_render_data_TextureType__($thiz, id, colorFormat, textureType) {
  $thiz.ak = id;
  $thiz.ci = colorFormat;
  $thiz.br = textureType;
  $f_Lorg_loveroo_webgl_engine_data_resource_Resource__$init$__V($thiz);
  return $thiz;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_Texture() {
  this.ez = null;
  this.bX = false;
  this.eA = null;
  this.ak = null;
  this.ci = null;
  this.br = null;
}
$p = $c_Lorg_loveroo_webgl_engine_render_Texture.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_Texture;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_Texture() {
}
$h_Lorg_loveroo_webgl_engine_render_Texture.prototype = $p;
$p.gq = (function() {
  return this.ez;
});
$p.il = (function() {
  return this.bX;
});
$p.gr = (function() {
  return this.eA;
});
$p.im = (function(x$1) {
  this.bX = x$1;
});
$p.kD = (function(x$0) {
  this.ez = x$0;
});
$p.kE = (function(x$0) {
  this.eA = x$0;
});
$p.kG = (function() {
  return $f_Lorg_loveroo_webgl_engine_data_resource_Resource__postCreate__jl_Void(this);
});
$p.pU = (function(slot) {
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().m9;
  cmd.aw(slot);
  cmd.aw(this);
  this$2.j = ((1 + this$2.j) | 0);
});
$p.bz = (function() {
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().me;
  cmd.aw(this);
  this$2.j = ((1 + this$2.j) | 0);
});
$p.eT = (function() {
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().mh;
  cmd.aw(this);
  this$2.j = ((1 + this$2.j) | 0);
});
function $f_Lorg_loveroo_webgl_game_entity_SpriteEntity__renderEntity__Lorg_loveroo_webgl_engine_math_Vec3f__jl_Void($thiz, blend) {
  $thiz.jv.oD(blend);
  return $thiz.jv.bP(0.0);
}
/** @constructor */
function $c_s_Predef$() {
  this.pm = null;
  $n_s_Predef$ = this;
  $m_sci_List$();
  this.pm = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.rr = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  fs: 1,
  fn: 1,
  fo: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.b3;
      break;
    }
    case 1: {
      return $thiz.aL;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).q1(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().a4 : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.B();
  while ($thiz.h()) {
    if ((!those.h())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().i($thiz.g(), those.g()))) {
      return false;
    }
  }
  return (!those.h());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.a4 = null;
  $n_sc_Iterator$ = this;
  this.a4 = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  fC: 1,
  a: 1,
  a7: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $ct_sc_MapFactory$Delegate__sc_MapFactory__($thiz, delegate) {
  $thiz.nt = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.nt = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
/** @constructor */
function $c_sci_BitmapIndexedMapNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
  this.N = 0;
  this.W = 0;
  this.ai = null;
  this.bv = null;
  this.aM = 0;
  this.bf = 0;
  this.N = dataMap;
  this.W = nodeMap;
  this.ai = content;
  this.bv = originalHashes;
  this.aM = size;
  this.bf = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.l = (function() {
  return this.aM;
});
$p.dC = (function() {
  return this.bf;
});
$p.cF = (function(index) {
  return this.ai.a[(index << 1)];
});
$p.cp = (function(index) {
  return this.ai.a[((1 + (index << 1)) | 0)];
});
$p.op = (function(index) {
  return new $c_T2(this.ai.a[(index << 1)], this.ai.a[((1 + (index << 1)) | 0)]);
});
$p.eY = (function(index) {
  return this.bv.a[index];
});
$p.co = (function(index) {
  return this.ai.a[((((this.ai.a.length - 1) | 0) - index) | 0)];
});
$p.k6 = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().dH(keyHash, shift);
  var bitpos = $m_sci_Node$().d3(mask);
  if (((this.N & bitpos) !== 0)) {
    var index = $m_sci_Node$().cd(this.N, mask, bitpos);
    if ($m_sr_BoxesRunTime$().i(key, this.cF(index))) {
      return this.cp(index);
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
    }
  } else if (((this.W & bitpos) !== 0)) {
    return this.co($m_sci_Node$().cd(this.W, mask, bitpos)).k6(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.i9 = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().dH(keyHash, shift);
  var bitpos = $m_sci_Node$().d3(mask);
  if (((this.N & bitpos) !== 0)) {
    var index = $m_sci_Node$().cd(this.N, mask, bitpos);
    return ($m_sr_BoxesRunTime$().i(key, this.cF(index)) ? new $c_s_Some(this.cp(index)) : $m_s_None$());
  } else {
    return (((this.W & bitpos) !== 0) ? this.co($m_sci_Node$().cd(this.W, mask, bitpos)).i9(key, originalHash, keyHash, ((5 + shift) | 0)) : $m_s_None$());
  }
});
$p.kn = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().dH(keyHash, shift);
  var bitpos = $m_sci_Node$().d3(mask);
  if (((this.N & bitpos) !== 0)) {
    var index = $m_sci_Node$().cd(this.N, mask, bitpos);
    return ($m_sr_BoxesRunTime$().i(key, this.cF(index)) ? this.cp(index) : f.av());
  } else {
    return (((this.W & bitpos) !== 0) ? this.co($m_sci_Node$().cd(this.W, mask, bitpos)).kn(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.av());
  }
});
$p.kf = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().dH(keyHash, shift);
  var bitpos = $m_sci_Node$().d3(mask);
  if (((this.N & bitpos) !== 0)) {
    var index = $m_sci_Node$().cd(this.N, mask, bitpos);
    return ((this.bv.a[index] === originalHash) && $m_sr_BoxesRunTime$().i(key, this.cF(index)));
  } else {
    return (((this.W & bitpos) !== 0) && this.co($m_sci_Node$().cd(this.W, mask, bitpos)).kf(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.oX = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().dH(keyHash, shift);
  var bitpos = $m_sci_Node$().d3(mask);
  if (((this.N & bitpos) !== 0)) {
    var index = $m_sci_Node$().cd(this.N, mask, bitpos);
    var key0 = this.cF(index);
    var key0UnimprovedHash = this.eY(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().i(key0, key))) {
      if (replaceValue) {
        var value0 = this.cp(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.q6(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.cp(index);
      var key0Hash = $m_sc_Hashing$().cc(key0UnimprovedHash);
      return this.q4(bitpos, key0Hash, this.kz(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.W & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().cd(this.W, mask, bitpos);
    var subNode = this.co(index$2);
    var subNodeNew$2 = subNode.oY(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.q5(bitpos, subNode, subNodeNew$2));
  } else {
    return this.q3(bitpos, key, originalHash, keyHash, value);
  }
});
$p.kz = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().ok(new $c_sjsr_WrappedVarArgs([new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().dH(keyHash0, shift);
    var mask1 = $m_sci_Node$().dH(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().d3(mask0) | $m_sci_Node$().d3(mask1));
      if ((mask0 < mask1)) {
        var xs = new $c_sjsr_WrappedVarArgs([key0, value0, key1, value1]);
        var array$2 = new $ac_O(xs.G());
        var iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(xs));
        var i = 0;
        while ((iterator.bt > 0)) {
          array$2.a[i] = iterator.g();
          i = ((1 + i) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$2, new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash);
      } else {
        var xs$1 = new $c_sjsr_WrappedVarArgs([key1, value1, key0, value0]);
        var array$4 = new $ac_O(xs$1.G());
        var iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(xs$1));
        var i$1 = 0;
        while ((iterator$1.bt > 0)) {
          array$4.a[i$1] = iterator$1.g();
          i$1 = ((1 + i$1) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$4, new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash);
      }
    } else {
      var nodeMap = $m_sci_Node$().d3(mask0);
      var node = this.kz(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      var xs$2 = new $c_sjsr_WrappedVarArgs([node]);
      var array$6 = new $ac_O(xs$2.G());
      var iterator$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(xs$2));
      var i$2 = 0;
      while ((iterator$2.bt > 0)) {
        array$6.a[i$2] = iterator$2.g();
        i$2 = ((1 + i$2) | 0);
      }
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().jG, node.l(), node.dC());
    }
  }
});
$p.kq = (function() {
  return (this.W !== 0);
});
$p.kA = (function() {
  return $m_jl_Integer$().cD(this.W);
});
$p.ib = (function() {
  return (this.N !== 0);
});
$p.kF = (function() {
  return $m_jl_Integer$().cD(this.N);
});
$p.gj = (function(bitpos) {
  return $m_jl_Integer$().cD((this.N & ((bitpos - 1) | 0)));
});
$p.kB = (function(bitpos) {
  return $m_jl_Integer$().cD((this.W & ((bitpos - 1) | 0)));
});
$p.q6 = (function(bitpos, newKey, newValue) {
  var dataIx = this.gj(bitpos);
  var idx = (dataIx << 1);
  var src = this.ai;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.m(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.N, this.W, dst, this.bv, this.aM, this.bf);
});
$p.q5 = (function(bitpos, oldNode, newNode) {
  var idx = ((((this.ai.a.length - 1) | 0) - this.kB(bitpos)) | 0);
  var src = this.ai;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.m(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.N, this.W, dst, this.bv, ((((this.aM - oldNode.l()) | 0) + newNode.l()) | 0), ((((this.bf - oldNode.dC()) | 0) + newNode.dC()) | 0));
});
$p.q3 = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.gj(bitpos);
  var idx = (dataIx << 1);
  var src = this.ai;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.m(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.m(idx, dst, destPos, length);
  var dstHashes = this.qO(this.bv, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.N | bitpos), this.W, dst, dstHashes, ((1 + this.aM) | 0), ((this.bf + keyHash) | 0));
});
$p.r1 = (function(bitpos, keyHash, node) {
  var dataIx = this.gj(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.ai.a.length - 2) | 0) - this.kB(bitpos)) | 0);
  var src = this.ai;
  var dst = new $ac_O(((src.a.length - 1) | 0));
  src.m(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.m(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.a.length - idxNew) | 0) - 2) | 0);
  src.m(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.oI(this.bv, dataIx);
  this.N = (this.N ^ bitpos);
  this.W = (this.W | bitpos);
  this.ai = dst;
  this.bv = dstHashes;
  this.aM = ((((this.aM - 1) | 0) + node.l()) | 0);
  this.bf = ((((this.bf - keyHash) | 0) + node.dC()) | 0);
  return this;
});
$p.q4 = (function(bitpos, keyHash, node) {
  var dataIx = this.gj(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.ai.a.length - 2) | 0) - this.kB(bitpos)) | 0);
  var src = this.ai;
  var dst = new $ac_O(((src.a.length - 1) | 0));
  src.m(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.m(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.a.length - idxNew) | 0) - 2) | 0);
  src.m(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.oI(this.bv, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.N ^ bitpos), (this.W | bitpos), dst, dstHashes, ((((this.aM - 1) | 0) + node.l()) | 0), ((((this.bf - keyHash) | 0) + node.dC()) | 0));
});
$p.cn = (function(f) {
  var iN = $m_jl_Integer$().cD(this.N);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.gg(this.cF(i$1), this.cp(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().cD(this.W);
  var j = 0;
  while ((j < jN)) {
    this.co(j).cn(f);
    j = ((1 + j) | 0);
  }
});
$p.kk = (function(f) {
  var i = 0;
  var iN = $m_jl_Integer$().cD(this.N);
  while ((i < iN)) {
    f.o7(this.cF(i), this.cp(i), this.eY(i));
    i = ((1 + i) | 0);
  }
  var jN = $m_jl_Integer$().cD(this.W);
  var j = 0;
  while ((j < jN)) {
    this.co(j).kk(f);
    j = ((1 + j) | 0);
  }
});
$p.E = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bf === that.bf) && (this.W === that.W)) && (this.N === that.N)) && (this.aM === that.aM)) && $m_ju_Arrays$().qj(this.bv, that.bv))) {
      var a1 = this.ai;
      var a2 = that.ai;
      var length = this.ai.a.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().i(a1.a[i], a2.a[i]);
          i = ((1 + i) | 0);
        }
        return isEqual;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.A = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.q = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.ob = (function() {
  var this$1 = this.ai;
  var contentClone = this$1.d();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().cD(this.N) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].oc();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.N, this.W, contentClone, this.bv.d(), this.aM, this.bf);
});
$p.km = (function(index) {
  return this.co(index);
});
$p.oY = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.oX(key, value, originalHash, hash, shift, replaceValue);
});
$p.oc = (function() {
  return this.ob();
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.br)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  br: 1,
  bB: 1,
  aB: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.hO = 0;
  this.dm = 0;
  this.a5 = null;
  this.hO = originalHash;
  this.dm = hash;
  this.a5 = content;
  $m_s_Predef$().rr((this.a5.G() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.eZ = (function(key) {
  var iter = this.a5.B();
  var i = 0;
  while (iter.h()) {
    if ($m_sr_BoxesRunTime$().i(iter.g().b3, key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.l = (function() {
  return this.a5.G();
});
$p.k6 = (function(key, originalHash, hash, shift) {
  var this$1 = this.i9(key, originalHash, hash, shift);
  return (this$1.t() ? $m_sc_Iterator$().a4.g() : this$1.bO());
});
$p.i9 = (function(key, originalHash, hash, shift) {
  if ((this.dm === hash)) {
    var index = this.eZ(key);
    return ((index >= 0) ? new $c_s_Some(this.a5.V(index).aL) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.kn = (function(key, originalHash, hash, shift, f) {
  if ((this.dm === hash)) {
    var x36 = this.eZ(key);
    if ((x36 === (-1))) {
      return f.av();
    }
    return this.a5.V(x36).aL;
  } else {
    return f.av();
  }
});
$p.kf = (function(key, originalHash, hash, shift) {
  return ((this.dm === hash) && (this.eZ(key) >= 0));
});
$p.oY = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.eZ(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.a5.V(index).aL, value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.a5.dK(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.a5.dB(new $c_T2(key, value))));
});
$p.kq = (function() {
  return false;
});
$p.kA = (function() {
  return 0;
});
$p.co = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.ib = (function() {
  return true;
});
$p.kF = (function() {
  return this.a5.G();
});
$p.cF = (function(index) {
  return this.a5.V(index).b3;
});
$p.cp = (function(index) {
  return this.a5.V(index).aL;
});
$p.op = (function(index) {
  return this.a5.V(index);
});
$p.eY = (function(index) {
  return this.hO;
});
$p.cn = (function(f) {
  this.a5.e9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.b3;
    var v = x$1$2.aL;
    return f.gg(k, v);
  })));
});
$p.kk = (function(f) {
  var iter = this.a5.B();
  while (iter.h()) {
    var next = iter.g();
    f.o7(next.b3, next.aL, this.hO);
  }
});
$p.E = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.dm === that.dm) && (this.a5.G() === that.a5.G()))) {
      var iter = this.a5.B();
      while (iter.h()) {
        var \u03b412$;
        var \u03b412$ = iter.g();
        var key = \u03b412$.b3;
        var value = \u03b412$.aL;
        var index = that.eZ(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().i(value, that.a5.V(index).aL)))) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.A = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.q = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.dC = (function() {
  return Math.imul(this.a5.G(), this.dm);
});
$p.km = (function(index) {
  return this.co(index);
});
$p.oc = (function() {
  return new $c_sci_HashCollisionMapNode(this.hO, this.dm, this.a5);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bt)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  bt: 1,
  bB: 1,
  aB: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.jJ = null;
  $n_sci_HashMap$ = this;
  this.jJ = new $c_sci_HashMap($m_sci_MapNode$().nx);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  fV: 1,
  a: 1,
  ax: 1
}));
var $n_sci_HashMap$;
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$();
  }
  return $n_sci_HashMap$;
}
/** @constructor */
function $c_sci_Map$() {
}
$p = $c_sci_Map$.prototype = new $h_O();
$p.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
}
$h_sci_Map$.prototype = $p;
$p.qy = (function(it) {
  if ($is_sci_Iterable(it)) {
    if (it.t()) {
      return $m_sci_Map$EmptyMap$();
    }
  }
  if ((it instanceof $c_sci_HashMap)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map1)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map2)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map3)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map4)) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  return new $c_sci_MapBuilderImpl().o3(it).oK();
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  g2: 1,
  a: 1,
  ax: 1
}));
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$();
  }
  return $n_sci_Map$;
}
function $f_scm_Builder__sizeHint__sc_IterableOnce__I__V($thiz, coll, delta) {
  var x1 = coll.Q();
  if ((x1 === (-1))) {
    return (void 0);
  }
  var that = ((x1 + delta) | 0);
  $thiz.eg(((that < 0) ? 0 : that));
}
/** @constructor */
function $c_s_concurrent_BatchingExecutor$SyncBatch(outer, runnable) {
  this.g0 = null;
  this.g1 = null;
  this.dz = 0;
  this.po = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.po = outer;
  $ct_s_concurrent_BatchingExecutor$AbstractBatch__jl_Runnable__Ajl_Runnable__I__(this, runnable, $m_s_concurrent_BatchingExecutorStatics$().nD, 1);
}
$p = $c_s_concurrent_BatchingExecutor$SyncBatch.prototype = new $h_s_concurrent_BatchingExecutor$AbstractBatch();
$p.constructor = $c_s_concurrent_BatchingExecutor$SyncBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$SyncBatch() {
}
$h_s_concurrent_BatchingExecutor$SyncBatch.prototype = $p;
$p.ef = (function() {
  while (true) {
    try {
      this.rs(1024);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      if (false) {
        $m_s_concurrent_ExecutionContext$().eN.n(e$2);
      } else {
        matchResult2: {
          if ($m_s_util_control_NonFatal$().i3(e$2)) {
            $m_s_concurrent_ExecutionContext$().eN.n(e$2);
            break matchResult2;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.cm : e$2);
        }
      }
    }
    if ((this.dz > 0)) {
    } else {
      return (void 0);
    }
  }
});
function $isArrayOf_s_concurrent_BatchingExecutor$SyncBatch(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bK)));
}
var $d_s_concurrent_BatchingExecutor$SyncBatch = new $TypeData().i($c_s_concurrent_BatchingExecutor$SyncBatch, "scala.concurrent.BatchingExecutor$SyncBatch", ({
  bK: 1,
  gV: 1,
  ap: 1
}));
/** @constructor */
function $c_s_concurrent_impl_Promise$Link(to) {
  this.M = null;
  $ct_ju_concurrent_atomic_AtomicReference__O__(this, to);
}
$p = $c_s_concurrent_impl_Promise$Link.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_impl_Promise$Link;
/** @constructor */
function $h_s_concurrent_impl_Promise$Link() {
}
$h_s_concurrent_impl_Promise$Link.prototype = $p;
$p.f3 = (function(owner) {
  var c = this.M;
  var target$tailLocal1 = c;
  var current$tailLocal1 = c;
  while (true) {
    var value = target$tailLocal1.M;
    if ($is_s_concurrent_impl_Promise$Callbacks(value)) {
      if (this.gi(current$tailLocal1, target$tailLocal1)) {
        return target$tailLocal1;
      } else {
        current$tailLocal1 = this.M;
      }
    } else if ((value instanceof $c_s_concurrent_impl_Promise$Link)) {
      target$tailLocal1 = value.M;
    } else {
      owner.rI(value);
      return owner;
    }
  }
});
function $isArrayOf_s_concurrent_impl_Promise$Link(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bN)));
}
var $d_s_concurrent_impl_Promise$Link = new $TypeData().i($c_s_concurrent_impl_Promise$Link, "scala.concurrent.impl.Promise$Link", ({
  bN: 1,
  av: 1,
  a: 1
}));
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.h7)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.nL = null;
  this.nL = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.av = (function() {
  return (0, this.nL)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  hg: 1,
  hf: 1,
  fl: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.nM = null;
  this.nM = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.n = (function(x0) {
  return (0, this.nM)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  hi: 1,
  hh: 1,
  h: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.nN = null;
  this.nN = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.gg = (function(x0, x1) {
  return (0, this.nN)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  hk: 1,
  hj: 1,
  bj: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.nO = null;
  this.nO = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.o7 = (function(x0, x1, x2) {
  return (0, this.nO)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  hm: 1,
  hl: 1,
  fm: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$p = $c_sjs_js_Any$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $p;
$p.qA = (function(f) {
  return (() => f.av());
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  hA: 1,
  hB: 1,
  hC: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
function $isArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hL)));
}
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$p = $c_Ljava_io_OutputStream.prototype = new $h_O();
$p.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $p;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  bY: 1,
  an: 1,
  e: 1,
  a: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  bZ: 1,
  a: 1,
  A: 1,
  B: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return ((that instanceof $Char) && ($thiz === that.c));
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aP)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  aP: 1,
  a: 1,
  A: 1,
  B: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c9)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cc)));
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  o: 1,
  i: 1,
  e: 1,
  a: 1
}));
/** @constructor */
function $c_jl_StringBuilder() {
  this.K = null;
  this.K = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.q = (function() {
  return this.K;
});
$p.G = (function() {
  return this.K.length;
});
$p.o9 = (function(index) {
  return this.K.charCodeAt(index);
});
$p.oQ = (function(start, end) {
  return this.oS(start, end);
});
$p.oS = (function(start, end) {
  var this$1 = this.K;
  return this$1.substring(start, end);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  cl: 1,
  am: 1,
  aN: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.co)));
}
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aU)));
}
function $ct_ju_AbstractRandomAccessListIterator__I__I__I__($thiz, i, start, end) {
  $thiz.eq = i;
  $thiz.iA = end;
  $thiz.gB = (-1);
  return $thiz;
}
/** @constructor */
function $c_ju_AbstractRandomAccessListIterator() {
  this.eq = 0;
  this.iA = 0;
  this.gB = 0;
}
$p = $c_ju_AbstractRandomAccessListIterator.prototype = new $h_O();
$p.constructor = $c_ju_AbstractRandomAccessListIterator;
/** @constructor */
function $h_ju_AbstractRandomAccessListIterator() {
}
$h_ju_AbstractRandomAccessListIterator.prototype = $p;
$p.h = (function() {
  return (this.eq < this.iA);
});
$p.g = (function() {
  if ((!this.h())) {
    throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException());
  }
  this.gB = this.eq;
  this.eq = ((1 + this.eq) | 0);
  return this.s(this.gB);
});
function $is_ju_List(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.a9)));
}
function $isArrayOf_ju_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
class $c_ju_concurrent_ExecutionException extends $c_jl_Exception {
  constructor(message, cause) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_ju_concurrent_ExecutionException = new $TypeData().i($c_ju_concurrent_ExecutionException, "java.util.concurrent.ExecutionException", ({
  cO: 1,
  i: 1,
  e: 1,
  a: 1
}));
function $ct_Lorg_loveroo_webgl_engine_render_EmptyTexture__T__Lorg_loveroo_webgl_engine_render_data_ColorFormat__Lorg_loveroo_webgl_engine_render_data_TextureType__I__I__($thiz, id, colorFormat, textureType, width, height) {
  $thiz.dR = width;
  $thiz.dQ = height;
  $ct_Lorg_loveroo_webgl_engine_render_Texture__T__Lorg_loveroo_webgl_engine_render_data_ColorFormat__Lorg_loveroo_webgl_engine_render_data_TextureType__($thiz, id, colorFormat, textureType);
  $thiz.bz();
  return $thiz;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_EmptyTexture() {
  this.ez = null;
  this.bX = false;
  this.eA = null;
  this.ak = null;
  this.ci = null;
  this.br = null;
  this.dR = 0;
  this.dQ = 0;
}
$p = $c_Lorg_loveroo_webgl_engine_render_EmptyTexture.prototype = new $h_Lorg_loveroo_webgl_engine_render_Texture();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_EmptyTexture;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_EmptyTexture() {
}
$h_Lorg_loveroo_webgl_engine_render_EmptyTexture.prototype = $p;
$p.kP = (function() {
  return this.dR;
});
$p.kr = (function() {
  return this.dQ;
});
$p.bz = (function() {
  $c_Lorg_loveroo_webgl_engine_render_Texture.prototype.bz.call(this);
  return this.kG();
});
function $isArrayOf_Lorg_loveroo_webgl_engine_render_EmptyTexture(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_Lorg_loveroo_webgl_engine_render_EmptyTexture = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_EmptyTexture, "org.loveroo.webgl.engine.render.EmptyTexture", ({
  ab: 1,
  ac: 1,
  H: 1,
  R: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_ImageTexture(id) {
  this.ez = null;
  this.bX = false;
  this.eA = null;
  this.ak = null;
  this.ci = null;
  this.br = null;
  this.fo = null;
  $ct_Lorg_loveroo_webgl_engine_render_Texture__T__Lorg_loveroo_webgl_engine_render_data_ColorFormat__Lorg_loveroo_webgl_engine_render_data_TextureType__(this, id, $m_Lorg_loveroo_webgl_engine_render_Renderer$().cN.dT, $m_Lorg_loveroo_webgl_engine_render_Renderer$().fq.ht);
  this.fo = null;
  $m_Lorg_loveroo_webgl_Game$().y.x.hv.qV(id, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((i$2) => {
    this.fo = i$2;
    this.bz();
    return $f_Lorg_loveroo_webgl_engine_data_resource_Resource__postCreate__jl_Void(this);
  })));
}
$p = $c_Lorg_loveroo_webgl_engine_render_ImageTexture.prototype = new $h_Lorg_loveroo_webgl_engine_render_Texture();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_ImageTexture;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_ImageTexture() {
}
$h_Lorg_loveroo_webgl_engine_render_ImageTexture.prototype = $p;
$p.kP = (function() {
  var any = this.fo;
  var any$1 = ((any === null) ? null : (any.width | 0));
  return (((any$1 === null) ? 0 : any$1) | 0);
});
$p.kr = (function() {
  var any = this.fo;
  var any$1 = ((any === null) ? null : (any.height | 0));
  return (((any$1 === null) ? 0 : any$1) | 0);
});
function $isArrayOf_Lorg_loveroo_webgl_engine_render_ImageTexture(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b5)));
}
var $d_Lorg_loveroo_webgl_engine_render_ImageTexture = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_ImageTexture, "org.loveroo.webgl.engine.render.ImageTexture", ({
  b5: 1,
  ac: 1,
  H: 1,
  R: 1
}));
class $c_Lorg_loveroo_webgl_engine_render_RenderBufferCreateException extends $c_jl_Exception {
  constructor(id) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("Failed to create render buffer " + id), null, true, true);
  }
}
var $d_Lorg_loveroo_webgl_engine_render_RenderBufferCreateException = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_RenderBufferCreateException, "org.loveroo.webgl.engine.render.RenderBufferCreateException", ({
  dE: 1,
  i: 1,
  e: 1,
  a: 1
}));
class $c_Lorg_loveroo_webgl_engine_render_ShaderError extends $c_jl_Exception {
}
function $ct_Lorg_loveroo_webgl_engine_render_batch_Batch__T__Lorg_loveroo_webgl_engine_render_Shader__Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor__($thiz, id, shader, descriptor) {
  $thiz.dS = id;
  $thiz.b1 = shader;
  $thiz.fw = descriptor;
  $f_Lorg_loveroo_webgl_engine_data_resource_Resource__$init$__V($thiz);
  $thiz.hm = 0;
  $f_Lorg_loveroo_webgl_engine_data_resource_Resource__onLoad__F1__jl_Void($thiz.b1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => $thiz.bz())));
  return $thiz;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_batch_Batch() {
  this.jb = null;
  this.fx = false;
  this.jc = null;
  this.dS = null;
  this.b1 = null;
  this.fw = null;
  this.hm = 0;
}
$p = $c_Lorg_loveroo_webgl_engine_render_batch_Batch.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_batch_Batch;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_batch_Batch() {
}
$h_Lorg_loveroo_webgl_engine_render_batch_Batch.prototype = $p;
$p.gq = (function() {
  return this.jb;
});
$p.il = (function() {
  return this.fx;
});
$p.gr = (function() {
  return this.jc;
});
$p.im = (function(x$1) {
  this.fx = x$1;
});
$p.kD = (function(x$0) {
  this.jb = x$0;
});
$p.kE = (function(x$0) {
  this.jc = x$0;
});
$p.od = (function() {
  return this.hm;
});
$p.bz = (function() {
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().mb;
  cmd.aw(this);
  this$2.j = ((1 + this$2.j) | 0);
  return $f_Lorg_loveroo_webgl_engine_data_resource_Resource__postCreate__jl_Void(this);
});
$p.oG = (function(elements) {
  return $f_Lorg_loveroo_webgl_engine_data_resource_Resource__buffer__F0__jl_Void(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    this.hm = elements.l();
    var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
    var this$3 = EngineRuntime_this.ay;
    if ((this$3.o().l() <= this$3.j)) {
      this$3.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
    }
    var cmd = this$3.o().s(this$3.j);
    cmd.aJ();
    cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().mi;
    cmd.aw(this);
    cmd.aw(elements);
    this$3.j = ((1 + this$3.j) | 0);
  })));
});
$p.bP = (function(delta) {
  if ((this.fx && this.b1.h7)) {
    this.b1.pV();
    var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
    var this$3 = EngineRuntime_this.ay;
    if ((this$3.o().l() <= this$3.j)) {
      this$3.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
    }
    var cmd = this$3.o().s(this$3.j);
    cmd.aJ();
    cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().mj;
    cmd.aw(this);
    this$3.j = ((1 + this$3.j) | 0);
    return (void 0);
  } else {
    return (void 0);
  }
});
var $d_Lorg_loveroo_webgl_engine_render_batch_Batch = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_batch_Batch, "org.loveroo.webgl.engine.render.batch.Batch", ({
  bd: 1,
  H: 1,
  R: 1,
  aw: 1
}));
/** @constructor */
function $c_Lorg_loveroo_webgl_game_entity_living_DummyEntity(_pos, world) {
  this.aT = null;
  this.n0 = null;
  this.fE = null;
  this.b2 = null;
  this.fD = null;
  this.hy = null;
  this.jw = null;
  this.jv = null;
  $m_Lorg_loveroo_webgl_game_entity_EntityType$();
  this.aT = _pos;
  this.n0 = world;
  $f_Lorg_loveroo_webgl_game_entity_Entity__$init$__V(this);
  this.jv = new $c_Lorg_loveroo_webgl_engine_render_Sprite(new $c_Lorg_loveroo_webgl_engine_render_ImageTexture("hitbox"), $ct_Lorg_loveroo_webgl_engine_render_Shader__T__(new $c_Lorg_loveroo_webgl_engine_render_Shader(), "sprite"), new $c_Lorg_loveroo_webgl_engine_math_Vec3f(0.0, 0.0, 0.0), new $c_Lorg_loveroo_webgl_engine_math_Vec2f(1.0, 1.0));
}
$p = $c_Lorg_loveroo_webgl_game_entity_living_DummyEntity.prototype = new $h_O();
$p.constructor = $c_Lorg_loveroo_webgl_game_entity_living_DummyEntity;
/** @constructor */
function $h_Lorg_loveroo_webgl_game_entity_living_DummyEntity() {
}
$h_Lorg_loveroo_webgl_game_entity_living_DummyEntity.prototype = $p;
$p.r2 = (function() {
  var input = $f_Lorg_loveroo_webgl_engine_input_Input__getCombinedAxis__Lorg_loveroo_webgl_engine_input_Axis__Lorg_loveroo_webgl_engine_input_Axis__Lorg_loveroo_webgl_engine_math_Vec2f($m_Lorg_loveroo_webgl_Game$().y.x.dU, $m_Lorg_loveroo_webgl_engine_input_Axis$().lx, $m_Lorg_loveroo_webgl_engine_input_Axis$().lw);
  if (((input.aZ !== 0.0) || (input.b0 !== 0.0))) {
    var angle = ((+Math.atan2(Math.fround((-input.b0)), input.aZ)) + (0.25 * (+Math.PI)));
    var movement = new $c_Lorg_loveroo_webgl_engine_math_Vec2f(Math.fround((+Math.cos(angle))), Math.fround((+Math.sin(angle))));
  } else {
    var movement = input;
  }
  var this$7 = this.b2;
  var value = $m_Lorg_loveroo_webgl_engine_math_NumberMove$().oA(this.b2.ah, Math.fround((0.13333334028720856 * movement.aZ)), (((+Math.abs(movement.aZ)) > 0.0) ? 0.013333333656191826 : 0.03333333507180214));
  this$7.ah = value;
  var this$10 = this.b2;
  var value$1 = $m_Lorg_loveroo_webgl_engine_math_NumberMove$().oA(this.b2.a6, Math.fround((0.13333334028720856 * movement.b0)), (((+Math.abs(movement.b0)) > 0.0) ? 0.013333333656191826 : 0.03333333507180214));
  this$10.a6 = value$1;
  if (((this.b2.X === 0.0) && $f_Lorg_loveroo_webgl_engine_input_Input__isButtonPressed__Lorg_loveroo_webgl_engine_input_Button__Z($m_Lorg_loveroo_webgl_Game$().y.x.dU, $m_Lorg_loveroo_webgl_engine_input_Input$().ch.mN))) {
    var this$14 = this.b2;
    this$14.X = 0.20000000298023224;
  }
  var this$16 = this.b2;
  var value$2 = Math.fround((this.b2.X - 0.009999999776482582));
  this$16.X = value$2;
  return $m_Lorg_loveroo_webgl_Game$().y.x.ju.rd($m_Lorg_loveroo_webgl_game_entity_Entity$().it(this.aT.ah, this.aT.X, this.aT.a6));
});
var $d_Lorg_loveroo_webgl_game_entity_living_DummyEntity = new $TypeData().i($c_Lorg_loveroo_webgl_game_entity_living_DummyEntity, "org.loveroo.webgl.game.entity.living.DummyEntity", ({
  eV: 1,
  aw: 1,
  eN: 1,
  eU: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.Q = (function() {
  return (-1);
});
$p.e7 = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.i2 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.B = (function() {
  return this;
});
$p.e8 = (function(n) {
  return this.gx(n, (-1));
});
$p.gx = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.q = (function() {
  return "<iterator>";
});
/** @constructor */
function $c_sc_Map$() {
  this.nt = null;
  this.nr = null;
  this.ns = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.nr = $ct_O__(new $c_O());
  this.ns = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.nr));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  fI: 1,
  fJ: 1,
  a: 1,
  ax: 1
}));
var $n_sc_Map$;
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$();
  }
  return $n_sc_Map$;
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.jH = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.jH = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.oj = (function(it) {
  return this.jH.i8(it);
});
$p.i8 = (function(source) {
  return this.oj(source);
});
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.dG(idx) > 0));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.dG(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.Q();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.Q();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.B(), that);
}
class $c_s_concurrent_Future$$anon$4 extends $c_jl_Throwable {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  eV() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$4 = new $TypeData().i($c_s_concurrent_Future$$anon$4, "scala.concurrent.Future$$anon$4", ({
  h3: 1,
  e: 1,
  a: 1,
  al: 1
}));
function $isArrayOf_sr_NonLocalReturnControl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hp)));
}
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
  this.nS = null;
  this.nS = Promise.resolve((void 0));
}
$p = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
}
$h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = $p;
$p.kg = (function(runnable) {
  this.nS.then(((arg1$2) => {
    try {
      runnable.ef();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).gt($m_jl_System$Streams$().eo);
    }
  }));
});
$p.kM = (function(t) {
  t.gt($m_jl_System$Streams$().eo);
});
var $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext", ({
  hy: 1,
  aH: 1,
  aG: 1,
  au: 1
}));
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() {
}
$p = $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() {
}
$h_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype = $p;
$p.kg = (function(runnable) {
  setTimeout($m_sjs_js_Any$().qA(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    try {
      runnable.ef();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).gt($m_jl_System$Streams$().eo);
    }
  }))), 0);
});
$p.kM = (function(t) {
  t.gt($m_jl_System$Streams$().eo);
});
var $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext", ({
  hz: 1,
  aH: 1,
  aG: 1,
  au: 1
}));
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hJ)));
}
/** @constructor */
function $c_s_util_Try() {
}
$p = $c_s_util_Try.prototype = new $h_O();
$p.constructor = $c_s_util_Try;
/** @constructor */
function $h_s_util_Try() {
}
$h_s_util_Try.prototype = $p;
$p.f2 = (function() {
  return new $c_s_Product$$anon$1(this);
});
function $isArrayOf_s_util_Try(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aJ)));
}
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$p = $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $p;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  bW: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  c1: 1,
  O: 1,
  a: 1,
  A: 1,
  B: 1
}), ((x) => $isByte(x)));
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c4)));
}
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  ao: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1
}));
function $ct_jl_IllegalStateException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalStateException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  c6: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  aR: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$p = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $p;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  cb: 1,
  aM: 1,
  aK: 1,
  aO: 1,
  aL: 1
}));
function $ct_jl_NullPointerException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_NullPointerException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  cd: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cf)));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  cg: 1,
  O: 1,
  a: 1,
  A: 1,
  B: 1
}), ((x) => $isShort(x)));
class $c_jl_StackOverflowError extends $c_jl_VirtualMachineError {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_StackOverflowError = new $TypeData().i($c_jl_StackOverflowError, "java.lang.StackOverflowError", ({
  ch: 1,
  aU: 1,
  an: 1,
  e: 1,
  a: 1
}));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  cq: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1
}));
/** @constructor */
function $c_ju_AbstractSet() {
}
$p = $c_ju_AbstractSet.prototype = new $h_ju_AbstractCollection();
$p.constructor = $c_ju_AbstractSet;
/** @constructor */
function $h_ju_AbstractSet() {
}
$h_ju_AbstractSet.prototype = $p;
$p.E = (function(that) {
  return ((that === this) || ($is_ju_Collection(that) && ((that.l() === this.l()) && this.ke(that))));
});
$p.A = (function() {
  var _\uff3fself = this.ce();
  var result = 0;
  while (_\uff3fself.h()) {
    var t = result;
    var u = _\uff3fself.g();
    var t$1 = (t | 0);
    result = (($dp_hashCode__I(u) + t$1) | 0);
  }
  return (result | 0);
});
function $p_ju_HashMap__getOrDefaultImpl__O__O__O($thiz, key, defaultValue) {
  if ((key === null)) {
    var hash = 0;
  } else {
    var originalHash = $dp_hashCode__I(key);
    var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  }
  var node = $thiz.ig(key, hash, (hash & (($thiz.aK.a.length - 1) | 0)));
  return ((node === null) ? defaultValue : node.bo);
}
function $p_ju_HashMap__growTable__V($thiz) {
  var oldTable = $thiz.aK;
  var oldlen = oldTable.a.length;
  var newlen = (oldlen << 1);
  var newTable = new ($d_ju_HashMap$Node.r().C)(newlen);
  $thiz.aK = newTable;
  $thiz.iC = $doubleToInt((newlen * $thiz.iB));
  var i = 0;
  while ((i < oldlen)) {
    var lastLow = null;
    var lastHigh = null;
    var node = oldTable.a[i];
    while ((node !== null)) {
      if (((node.dM & oldlen) === 0)) {
        node.et = lastLow;
        if ((lastLow === null)) {
          newTable.a[i] = node;
        } else {
          lastLow.bC = node;
        }
        lastLow = node;
      } else {
        node.et = lastHigh;
        if ((lastHigh === null)) {
          newTable.a[((oldlen + i) | 0)] = node;
        } else {
          lastHigh.bC = node;
        }
        lastHigh = node;
      }
      node = node.bC;
    }
    if ((lastLow !== null)) {
      lastLow.bC = null;
    }
    if ((lastHigh !== null)) {
      lastHigh.bC = null;
    }
    i = ((1 + i) | 0);
  }
}
function $ct_ju_HashMap__I__F__($thiz, initialCapacity, loadFactor) {
  $thiz.iB = loadFactor;
  if ((initialCapacity < 0)) {
    $m_jl_BoundsChecks$().ow(initialCapacity);
  }
  if ((loadFactor <= 0.0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "loadFactor <= 0.0");
  }
  var a = ((initialCapacity - 1) | 0);
  var i = ((a > 4) ? a : 4);
  var a$1 = ((((-2147483648) >> Math.clz32(i)) & i) << 1);
  $thiz.aK = new ($d_ju_HashMap$Node.r().C)(((a$1 < 1073741824) ? a$1 : 1073741824));
  $thiz.iC = $doubleToInt(($thiz.aK.a.length * $thiz.iB));
  $thiz.bT = 0;
  return $thiz;
}
function $ct_ju_HashMap__($thiz) {
  $ct_ju_HashMap__I__F__($thiz, 16, 0.75);
  return $thiz;
}
function $ct_ju_HashMap__I__($thiz, initialCapacity) {
  $ct_ju_HashMap__I__F__($thiz, initialCapacity, 0.75);
  return $thiz;
}
/** @constructor */
function $c_ju_HashMap() {
  this.iB = 0.0;
  this.aK = null;
  this.iC = 0;
  this.bT = 0;
}
$p = $c_ju_HashMap.prototype = new $h_ju_AbstractMap();
$p.constructor = $c_ju_HashMap;
/** @constructor */
function $h_ju_HashMap() {
}
$h_ju_HashMap.prototype = $p;
$p.d4 = (function(key) {
  if ((key === null)) {
    var hash = 0;
  } else {
    var originalHash = $dp_hashCode__I(key);
    var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  }
  return (this.ig(key, hash, (hash & ((this.aK.a.length - 1) | 0))) !== null);
});
$p.kH = (function(key) {
  var node = this.qQ(key);
  return ((node === null) ? null : node.bo);
});
$p.dE = (function() {
  $m_ju_Arrays$().oh(this.aK, null);
  this.bT = 0;
});
$p.eW = (function(action) {
  var len = this.aK.a.length;
  var i = 0;
  while ((i !== len)) {
    var node = this.aK.a[i];
    while ((node !== null)) {
      action.eR(node.cg, node.bo);
      node = node.bC;
    }
    i = ((1 + i) | 0);
  }
});
$p.ig = (function(key, hash, idx) {
  var node = this.aK.a[idx];
  while (true) {
    if ((node === null)) {
      return null;
    } else {
      if ((hash === node.dM)) {
        var b = node.cg;
        var $x_1 = ((key === null) ? (b === null) : $dp_equals__O__Z(key, b));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        return node;
      } else if ((hash < node.dM)) {
        return null;
      } else {
        node = node.bC;
      }
    }
  }
});
$p.bA = (function(key, value, hash, ifAbsent) {
  var newContentSize = ((1 + this.bT) | 0);
  if ((newContentSize >= this.iC)) {
    $p_ju_HashMap__growTable__V(this);
  }
  var idx = (hash & ((this.aK.a.length - 1) | 0));
  var x1 = this.aK.a[idx];
  if ((x1 === null)) {
    var newNode = new $c_ju_HashMap$Node(key, hash, value, null, null);
    this.aK.a[idx] = newNode;
  } else {
    var prev = null;
    var n = x1;
    while (((n !== null) && (n.dM <= hash))) {
      if ((n.dM === hash)) {
        var b = n.cg;
        var $x_1 = ((key === null) ? (b === null) : $dp_equals__O__Z(key, b));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var old = n.bo;
        if (((!ifAbsent) || (old === null))) {
          n.bo = value;
        }
        return old;
      }
      prev = n;
      n = n.bC;
    }
    var newNode$2 = new $c_ju_HashMap$Node(key, hash, value, prev, n);
    if ((prev === null)) {
      this.aK.a[idx] = newNode$2;
    } else {
      prev.bC = newNode$2;
    }
    if ((n !== null)) {
      n.et = newNode$2;
    }
  }
  this.bT = newContentSize;
  return null;
});
$p.qQ = (function(key) {
  if ((key === null)) {
    var hash = 0;
  } else {
    var originalHash = $dp_hashCode__I(key);
    var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  }
  var idx = (hash & ((this.aK.a.length - 1) | 0));
  var node = this.ig(key, hash, idx);
  if ((node !== null)) {
    this.qR(node, idx);
  }
  return node;
});
$p.qR = (function(node, idx) {
  var previous = node.et;
  var next = node.bC;
  if ((previous === null)) {
    this.aK.a[idx] = next;
  } else {
    previous.bC = next;
  }
  if ((next !== null)) {
    next.et = previous;
  }
  this.bT = ((this.bT - 1) | 0);
});
var $d_ju_HashMap = new $TypeData().i($c_ju_HashMap, "java.util.HashMap", ({
  cA: 1,
  cu: 1,
  ar: 1,
  a: 1,
  w: 1
}));
function $ct_ju_NoSuchElementException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_ju_NoSuchElementException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  aa: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1
}));
/** @constructor */
function $c_ju_RandomAccessListIterator(list, i, start, end) {
  this.eq = 0;
  this.iA = 0;
  this.gB = 0;
  this.kY = null;
  this.kY = list;
  $ct_ju_AbstractRandomAccessListIterator__I__I__I__(this, i, start, end);
}
$p = $c_ju_RandomAccessListIterator.prototype = new $h_ju_AbstractRandomAccessListIterator();
$p.constructor = $c_ju_RandomAccessListIterator;
/** @constructor */
function $h_ju_RandomAccessListIterator() {
}
$h_ju_RandomAccessListIterator.prototype = $p;
$p.s = (function(index) {
  return this.kY.s(index);
});
var $d_ju_RandomAccessListIterator = new $TypeData().i($c_ju_RandomAccessListIterator, "java.util.RandomAccessListIterator", ({
  cM: 1,
  cv: 1,
  aX: 1,
  a8: 1,
  cN: 1
}));
function $ct_Lorg_loveroo_webgl_engine_render_RenderBuffer__T__Lorg_loveroo_webgl_engine_render_data_ColorFormat__I__I__($thiz, id, format, width, height) {
  $thiz.j2 = id;
  $ct_Lorg_loveroo_webgl_engine_render_EmptyTexture__T__Lorg_loveroo_webgl_engine_render_data_ColorFormat__Lorg_loveroo_webgl_engine_render_data_TextureType__I__I__($thiz, (id + "$render"), format, $m_Lorg_loveroo_webgl_engine_render_Renderer$().fq.ht, width, height);
  return $thiz;
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_RenderBuffer() {
  this.ez = null;
  this.bX = false;
  this.eA = null;
  this.ak = null;
  this.ci = null;
  this.br = null;
  this.dR = 0;
  this.dQ = 0;
  this.j2 = null;
  this.fp = null;
}
$p = $c_Lorg_loveroo_webgl_engine_render_RenderBuffer.prototype = new $h_Lorg_loveroo_webgl_engine_render_EmptyTexture();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_RenderBuffer;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_RenderBuffer() {
}
$h_Lorg_loveroo_webgl_engine_render_RenderBuffer.prototype = $p;
$p.bz = (function() {
  this.fp = $ct_Lorg_loveroo_webgl_engine_render_EmptyTexture__T__Lorg_loveroo_webgl_engine_render_data_ColorFormat__Lorg_loveroo_webgl_engine_render_data_TextureType__I__I__(new $c_Lorg_loveroo_webgl_engine_render_EmptyTexture(), (this.j2 + "$depth"), $m_Lorg_loveroo_webgl_engine_render_Renderer$().cN.mp, $m_Lorg_loveroo_webgl_engine_render_Renderer$().fq.ht, this.dR, this.dQ);
  $c_Lorg_loveroo_webgl_engine_render_EmptyTexture.prototype.bz.call(this);
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().mc;
  cmd.aw(this);
  this$2.j = ((1 + this$2.j) | 0);
});
$p.e6 = (function(clear) {
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().m7;
  cmd.aw(this);
  this$2.j = ((1 + this$2.j) | 0);
  return (clear ? this.aJ() : (void 0));
});
$p.aJ = (function() {
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().ma;
  cmd.aw(this);
  this$2.j = ((1 + this$2.j) | 0);
});
$p.eT = (function() {
  var EngineRuntime_this = $m_Lorg_loveroo_webgl_Game$().y.x;
  var this$2 = EngineRuntime_this.ay;
  if ((this$2.o().l() <= this$2.j)) {
    this$2.o().w(new $c_Lorg_loveroo_webgl_engine_render_frame_command_GPUCommand());
  }
  var cmd = this$2.o().s(this$2.j);
  cmd.aJ();
  cmd.aF = $m_Lorg_loveroo_webgl_engine_render_frame_command_Command$().mf;
  cmd.aw(this);
  this$2.j = ((1 + this$2.j) | 0);
  $c_Lorg_loveroo_webgl_engine_render_Texture.prototype.eT.call(this);
  return this.fp.eT();
});
var $d_Lorg_loveroo_webgl_engine_render_RenderBuffer = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_RenderBuffer, "org.loveroo.webgl.engine.render.RenderBuffer", ({
  b6: 1,
  ab: 1,
  ac: 1,
  H: 1,
  R: 1
}));
class $c_Lorg_loveroo_webgl_engine_render_ShaderCompilationFailureException extends $c_Lorg_loveroo_webgl_engine_render_ShaderError {
  constructor(id, source, error, code) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((((((("Failed to compile shader " + source) + " from ") + id) + "\n") + error) + "\n\nSource:\n") + code), null, true, true);
  }
}
var $d_Lorg_loveroo_webgl_engine_render_ShaderCompilationFailureException = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_ShaderCompilationFailureException, "org.loveroo.webgl.engine.render.ShaderCompilationFailureException", ({
  dJ: 1,
  b8: 1,
  i: 1,
  e: 1,
  a: 1
}));
class $c_Lorg_loveroo_webgl_engine_render_ShaderLinkFailureException extends $c_Lorg_loveroo_webgl_engine_render_ShaderError {
  constructor(id, error) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("Failed to link shader " + id) + "\n") + error), null, true, true);
  }
}
var $d_Lorg_loveroo_webgl_engine_render_ShaderLinkFailureException = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_ShaderLinkFailureException, "org.loveroo.webgl.engine.render.ShaderLinkFailureException", ({
  dL: 1,
  b8: 1,
  i: 1,
  e: 1,
  a: 1
}));
function $p_Lorg_loveroo_webgl_engine_render_Sprite__updatePos__jl_Void($thiz) {
  return $thiz.h9.aY("pos", new $c_Lorg_loveroo_webgl_engine_render_Uniform3f($thiz.fr.ah, $thiz.fr.X, $thiz.fr.a6));
}
function $p_Lorg_loveroo_webgl_engine_render_Sprite__updateScale__jl_Void($thiz) {
  return $thiz.h9.aY("scale", new $c_Lorg_loveroo_webgl_engine_render_Uniform2f(Math.fround(($thiz.fs.aZ * Math.fround($thiz.ey.kP()))), Math.fround(($thiz.fs.b0 * Math.fround($thiz.ey.kr())))));
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_Sprite(texture, shader, _pos, _scale) {
  this.jb = null;
  this.fx = false;
  this.jc = null;
  this.dS = null;
  this.b1 = null;
  this.fw = null;
  this.hm = 0;
  this.ey = null;
  this.h9 = null;
  this.fr = null;
  this.fs = null;
  this.ey = texture;
  this.h9 = shader;
  this.fr = _pos;
  this.fs = _scale;
  $ct_Lorg_loveroo_webgl_engine_render_batch_Batch__T__Lorg_loveroo_webgl_engine_render_Shader__Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor__(this, texture.ak, shader, new $c_Lorg_loveroo_webgl_engine_render_batch_BatchDescriptor($m_Lorg_loveroo_predef_ListUtil$().ik(new $c_sjsr_WrappedVarArgs([]))));
}
$p = $c_Lorg_loveroo_webgl_engine_render_Sprite.prototype = new $h_Lorg_loveroo_webgl_engine_render_batch_Batch();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_Sprite;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_Sprite() {
}
$h_Lorg_loveroo_webgl_engine_render_Sprite.prototype = $p;
$p.od = (function() {
  return 1;
});
$p.oD = (function(value) {
  this.fr.oO(value);
  return $p_Lorg_loveroo_webgl_engine_render_Sprite__updatePos__jl_Void(this);
});
$p.ru = (function(value) {
  this.fs.rv(value);
  return $p_Lorg_loveroo_webgl_engine_render_Sprite__updateScale__jl_Void(this);
});
$p.bz = (function() {
  $c_Lorg_loveroo_webgl_engine_render_batch_Batch.prototype.bz.call(this);
  return $f_Lorg_loveroo_webgl_engine_data_resource_Resource__onLoad__F1__jl_Void(this.ey, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => {
    $p_Lorg_loveroo_webgl_engine_render_Sprite__updatePos__jl_Void(this);
    $p_Lorg_loveroo_webgl_engine_render_Sprite__updateScale__jl_Void(this);
    return this.h9.aY("tex", new $c_Lorg_loveroo_webgl_engine_render_TextureUniform($m_Lorg_loveroo_webgl_engine_render_data_TextureSlot$().dc, this.ey));
  })));
});
$p.bP = (function(delta) {
  return (this.ey.bX ? $c_Lorg_loveroo_webgl_engine_render_batch_Batch.prototype.bP.call(this, delta) : (void 0));
});
var $d_Lorg_loveroo_webgl_engine_render_Sprite = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_Sprite, "org.loveroo.webgl.engine.render.Sprite", ({
  dM: 1,
  bd: 1,
  H: 1,
  R: 1,
  aw: 1
}));
class $c_Lorg_loveroo_webgl_engine_render_batch_AttributeNotFoundException extends $c_jl_RuntimeException {
  constructor(id, attrib) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("Attribute pointer " + attrib) + " not found for ") + id), null, true, true);
  }
}
var $d_Lorg_loveroo_webgl_engine_render_batch_AttributeNotFoundException = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_batch_AttributeNotFoundException, "org.loveroo.webgl.engine.render.batch.AttributeNotFoundException", ({
  dT: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1
}));
class $c_Lorg_loveroo_webgl_engine_render_impl_ExtensionNotAvailableException extends $c_jl_RuntimeException {
  constructor(ext) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (("WebGL extension " + ext) + " not found"), null, true, true);
  }
}
var $d_Lorg_loveroo_webgl_engine_render_impl_ExtensionNotAvailableException = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_impl_ExtensionNotAvailableException, "org.loveroo.webgl.engine.render.impl.ExtensionNotAvailableException", ({
  et: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.nk)) {
    if (($thiz.hL === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.hL;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.bR.N));
      try {
        var $x_1 = ((($thiz.hL + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.nj = $x_1;
    $thiz.nk = true;
  }
  return $thiz.nj;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.hL = null;
    this.nj = null;
    this.nk = false;
    this.hL = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gl() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  fp: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1
}));
/** @constructor */
function $c_s_Option() {
}
$p = $c_s_Option.prototype = new $h_O();
$p.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
$h_s_Option.prototype = $p;
$p.f2 = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.t = (function() {
  return (this === $m_s_None$());
});
$p.Q = (function() {
  return ((!this.t()) | 0);
});
$p.B = (function() {
  return (this.t() ? $m_sc_Iterator$().a4 : new $c_sc_Iterator$$anon$20(this.bO()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fJ = 0;
  this.nm = 0;
  this.nl = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.nl = outer;
  this.fJ = 0;
  this.nm = outer.cG();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.h = (function() {
  return (this.fJ < this.nm);
});
$p.g = (function() {
  var result = this.nl.cH(this.fJ);
  this.fJ = ((1 + this.fJ) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  ft: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.b3 = null;
  this.aL = null;
  this.b3 = _1;
  this.aL = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.cG = (function() {
  return 2;
});
$p.cH = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.q = (function() {
  return (((("(" + this.b3) + ",") + this.aL) + ")");
});
$p.cI = (function() {
  return "Tuple2";
});
$p.f2 = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.A = (function() {
  return $m_s_util_hashing_MurmurHash3$().gu(this, (-116390334), true);
});
$p.E = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().i(this.b3, x$1.b3) && $m_sr_BoxesRunTime$().i(this.aL, x$1.aL))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bm)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  bm: 1,
  fu: 1,
  K: 1,
  d: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.dD() + "("), ", ", ")");
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.h = (function() {
  return false;
});
$p.r5 = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator");
});
$p.Q = (function() {
  return 0;
});
$p.g = (function() {
  this.r5();
});
$p.gx = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  fD: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$2) {
  this.no = null;
  this.fK = false;
  this.no = a$2;
  this.fK = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.h = (function() {
  return (!this.fK);
});
$p.g = (function() {
  if (this.fK) {
    return $m_sc_Iterator$().a4.g();
  } else {
    this.fK = true;
    return this.no;
  }
});
$p.gx = (function(from, until) {
  return (((this.fK || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().a4 : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  fE: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(f$9, outer) {
  this.np = null;
  this.hM = null;
  this.np = f$9;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.hM = outer;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.Q = (function() {
  return this.hM.Q();
});
$p.h = (function() {
  return this.hM.h();
});
$p.g = (function() {
  return this.np.n(this.hM.g());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  fF: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bu instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bu;
      $thiz.bu = c.bu;
      $thiz.dj = c.dj;
      if ((c.c0 !== null)) {
        if (($thiz.bZ === null)) {
          $thiz.bZ = c.bZ;
        }
        var x$proxy10 = c.bZ;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().bb();
        }
        x$proxy10.fL = $thiz.c0;
        $thiz.c0 = c.c0;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.c0 === null)) {
      $thiz.bu = null;
      $thiz.bZ = null;
      return false;
    } else {
      $thiz.bu = $thiz.c0.qH();
      if (($thiz.bZ === $thiz.c0)) {
        var x$proxy12 = $thiz.bZ;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().bb();
        }
        $thiz.bZ = x$proxy12.fL;
      }
      $thiz.c0 = $thiz.c0.fL;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.dj) {
        return true;
      } else {
        if ((!(($thiz.bu !== null) && $thiz.bu.h()))) {
          continue;
        }
        $thiz.dj = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.bu = null;
  this.c0 = null;
  this.bZ = null;
  this.dj = false;
  this.bu = from;
  this.c0 = null;
  this.bZ = null;
  this.dj = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.h = (function() {
  if (this.dj) {
    return true;
  } else if ((this.bu !== null)) {
    if (this.bu.h()) {
      this.dj = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.g = (function() {
  if (this.h()) {
    this.dj = false;
    var x$proxy13 = this.bu;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().bb();
    }
    return x$proxy13.g();
  } else {
    return $m_sc_Iterator$().a4.g();
  }
});
$p.q1 = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.c0 === null)) {
    this.c0 = c;
    this.bZ = c;
  } else {
    var x$proxy14 = this.bZ;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().bb();
    }
    x$proxy14.fL = c;
    this.bZ = c;
  }
  if ((this.bu === null)) {
    this.bu = $m_sc_Iterator$().a4;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bn)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  bn: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.cR > 0)) {
    if ($thiz.dk.h()) {
      $thiz.dk.g();
      $thiz.cR = (($thiz.cR - 1) | 0);
    } else {
      $thiz.cR = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.bG < 0)) {
    return (-1);
  } else {
    var that = (($thiz.bG - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.dk = null;
  this.bG = 0;
  this.cR = 0;
  this.dk = underlying;
  this.bG = limit;
  this.cR = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.Q = (function() {
  var size = this.dk.Q();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.cR) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.bG < 0)) {
      return dropSize;
    } else {
      var x = this.bG;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.h = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.bG !== 0) && this.dk.h());
});
$p.g = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.bG > 0)) {
    this.bG = ((this.bG - 1) | 0);
    return this.dk.g();
  } else {
    return ((this.bG < 0) ? this.dk.g() : $m_sc_Iterator$().a4.g());
  }
});
$p.gx = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.bG < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.cR + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().a4;
  } else if ((sum < 0)) {
    this.cR = 2147483647;
    this.bG = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.dk, ((sum - 2147483647) | 0), rest))));
  } else {
    this.cR = sum;
    this.bG = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  fH: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.dG(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.qi(n);
  if (skipped.t()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.cq();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      if ((((!a$tailLocal1.t()) && (!b$tailLocal1.t())) && $m_sr_BoxesRunTime$().i(a$tailLocal1.cq(), b$tailLocal1.cq()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.bQ();
        var b$tailLocal1$tmp1 = b$tailLocal1.bQ();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.t() && b$tailLocal1.t());
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.fN = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.fN = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.h = (function() {
  return (!this.fN.t());
});
$p.g = (function() {
  var r = this.fN.cq();
  this.fN = this.fN.bQ();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  fO: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
function $ct_sci_ChampBaseIterator__($thiz) {
  $thiz.bH = 0;
  $thiz.fP = 0;
  $thiz.bw = (-1);
  return $thiz;
}
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.cS === null)) {
    $thiz.cS = new $ac_I(($m_sci_Node$().fV << 1));
    $thiz.fQ = new ($d_sci_Node.r().C)($m_sci_Node$().fV);
  }
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.kq()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.ib()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.dY = node;
  $thiz.bH = 0;
  $thiz.fP = node.kF();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bw = ((1 + $thiz.bw) | 0);
  var cursorIndex = ($thiz.bw << 1);
  var lengthIndex = ((1 + ($thiz.bw << 1)) | 0);
  $thiz.fQ.a[$thiz.bw] = node;
  $thiz.cS.a[cursorIndex] = 0;
  $thiz.cS.a[lengthIndex] = node.kA();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bw = (($thiz.bw - 1) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bw >= 0)) {
    var cursorIndex = ($thiz.bw << 1);
    var lengthIndex = ((1 + ($thiz.bw << 1)) | 0);
    var nodeCursor = $thiz.cS.a[cursorIndex];
    if ((nodeCursor < $thiz.cS.a[lengthIndex])) {
      var \u03b41$ = $thiz.cS;
      \u03b41$.a[cursorIndex] = ((1 + \u03b41$.a[cursorIndex]) | 0);
      var nextNode = $thiz.fQ.a[$thiz.bw].km(nodeCursor);
      if (nextNode.kq()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.ib()) {
        $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, nextNode);
        return true;
      }
    } else {
      $p_sci_ChampBaseIterator__popNode__V($thiz);
    }
  }
  return false;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.bH = 0;
  this.fP = 0;
  this.dY = null;
  this.bw = 0;
  this.cS = null;
  this.fQ = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.h = (function() {
  return ((this.bH < this.fP) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.dl = (-1);
  $thiz.bI = (-1);
  $thiz.fR = new $ac_I(((1 + $m_sci_Node$().fV) | 0));
  $thiz.fS = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().fV) | 0));
  return $thiz;
}
function $ct_sci_ChampBaseReverseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz;
}
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.hN = node;
  $thiz.dl = ((node.kF() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.bI = ((1 + $thiz.bI) | 0);
  $thiz.fS.a[$thiz.bI] = node;
  $thiz.fR.a[$thiz.bI] = ((node.kA() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.bI = (($thiz.bI - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bI >= 0)) {
    var nodeCursor = $thiz.fR.a[$thiz.bI];
    $thiz.fR.a[$thiz.bI] = ((nodeCursor - 1) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.fS.a[$thiz.bI].km(nodeCursor));
    } else {
      var currNode = $thiz.fS.a[$thiz.bI];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.ib()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
/** @constructor */
function $c_sci_ChampBaseReverseIterator() {
  this.dl = 0;
  this.hN = null;
  this.bI = 0;
  this.fR = null;
  this.fS = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.h = (function() {
  return ((this.dl >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.eJ !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.m(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.m(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.gj(bitpos);
  var idx = (dataIx << 1);
  var src = bm.ai;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.m(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.m(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bv, dataIx, originalHash);
  bm.N = (bm.N | bitpos);
  bm.ai = dst;
  bm.bv = dstHashes;
  bm.aM = ((1 + bm.aM) | 0);
  bm.bf = ((bm.bf + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.eJ = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.cw = $thiz.cw.ob();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.eJ = null;
  this.cw = null;
  this.cw = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().nh, $m_s_Array$EmptyArrays$().jG, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.eg = (function(size) {
});
$p.f5 = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().dH(keyHash, shift);
    var bitpos = $m_sci_Node$().d3(mask);
    if (((mapNode.N & bitpos) !== 0)) {
      var index = $m_sci_Node$().cd(mapNode.N, mask, bitpos);
      var key0 = mapNode.cF(index);
      var key0UnimprovedHash = mapNode.eY(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().i(key0, key))) {
        mapNode.ai.a[((1 + (index << 1)) | 0)] = value;
        return (void 0);
      } else {
        var value0 = mapNode.cp(index);
        var key0Hash = $m_sc_Hashing$().cc(key0UnimprovedHash);
        var subNodeNew = mapNode.kz(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.r1(bitpos, key0Hash, subNodeNew);
        return (void 0);
      }
    } else if (((mapNode.W & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().cd(mapNode.W, mask, bitpos);
      var subNode = mapNode.co(index$2);
      var beforeSize = subNode.l();
      var beforeHash = subNode.dC();
      this.f5(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.aM = ((mapNode.aM + ((subNode.l() - beforeSize) | 0)) | 0);
      mapNode.bf = ((mapNode.bf + ((subNode.dC() - beforeHash) | 0)) | 0);
      return (void 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
      return (void 0);
    }
  }
  if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.eZ(key);
    if ((index$3 < 0)) {
      mapNode.a5 = mapNode.a5.dB(new $c_T2(key, value));
      return (void 0);
    } else {
      mapNode.a5 = mapNode.a5.dK(index$3, new $c_T2(key, value));
      return (void 0);
    }
  }
  throw new $c_s_MatchError(mapNode);
});
$p.oJ = (function() {
  if ((this.cw.aM === 0)) {
    return $m_sci_HashMap$().jJ;
  } else if ((this.eJ !== null)) {
    return this.eJ;
  } else {
    this.eJ = new $c_sci_HashMap(this.cw);
    return this.eJ;
  }
});
$p.o5 = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().I(elem.b3);
  var im = $m_sc_Hashing$().cc(h);
  this.f5(this.cw, elem.b3, elem.aL, h, im, 0);
  return this;
});
$p.e4 = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().I(key);
  this.f5(this.cw, key, value, originalHash, $m_sc_Hashing$().cc(originalHash), 0);
  return this;
});
$p.o2 = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(xs, this);
  } else if ((xs instanceof $c_scm_HashMap)) {
    var iter = xs.oB();
    while (iter.h()) {
      var next = iter.g();
      var improvedHash = next.cC;
      var originalHash = (improvedHash ^ ((improvedHash >>> 16) | 0));
      var hash = $m_sc_Hashing$().cc(originalHash);
      this.f5(this.cw, next.dw, next.c8, originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.of();
    while (iter$2.h()) {
      var next$2 = iter$2.g();
      var originalHash$2 = xs.rS(next$2.os());
      var hash$2 = $m_sc_Hashing$().cc(originalHash$2);
      this.f5(this.cw, next$2.oy(), next$2.oZ(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.cn(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((key$2, value$2) => this.e4(key$2, value$2))));
  } else {
    var it = xs.B();
    while (it.h()) {
      this.o5(it.g());
    }
  }
  return this;
});
$p.ee = (function() {
  return this.oJ();
});
$p.e5 = (function(elem) {
  return this.o5(elem);
});
$p.e3 = (function(elems) {
  return this.o2(elems);
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  fW: 1,
  Y: 1,
  Z: 1,
  X: 1,
  aj: 1
}));
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
$p.i8 = (function(source) {
  return $m_sci_Nil$().re(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  g0: 1,
  a: 1,
  a7: 1,
  ag: 1,
  az: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
function $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.eK = outer;
  $thiz.dp = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dp = 0;
  this.eK = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.h = (function() {
  return (this.dp < 2);
});
$p.g = (function() {
  matchResult5$1: {
    var result;
    var x23 = this.dp;
    if ((x23 === 0)) {
      var result = new $c_T2(this.eK.c1, this.eK.cT);
      break matchResult5$1;
    }
    if ((x23 === 1)) {
      var result = new $c_T2(this.eK.c2, this.eK.cU);
      break matchResult5$1;
    }
    var result = $m_sc_Iterator$().a4.g();
  }
  this.dp = ((1 + this.dp) | 0);
  return result;
});
$p.e8 = (function(n) {
  this.dp = ((this.dp + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.dq = outer;
  $thiz.dr = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dr = 0;
  this.dq = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.h = (function() {
  return (this.dr < 3);
});
$p.g = (function() {
  var result;
  switch (this.dr) {
    case 0: {
      var result = new $c_T2(this.dq.bJ, this.dq.cx);
      break;
    }
    case 1: {
      var result = new $c_T2(this.dq.bK, this.dq.cy);
      break;
    }
    case 2: {
      var result = new $c_T2(this.dq.bL, this.dq.cz);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().a4.g();
    }
  }
  this.dr = ((1 + this.dr) | 0);
  return result;
});
$p.e8 = (function(n) {
  this.dr = ((this.dr + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.cA = outer;
  $thiz.ds = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.ds = 0;
  this.cA = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.h = (function() {
  return (this.ds < 4);
});
$p.g = (function() {
  var result;
  switch (this.ds) {
    case 0: {
      var result = new $c_T2(this.cA.bg, this.cA.c3);
      break;
    }
    case 1: {
      var result = new $c_T2(this.cA.bh, this.cA.c4);
      break;
    }
    case 2: {
      var result = new $c_T2(this.cA.bi, this.cA.c5);
      break;
    }
    case 3: {
      var result = new $c_T2(this.cA.bj, this.cA.c6);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().a4.g();
    }
  }
  this.ds = ((1 + this.ds) | 0);
  return result;
});
$p.e8 = (function(n) {
  this.ds = ((this.ds + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.cV = null;
  this.fT = false;
  this.dZ = null;
  this.cV = $m_sci_Map$EmptyMap$();
  this.fT = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.eg = (function(size) {
});
$p.oK = (function() {
  return (this.fT ? this.dZ.oJ() : this.cV);
});
$p.pG = (function(key, value) {
  if (this.fT) {
    this.dZ.e4(key, value);
  } else if ((this.cV.l() < 4)) {
    this.cV = this.cV.ej(key, value);
  } else if (this.cV.aX(key)) {
    this.cV = this.cV.ej(key, value);
  } else {
    this.fT = true;
    if ((this.dZ === null)) {
      this.dZ = new $c_sci_HashMapBuilder();
    }
    this.cV.pW(this.dZ);
    this.dZ.e4(key, value);
  }
  return this;
});
$p.o3 = (function(xs) {
  return (this.fT ? (this.dZ.o2(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.ee = (function() {
  return this.oK();
});
$p.e5 = (function(elem) {
  return this.pG(elem.b3, elem.aL);
});
$p.e3 = (function(elems) {
  return this.o3(elems);
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  ga: 1,
  Y: 1,
  Z: 1,
  X: 1,
  aj: 1
}));
/** @constructor */
function $c_sci_Vector$() {
  this.nz = 0;
  this.nA = null;
  $n_sci_Vector$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().id($m_jl_System$SystemProperties$().ko("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 250;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.nz = $x_1;
  this.nA = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.ok = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.Q();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((((knownSize - 1) | 0) >>> 0) <= 31)) {
      matchResult3: {
        var $x_1;
        if (false) {
          var x = it.rM().rt();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.rJ;
            break matchResult3;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.e7(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchResult3;
        }
        var a1$2 = new $ac_O(knownSize);
        it.B().e7(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().o4(it).oL();
    }
  }
});
$p.i8 = (function(source) {
  return this.ok(source);
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  gn: 1,
  a: 1,
  a7: 1,
  ag: 1,
  az: 1
}));
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$();
  }
  return $n_sci_Vector$;
}
function $p_sci_VectorBuilder__leftAlignPrefix__V($thiz) {
  var a = null;
  var aParent = null;
  if (($thiz.F >= 6)) {
    a = $thiz.aC;
    var i = (($thiz.z >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.m(i, dest, 0, length);
    }
    var num = $thiz.z;
    var t = (((num >> 24) >>> 7) | 0);
    var newOffset = (((33554431 & ((num + t) | 0)) - t) | 0);
    $thiz.r = (($thiz.r - (($thiz.z - newOffset) | 0)) | 0);
    $thiz.z = newOffset;
    if (((($thiz.r >>> 25) | 0) === 0)) {
      $thiz.F = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.F >= 5)) {
    if ((a === null)) {
      a = $thiz.U;
    }
    var i$2 = (31 & (($thiz.z >>> 20) | 0));
    if (($thiz.F === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.m(i$2, dest$1, 0, length$1);
      }
      $thiz.U = a;
      var num$1 = $thiz.z;
      var t$1 = (((num$1 >> 19) >>> 12) | 0);
      var newOffset$1 = (((1048575 & ((num$1 + t$1) | 0)) - t$1) | 0);
      $thiz.r = (($thiz.r - (($thiz.z - newOffset$1) | 0)) | 0);
      $thiz.z = newOffset$1;
      if (((($thiz.r >>> 20) | 0) === 0)) {
        $thiz.F = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().a3(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.F >= 4)) {
    if ((a === null)) {
      a = $thiz.J;
    }
    var i$3 = (31 & (($thiz.z >>> 15) | 0));
    if (($thiz.F === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.m(i$3, dest$2, 0, length$2);
      }
      $thiz.J = a;
      var num$2 = $thiz.z;
      var t$2 = (((num$2 >> 14) >>> 17) | 0);
      var newOffset$2 = (((32767 & ((num$2 + t$2) | 0)) - t$2) | 0);
      $thiz.r = (($thiz.r - (($thiz.z - newOffset$2) | 0)) | 0);
      $thiz.z = newOffset$2;
      if (((($thiz.r >>> 15) | 0) === 0)) {
        $thiz.F = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().a3(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.F >= 3)) {
    if ((a === null)) {
      a = $thiz.C;
    }
    var i$4 = (31 & (($thiz.z >>> 10) | 0));
    if (($thiz.F === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.m(i$4, dest$3, 0, length$3);
      }
      $thiz.C = a;
      var num$3 = $thiz.z;
      var t$3 = (((num$3 >> 9) >>> 22) | 0);
      var newOffset$3 = (((1023 & ((num$3 + t$3) | 0)) - t$3) | 0);
      $thiz.r = (($thiz.r - (($thiz.z - newOffset$3) | 0)) | 0);
      $thiz.z = newOffset$3;
      if (((($thiz.r >>> 10) | 0) === 0)) {
        $thiz.F = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().a3(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.F >= 2)) {
    if ((a === null)) {
      a = $thiz.v;
    }
    var i$5 = (31 & (($thiz.z >>> 5) | 0));
    if (($thiz.F === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.m(i$5, dest$4, 0, length$4);
      }
      $thiz.v = a;
      var num$4 = $thiz.z;
      var t$4 = (((num$4 >> 4) >>> 27) | 0);
      var newOffset$4 = (((31 & ((num$4 + t$4) | 0)) - t$4) | 0);
      $thiz.r = (($thiz.r - (($thiz.z - newOffset$4) | 0)) | 0);
      $thiz.z = newOffset$4;
      if (((($thiz.r >>> 5) | 0) === 0)) {
        $thiz.F = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().a3(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.F >= 1)) {
    if ((a === null)) {
      a = $thiz.O;
    }
    var i$6 = (31 & $thiz.z);
    if (($thiz.F === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.m(i$6, dest$5, 0, length$5);
      }
      $thiz.O = a;
      $thiz.D = (($thiz.D - $thiz.z) | 0);
      $thiz.z = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().a3(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.hP = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.D === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.D) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.O;
    var destPos = $thiz.D;
    data.m(0, dest, destPos, copy1);
    $thiz.D = (($thiz.D + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.O;
      data.m(copy1, dest$1, 0, copy2);
      $thiz.D = (($thiz.D + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.D === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.r) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.r >>> 5) | 0));
      var dest = $thiz.v;
      slice.m(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.v;
        slice.m(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      var num = $thiz.r;
      var t = (((num >> 9) >>> 22) | 0);
      if (((((1023 & ((num + t) | 0)) - t) | 0) !== 0)) {
        var f = ((e$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3, 2);
        });
        var len = slice.a.length;
        var i = 0;
        if ((slice !== null)) {
          while ((i < len)) {
            var x0 = slice.a[i];
            f(x0);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i < len)) {
            var x0$1 = slice.a[i];
            f(x0$1);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i < len)) {
            var x0$2 = slice.a[i];
            f(x0$2);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i < len)) {
            var $x_1 = slice.a;
            var $x_2 = (i << 1);
            var x0$3_$_lo = $x_1[$x_2];
            var x0$3_$_hi = $x_1[(($x_2 + 1) | 0)];
            f($bL(x0$3_$_lo, x0$3_$_hi));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i < len)) {
            var x0$4 = slice.a[i];
            f(x0$4);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i < len)) {
            var x0$5 = slice.a[i];
            f($bC(x0$5));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i < len)) {
            var x0$6 = slice.a[i];
            f(x0$6);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i < len)) {
            var x0$7 = slice.a[i];
            f(x0$7);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i < len)) {
            var x0$8 = slice.a[i];
            f(x0$8);
            i = ((1 + i) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$1 = (31 & ((((32768 - $thiz.r) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.r >>> 10) | 0));
      var dest$2 = $thiz.C;
      slice.m(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.C;
        slice.m(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      var num$1 = $thiz.r;
      var t$1 = (((num$1 >> 14) >>> 17) | 0);
      if (((((32767 & ((num$1 + t$1) | 0)) - t$1) | 0) !== 0)) {
        var f$1 = ((e$3$1) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3$1, 3);
        });
        var len$1 = slice.a.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var x0$9 = slice.a[i$1];
            f$1(x0$9);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$1 < len$1)) {
            var x0$10 = slice.a[i$1];
            f$1(x0$10);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$1 < len$1)) {
            var x0$11 = slice.a[i$1];
            f$1(x0$11);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$1 < len$1)) {
            var $x_3 = slice.a;
            var $x_4 = (i$1 << 1);
            var x0$12_$_lo = $x_3[$x_4];
            var x0$12_$_hi = $x_3[(($x_4 + 1) | 0)];
            f$1($bL(x0$12_$_lo, x0$12_$_hi));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$1 < len$1)) {
            var x0$13 = slice.a[i$1];
            f$1(x0$13);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$1 < len$1)) {
            var x0$14 = slice.a[i$1];
            f$1($bC(x0$14));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$1 < len$1)) {
            var x0$15 = slice.a[i$1];
            f$1(x0$15);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$1 < len$1)) {
            var x0$16 = slice.a[i$1];
            f$1(x0$16);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$1 < len$1)) {
            var x0$17 = slice.a[i$1];
            f$1(x0$17);
            i$1 = ((1 + i$1) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$2 = (31 & ((((1048576 - $thiz.r) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.r >>> 15) | 0));
      var dest$4 = $thiz.J;
      slice.m(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.J;
        slice.m(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      var num$2 = $thiz.r;
      var t$2 = (((num$2 >> 19) >>> 12) | 0);
      if (((((1048575 & ((num$2 + t$2) | 0)) - t$2) | 0) !== 0)) {
        var f$2 = ((e$3$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3$2, 4);
        });
        var len$2 = slice.a.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var x0$18 = slice.a[i$2];
            f$2(x0$18);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$2 < len$2)) {
            var x0$19 = slice.a[i$2];
            f$2(x0$19);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$2 < len$2)) {
            var x0$20 = slice.a[i$2];
            f$2(x0$20);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$2 < len$2)) {
            var $x_5 = slice.a;
            var $x_6 = (i$2 << 1);
            var x0$21_$_lo = $x_5[$x_6];
            var x0$21_$_hi = $x_5[(($x_6 + 1) | 0)];
            f$2($bL(x0$21_$_lo, x0$21_$_hi));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$2 < len$2)) {
            var x0$22 = slice.a[i$2];
            f$2(x0$22);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$2 < len$2)) {
            var x0$23 = slice.a[i$2];
            f$2($bC(x0$23));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$2 < len$2)) {
            var x0$24 = slice.a[i$2];
            f$2(x0$24);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$2 < len$2)) {
            var x0$25 = slice.a[i$2];
            f$2(x0$25);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$2 < len$2)) {
            var x0$26 = slice.a[i$2];
            f$2(x0$26);
            i$2 = ((1 + i$2) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$3 = (31 & ((((33554432 - $thiz.r) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.r >>> 20) | 0));
      var dest$6 = $thiz.U;
      slice.m(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.U;
        slice.m(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      var num$3 = $thiz.r;
      var t$3 = (((num$3 >> 24) >>> 7) | 0);
      if (((((33554431 & ((num$3 + t$3) | 0)) - t$3) | 0) !== 0)) {
        var f$3 = ((e$3$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3$3, 5);
        });
        var len$3 = slice.a.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var x0$27 = slice.a[i$3];
            f$3(x0$27);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$3 < len$3)) {
            var x0$28 = slice.a[i$3];
            f$3(x0$28);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$3 < len$3)) {
            var x0$29 = slice.a[i$3];
            f$3(x0$29);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$3 < len$3)) {
            var $x_7 = slice.a;
            var $x_8 = (i$3 << 1);
            var x0$30_$_lo = $x_7[$x_8];
            var x0$30_$_hi = $x_7[(($x_8 + 1) | 0)];
            f$3($bL(x0$30_$_lo, x0$30_$_hi));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$3 < len$3)) {
            var x0$31 = slice.a[i$3];
            f$3(x0$31);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$3 < len$3)) {
            var x0$32 = slice.a[i$3];
            f$3($bC(x0$32));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$3 < len$3)) {
            var x0$33 = slice.a[i$3];
            f$3(x0$33);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$3 < len$3)) {
            var x0$34 = slice.a[i$3];
            f$3(x0$34);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$3 < len$3)) {
            var x0$35 = slice.a[i$3];
            f$3(x0$35);
            i$3 = ((1 + i$3) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var destPos$5 = (($thiz.r >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.aC;
      slice.m(0, dest$8, destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.cK();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.cJ(sliceIdx);
    matchResult26: {
      var idx = sliceIdx;
      var c = (((sliceCount + ((sliceCount >>> 31) | 0)) | 0) >> 1);
      var a = ((idx - c) | 0);
      var sign = (a >> 31);
      var x37 = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
      if ((x37 === 1)) {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
        break matchResult26;
      }
      if ((($thiz.D === 32) || ($thiz.D === 0))) {
        $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x37);
        break matchResult26;
      }
      $m_sci_VectorStatics$().kj(((x37 - 2) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((data$3) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$3);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.r) | 0);
  var xor = (idx ^ $thiz.r);
  $thiz.r = idx;
  $thiz.D = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.r + n) | 0);
    var xor = (idx ^ $thiz.r);
    $thiz.r = idx;
    $thiz.D = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.O) + ", a2=") + $thiz.v) + ", a3=") + $thiz.C) + ", a4=") + $thiz.J) + ", a5=") + $thiz.U) + ", a6=") + $thiz.aC) + ", depth=") + $thiz.F));
  } else if ((xor < 1024)) {
    if (($thiz.F <= 1)) {
      $thiz.v = new ($d_O.r().r().C)(32);
      $thiz.v.a[0] = $thiz.O;
      $thiz.F = 2;
    }
    $thiz.O = new $ac_O(32);
    $thiz.v.a[(31 & ((idx >>> 5) | 0))] = $thiz.O;
  } else if ((xor < 32768)) {
    if (($thiz.F <= 2)) {
      $thiz.C = new ($d_O.r().r().r().C)(32);
      $thiz.C.a[0] = $thiz.v;
      $thiz.F = 3;
    }
    $thiz.O = new $ac_O(32);
    $thiz.v = new ($d_O.r().r().C)(32);
    $thiz.v.a[(31 & ((idx >>> 5) | 0))] = $thiz.O;
    $thiz.C.a[(31 & ((idx >>> 10) | 0))] = $thiz.v;
  } else if ((xor < 1048576)) {
    if (($thiz.F <= 3)) {
      $thiz.J = new ($d_O.r().r().r().r().C)(32);
      $thiz.J.a[0] = $thiz.C;
      $thiz.F = 4;
    }
    $thiz.O = new $ac_O(32);
    $thiz.v = new ($d_O.r().r().C)(32);
    $thiz.C = new ($d_O.r().r().r().C)(32);
    $thiz.v.a[(31 & ((idx >>> 5) | 0))] = $thiz.O;
    $thiz.C.a[(31 & ((idx >>> 10) | 0))] = $thiz.v;
    $thiz.J.a[(31 & ((idx >>> 15) | 0))] = $thiz.C;
  } else if ((xor < 33554432)) {
    if (($thiz.F <= 4)) {
      $thiz.U = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.U.a[0] = $thiz.J;
      $thiz.F = 5;
    }
    $thiz.O = new $ac_O(32);
    $thiz.v = new ($d_O.r().r().C)(32);
    $thiz.C = new ($d_O.r().r().r().C)(32);
    $thiz.J = new ($d_O.r().r().r().r().C)(32);
    $thiz.v.a[(31 & ((idx >>> 5) | 0))] = $thiz.O;
    $thiz.C.a[(31 & ((idx >>> 10) | 0))] = $thiz.v;
    $thiz.J.a[(31 & ((idx >>> 15) | 0))] = $thiz.C;
    $thiz.U.a[(31 & ((idx >>> 20) | 0))] = $thiz.J;
  } else {
    if (($thiz.F <= 5)) {
      $thiz.aC = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.aC.a[0] = $thiz.U;
      $thiz.F = 6;
    }
    $thiz.O = new $ac_O(32);
    $thiz.v = new ($d_O.r().r().C)(32);
    $thiz.C = new ($d_O.r().r().r().C)(32);
    $thiz.J = new ($d_O.r().r().r().r().C)(32);
    $thiz.U = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.v.a[(31 & ((idx >>> 5) | 0))] = $thiz.O;
    $thiz.C.a[(31 & ((idx >>> 10) | 0))] = $thiz.v;
    $thiz.J.a[(31 & ((idx >>> 15) | 0))] = $thiz.C;
    $thiz.U.a[(31 & ((idx >>> 20) | 0))] = $thiz.J;
    $thiz.aC.a[((idx >>> 25) | 0)] = $thiz.U;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.aC = null;
  this.U = null;
  this.J = null;
  this.C = null;
  this.v = null;
  this.O = null;
  this.D = 0;
  this.r = 0;
  this.z = 0;
  this.hP = false;
  this.F = 0;
  this.O = new $ac_O(32);
  this.D = 0;
  this.r = 0;
  this.z = 0;
  this.hP = false;
  this.F = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.eg = (function(size) {
});
$p.qM = (function(v) {
  var x28 = v.cK();
  switch (x28) {
    case 0: {
      break;
    }
    case 1: {
      this.F = 1;
      var i = v.c.a.length;
      this.D = (31 & i);
      this.r = ((i - this.D) | 0);
      var a = v.c;
      this.O = ((a.a.length === 32) ? a : $m_ju_Arrays$().a3(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.bl;
      var a$1 = v.e;
      this.O = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().a3(a$1, 0, 32));
      this.F = 2;
      this.z = ((32 - v.bM) | 0);
      var i$1 = ((v.f + this.z) | 0);
      this.D = (31 & i$1);
      this.r = ((i$1 - this.D) | 0);
      this.v = new ($d_O.r().r().C)(32);
      this.v.a[0] = v.c;
      var dest = this.v;
      var length = d2.a.length;
      d2.m(0, dest, 1, length);
      this.v.a[((1 + d2.a.length) | 0)] = this.O;
      break;
    }
    case 5: {
      var d3 = v.aV;
      var s2 = v.aW;
      var a$2 = v.e;
      this.O = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().a3(a$2, 0, 32));
      this.F = 3;
      this.z = ((1024 - v.ba) | 0);
      var i$2 = ((v.f + this.z) | 0);
      this.D = (31 & i$2);
      this.r = ((i$2 - this.D) | 0);
      this.C = new ($d_O.r().r().r().C)(32);
      this.C.a[0] = $m_sci_VectorStatics$().cE(v.c, v.by);
      var dest$1 = this.C;
      var length$1 = d3.a.length;
      d3.m(0, dest$1, 1, length$1);
      this.v = $m_ju_Arrays$().S(s2, 32);
      this.C.a[((1 + d3.a.length) | 0)] = this.v;
      this.v.a[s2.a.length] = this.O;
      break;
    }
    case 7: {
      var d4 = v.az;
      var s3 = v.aB;
      var s2$2 = v.aA;
      var a$3 = v.e;
      this.O = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().a3(a$3, 0, 32));
      this.F = 4;
      this.z = ((32768 - v.aR) | 0);
      var i$3 = ((v.f + this.z) | 0);
      this.D = (31 & i$3);
      this.r = ((i$3 - this.D) | 0);
      this.J = new ($d_O.r().r().r().r().C)(32);
      this.J.a[0] = $m_sci_VectorStatics$().cE($m_sci_VectorStatics$().cE(v.c, v.b5), v.b6);
      var dest$2 = this.J;
      var length$2 = d4.a.length;
      d4.m(0, dest$2, 1, length$2);
      this.C = $m_ju_Arrays$().S(s3, 32);
      this.v = $m_ju_Arrays$().S(s2$2, 32);
      this.J.a[((1 + d4.a.length) | 0)] = this.C;
      this.C.a[s3.a.length] = this.v;
      this.v.a[s2$2.a.length] = this.O;
      break;
    }
    case 9: {
      var d5 = v.a7;
      var s4 = v.aa;
      var s3$2 = v.a9;
      var s2$3 = v.a8;
      var a$4 = v.e;
      this.O = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().a3(a$4, 0, 32));
      this.F = 5;
      this.z = ((1048576 - v.ap) | 0);
      var i$4 = ((v.f + this.z) | 0);
      this.D = (31 & i$4);
      this.r = ((i$4 - this.D) | 0);
      this.U = new ($d_O.r().r().r().r().r().C)(32);
      this.U.a[0] = $m_sci_VectorStatics$().cE($m_sci_VectorStatics$().cE($m_sci_VectorStatics$().cE(v.c, v.aG), v.aH), v.aI);
      var dest$3 = this.U;
      var length$3 = d5.a.length;
      d5.m(0, dest$3, 1, length$3);
      this.J = $m_ju_Arrays$().S(s4, 32);
      this.C = $m_ju_Arrays$().S(s3$2, 32);
      this.v = $m_ju_Arrays$().S(s2$3, 32);
      this.U.a[((1 + d5.a.length) | 0)] = this.J;
      this.J.a[s4.a.length] = this.C;
      this.C.a[s3$2.a.length] = this.v;
      this.v.a[s2$3.a.length] = this.O;
      break;
    }
    case 11: {
      var d6 = v.Y;
      var s5 = v.a2;
      var s4$2 = v.a1;
      var s3$3 = v.a0;
      var s2$4 = v.Z;
      var a$5 = v.e;
      this.O = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().a3(a$5, 0, 32));
      this.F = 6;
      this.z = ((33554432 - v.aj) | 0);
      var i$5 = ((v.f + this.z) | 0);
      this.D = (31 & i$5);
      this.r = ((i$5 - this.D) | 0);
      this.aC = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aC.a[0] = $m_sci_VectorStatics$().cE($m_sci_VectorStatics$().cE($m_sci_VectorStatics$().cE($m_sci_VectorStatics$().cE(v.c, v.aq), v.ar), v.as), v.at);
      var dest$4 = this.aC;
      var length$4 = d6.a.length;
      d6.m(0, dest$4, 1, length$4);
      this.U = $m_ju_Arrays$().S(s5, 32);
      this.J = $m_ju_Arrays$().S(s4$2, 32);
      this.C = $m_ju_Arrays$().S(s3$3, 32);
      this.v = $m_ju_Arrays$().S(s2$4, 32);
      this.aC.a[((1 + d6.a.length) | 0)] = this.U;
      this.U.a[s5.a.length] = this.J;
      this.J.a[s4$2.a.length] = this.C;
      this.C.a[s3$3.a.length] = this.v;
      this.v.a[s2$4.a.length] = this.O;
      break;
    }
    default: {
      throw new $c_s_MatchError(x28);
    }
  }
  if (((this.D === 0) && (this.r > 0))) {
    this.D = 32;
    this.r = ((this.r - 32) | 0);
  }
  return this;
});
$p.pH = (function(elem) {
  if ((this.D === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.O.a[this.D] = elem;
  this.D = ((1 + this.D) | 0);
  return this;
});
$p.o4 = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.D === 0) && (this.r === 0)) && (!this.hP)) ? this.qM(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.oL = (function() {
  if (this.hP) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.D + this.r) | 0);
  var realLen = ((len - this.z) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.O;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().S(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & ((len - 1) | 0));
    var i2 = ((((len - 1) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().a3(this.v, 1, i2);
    var prefix1 = this.v.a[0];
    var a$1 = this.v.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().S(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.z) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & ((len - 1) | 0));
    var i2$2 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3 = ((((len - 1) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().a3(this.C, 1, i3);
    var a$2 = this.C.a[0];
    var prefix2 = $m_ju_Arrays$().a3(a$2, 1, a$2.a.length);
    var prefix1$2 = this.C.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().S(this.C.a[i3], i2$2);
    var a$3 = this.C.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().S(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & ((len - 1) | 0));
    var i2$3 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$2 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4 = ((((len - 1) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().a3(this.J, 1, i4);
    var a$4 = this.J.a[0];
    var prefix3 = $m_ju_Arrays$().a3(a$4, 1, a$4.a.length);
    var a$5 = this.J.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().a3(a$5, 1, a$5.a.length);
    var prefix1$3 = this.J.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().S(this.J.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().S(this.J.a[i4].a[i3$2], i2$3);
    var a$6 = this.J.a[i4].a[i3$2].a[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.a.length === len$3) ? a$6 : $m_ju_Arrays$().S(a$6, len$3));
    var len1$2 = prefix1$3.a.length;
    var len12$2 = ((len1$2 + (prefix2$2.a.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & ((len - 1) | 0));
    var i2$4 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$3 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4$2 = (31 & ((((len - 1) | 0) >>> 15) | 0));
    var i5 = ((((len - 1) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().a3(this.U, 1, i5);
    var a$7 = this.U.a[0];
    var prefix4 = $m_ju_Arrays$().a3(a$7, 1, a$7.a.length);
    var a$8 = this.U.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().a3(a$8, 1, a$8.a.length);
    var a$9 = this.U.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().a3(a$9, 1, a$9.a.length);
    var prefix1$4 = this.U.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().S(this.U.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().S(this.U.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().S(this.U.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.U.a[i5].a[i4$2].a[i3$3].a[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.a.length === len$4) ? a$10 : $m_ju_Arrays$().S(a$10, len$4));
    var len1$3 = prefix1$4.a.length;
    var len12$3 = ((len1$3 + (prefix2$3.a.length << 5)) | 0);
    var len123$2 = ((len12$3 + (prefix3$2.a.length << 10)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, ((len123$2 + (prefix4.a.length << 15)) | 0), data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen);
  } else {
    var i1$5 = (31 & ((len - 1) | 0));
    var i2$5 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$4 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4$3 = (31 & ((((len - 1) | 0) >>> 15) | 0));
    var i5$2 = (31 & ((((len - 1) | 0) >>> 20) | 0));
    var i6 = ((((len - 1) | 0) >>> 25) | 0);
    var data$5 = $m_ju_Arrays$().a3(this.aC, 1, i6);
    var a$11 = this.aC.a[0];
    var prefix5 = $m_ju_Arrays$().a3(a$11, 1, a$11.a.length);
    var a$12 = this.aC.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().a3(a$12, 1, a$12.a.length);
    var a$13 = this.aC.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().a3(a$13, 1, a$13.a.length);
    var a$14 = this.aC.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().a3(a$14, 1, a$14.a.length);
    var prefix1$5 = this.aC.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().S(this.aC.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().S(this.aC.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().S(this.aC.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().S(this.aC.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.aC.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().S(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.q = (function() {
  return (((((((("VectorBuilder(len1=" + this.D) + ", lenRest=") + this.r) + ", offset=") + this.z) + ", depth=") + this.F) + ")");
});
$p.e5 = (function(elem) {
  return this.pH(elem);
});
$p.e3 = (function(elems) {
  return this.o4(elems);
});
$p.ee = (function() {
  return this.oL();
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  gv: 1,
  Y: 1,
  Z: 1,
  X: 1,
  aj: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.jH = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  gC: 1,
  fK: 1,
  a: 1,
  a7: 1,
  ag: 1
}));
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
function $ct_scm_HashMap$HashMapIterator__scm_HashMap__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.fW = outer;
  $thiz.dv = 0;
  $thiz.cY = null;
  $thiz.fX = outer.P.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashMap$HashMapIterator() {
  this.dv = 0;
  this.cY = null;
  this.fX = 0;
  this.fW = null;
}
$p = $c_scm_HashMap$HashMapIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashMap$HashMapIterator;
/** @constructor */
function $h_scm_HashMap$HashMapIterator() {
}
$h_scm_HashMap$HashMapIterator.prototype = $p;
$p.h = (function() {
  if ((this.cY !== null)) {
    return true;
  } else {
    while ((this.dv < this.fX)) {
      var n = this.fW.P.a[this.dv];
      this.dv = ((1 + this.dv) | 0);
      if ((n !== null)) {
        this.cY = n;
        return true;
      }
    }
    return false;
  }
});
$p.g = (function() {
  if ((!this.h())) {
    return $m_sc_Iterator$().a4.g();
  } else {
    var x$proxy14 = this.cY;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().bb();
    }
    var r = this.kh(x$proxy14);
    var x$proxy15 = this.cY;
    if ((x$proxy15 === null)) {
      $m_sr_Scala3RunTime$().bb();
    }
    this.cY = x$proxy15.aD;
    return r;
  }
});
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.fY = outer;
  $thiz.dx = 0;
  $thiz.cZ = null;
  $thiz.fZ = outer.au.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.dx = 0;
  this.cZ = null;
  this.fZ = 0;
  this.fY = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.h = (function() {
  if ((this.cZ !== null)) {
    return true;
  } else {
    while ((this.dx < this.fZ)) {
      var n = this.fY.au.a[this.dx];
      this.dx = ((1 + this.dx) | 0);
      if ((n !== null)) {
        this.cZ = n;
        return true;
      }
    }
    return false;
  }
});
$p.g = (function() {
  if ((!this.h())) {
    return $m_sc_Iterator$().a4.g();
  } else {
    var x$proxy10 = this.cZ;
    if ((x$proxy10 === null)) {
      $m_sr_Scala3RunTime$().bb();
    }
    var r = this.ki(x$proxy10);
    var x$proxy11 = this.cZ;
    if ((x$proxy11 === null)) {
      $m_sr_Scala3RunTime$().bb();
    }
    this.cZ = x$proxy11.af;
    return r;
  }
});
/** @constructor */
function $c_s_concurrent_ExecutionContext$parasitic$() {
  this.nG = null;
  $n_s_concurrent_ExecutionContext$parasitic$ = this;
  this.nG = new $c_jl_ThreadLocal();
}
$p = $c_s_concurrent_ExecutionContext$parasitic$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_ExecutionContext$parasitic$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$parasitic$() {
}
$h_s_concurrent_ExecutionContext$parasitic$.prototype = $p;
$p.kg = (function(runnable) {
  $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V(this, runnable);
});
$p.kM = (function(t) {
  $m_s_concurrent_ExecutionContext$().eN.n(t);
});
var $d_s_concurrent_ExecutionContext$parasitic$ = new $TypeData().i($c_s_concurrent_ExecutionContext$parasitic$, "scala.concurrent.ExecutionContext$parasitic$", ({
  gY: 1,
  aG: 1,
  au: 1,
  aH: 1,
  gU: 1
}));
var $n_s_concurrent_ExecutionContext$parasitic$;
function $m_s_concurrent_ExecutionContext$parasitic$() {
  if ((!$n_s_concurrent_ExecutionContext$parasitic$)) {
    $n_s_concurrent_ExecutionContext$parasitic$ = new $c_s_concurrent_ExecutionContext$parasitic$();
  }
  return $n_s_concurrent_ExecutionContext$parasitic$;
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.nQ = null;
  this.g7 = 0;
  this.nP = 0;
  this.nQ = x$1;
  this.g7 = 0;
  this.nP = x$1.cG();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.h = (function() {
  return (this.g7 < this.nP);
});
$p.g = (function() {
  var result = this.nQ.cH(this.g7);
  this.g7 = ((1 + this.g7) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  ht: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray$() {
}
$p = $c_sjs_js_WrappedArray$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
}
$h_sjs_js_WrappedArray$.prototype = $p;
$p.qz = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).ee();
});
$p.i8 = (function(source) {
  return this.qz(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  hF: 1,
  az: 1,
  a: 1,
  a7: 1,
  ag: 1
}));
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$();
  }
  return $n_sjs_js_WrappedArray$;
}
/** @constructor */
function $c_s_util_Failure(exception) {
  this.dA = null;
  this.dA = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.A = (function() {
  return $m_s_util_hashing_MurmurHash3$().gu(this, (-1408943127), true);
});
$p.E = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_s_util_Failure)) {
    var x = this.dA;
    var x$2 = x$0.dA;
    return ((x === null) ? (x$2 === null) : x.E(x$2));
  } else {
    return false;
  }
});
$p.q = (function() {
  return $m_sr_ScalaRunTime$().k2(this);
});
$p.cG = (function() {
  return 1;
});
$p.cI = (function() {
  return "Failure";
});
$p.cH = (function(n) {
  if ((n === 0)) {
    return this.dA;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.bO = (function() {
  var $x_1 = this.dA;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.cm : $x_1);
});
$p.e9 = (function(f) {
});
$p.oH = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.gh(this.dA, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x18 = $m_s_util_control_NonFatal$().rH(e$2);
    if ((!x18.t())) {
      return new $c_s_util_Failure(x18.bO());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.cm : e$2);
  }
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bR)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  bR: 1,
  aJ: 1,
  d: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.eO = null;
  this.eO = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.A = (function() {
  return $m_s_util_hashing_MurmurHash3$().gu(this, (-1750213842), true);
});
$p.E = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().i(this.eO, x$0.eO)));
});
$p.q = (function() {
  return $m_sr_ScalaRunTime$().k2(this);
});
$p.cG = (function() {
  return 1;
});
$p.cI = (function() {
  return "Success";
});
$p.cH = (function(n) {
  if ((n === 0)) {
    return this.eO;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.bO = (function() {
  return this.eO;
});
$p.e9 = (function(f) {
  f.n(this.eO);
});
$p.oH = (function(pf) {
  return this;
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bS)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  bS: 1,
  aJ: 1,
  d: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_matching_Regex$$anon$1(matchIterator$2) {
  this.eP = null;
  this.eP = matchIterator$2;
}
$p = $c_s_util_matching_Regex$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_util_matching_Regex$$anon$1;
/** @constructor */
function $h_s_util_matching_Regex$$anon$1() {
}
$h_s_util_matching_Regex$$anon$1.prototype = $p;
$p.h = (function() {
  return this.eP.h();
});
$p.ij = (function() {
  this.eP.gp();
  return new $c_s_util_matching_Regex$Match(this.eP.hZ, this.eP.d1, this.eP.k1).oi();
});
$p.g = (function() {
  return this.ij();
});
var $d_s_util_matching_Regex$$anon$1 = new $TypeData().i($c_s_util_matching_Regex$$anon$1, "scala.util.matching.Regex$$anon$1", ({
  hS: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
function $ct_jl_ArrayIndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_ArrayIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().i($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
  bX: 1,
  aR: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aQ)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  aQ: 1,
  O: 1,
  a: 1,
  A: 1,
  B: 1,
  a4: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  c5: 1,
  O: 1,
  a: 1,
  A: 1,
  B: 1,
  a4: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  c7: 1,
  O: 1,
  a: 1,
  A: 1,
  B: 1,
  a4: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, $thizhi, that) {
  if ((that instanceof $Long)) {
    var $x_1 = that;
    var this$1_$_lo = $x_1.l;
    var this$1_$_hi = $x_1.h;
    return ((($thiz ^ this$1_$_lo) | ($thizhi ^ this$1_$_hi)) === 0);
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().oV($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aS)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  aS: 1,
  O: 1,
  a: 1,
  A: 1,
  B: 1,
  a4: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  ce: 1,
  ao: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1
}));
function $f_T__codePointAt__I__I($thiz, index) {
  return ($thiz.codePointAt(index) | 0);
}
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    h = (((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__repeat__I__T($thiz, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  } else {
    return $thiz.repeat(count);
  }
}
function $f_T__subSequence__I__I__jl_CharSequence($thiz, beginIndex, endIndex) {
  return $thiz.substring(beginIndex, endIndex);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  ck: 1,
  a: 1,
  A: 1,
  am: 1,
  B: 1,
  a4: 1
}), ((x) => ((typeof x) === "string")));
/** @constructor */
function $c_ju_AbstractList() {
}
$p = $c_ju_AbstractList.prototype = new $h_ju_AbstractCollection();
$p.constructor = $c_ju_AbstractList;
/** @constructor */
function $h_ju_AbstractList() {
}
$h_ju_AbstractList.prototype = $p;
$p.ce = (function() {
  return this.f1(0);
});
$p.f1 = (function(index) {
  var length = this.l();
  if (((index >>> 0) > (length >>> 0))) {
    $m_jl_BoundsChecks$().ku(index, length);
  }
  return new $c_ju_RandomAccessListIterator(this, index, 0, this.l());
});
$p.E = (function(o) {
  if ((o === this)) {
    return true;
  } else if ($is_ju_List(o)) {
    var oIter = o.f1(0);
    var _\uff3fself = this.f1(0);
    _return: {
      while (_\uff3fself.h()) {
        var t = _\uff3fself.g();
        if (oIter.h()) {
          var b = oIter.g();
          var $x_2 = ((t === null) ? (b === null) : $dp_equals__O__Z(t, b));
        } else {
          var $x_2 = false;
        }
        if ((!$x_2)) {
          var $x_1 = true;
          break _return;
        }
      }
      var $x_1 = false;
    }
    if ((!$x_1)) {
      return (!oIter.h());
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.A = (function() {
  var _\uff3fself = this.f1(0);
  var result = 1;
  while (_\uff3fself.h()) {
    var t = result;
    var u = _\uff3fself.g();
    result = ((Math.imul(31, (t | 0)) + ((u === null) ? 0 : $dp_hashCode__I(u))) | 0);
  }
  return (result | 0);
});
/** @constructor */
function $c_ju_HashMap$EntrySet(outer) {
  this.gE = null;
  this.gE = outer;
}
$p = $c_ju_HashMap$EntrySet.prototype = new $h_ju_AbstractSet();
$p.constructor = $c_ju_HashMap$EntrySet;
/** @constructor */
function $h_ju_HashMap$EntrySet() {
}
$h_ju_HashMap$EntrySet.prototype = $p;
$p.ce = (function() {
  return new $c_ju_HashMap$NodeIterator(this.gE);
});
$p.l = (function() {
  return this.gE.bT;
});
$p.aX = (function(o) {
  if ($is_ju_Map$Entry(o)) {
    var this$1 = this.gE;
    var key = o.cg;
    if ((key === null)) {
      var hash = 0;
    } else {
      var originalHash = $dp_hashCode__I(key);
      var hash = (originalHash ^ ((originalHash >>> 16) | 0));
    }
    var node = this$1.ig(key, hash, (hash & ((this$1.aK.a.length - 1) | 0)));
    if ((node !== null)) {
      var a = node.bo;
      var b = o.bo;
      return ((a === null) ? (b === null) : $dp_equals__O__Z(a, b));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
var $d_ju_HashMap$EntrySet = new $TypeData().i($c_ju_HashMap$EntrySet, "java.util.HashMap$EntrySet", ({
  cB: 1,
  aq: 1,
  a5: 1,
  P: 1,
  a3: 1,
  at: 1
}));
/** @constructor */
function $c_ju_HashMap$KeySet(outer) {
  this.gF = null;
  this.gF = outer;
}
$p = $c_ju_HashMap$KeySet.prototype = new $h_ju_AbstractSet();
$p.constructor = $c_ju_HashMap$KeySet;
/** @constructor */
function $h_ju_HashMap$KeySet() {
}
$h_ju_HashMap$KeySet.prototype = $p;
$p.ce = (function() {
  return new $c_ju_HashMap$KeyIterator(this.gF);
});
$p.l = (function() {
  return this.gF.bT;
});
$p.aX = (function(o) {
  return this.gF.d4(o);
});
var $d_ju_HashMap$KeySet = new $TypeData().i($c_ju_HashMap$KeySet, "java.util.HashMap$KeySet", ({
  cD: 1,
  aq: 1,
  a5: 1,
  P: 1,
  a3: 1,
  at: 1
}));
class $c_ju_regex_PatternSyntaxException extends $c_jl_IllegalArgumentException {
  constructor(desc, regex, index) {
    super();
    this.lj = null;
    this.ll = null;
    this.lk = 0;
    this.lj = desc;
    this.ll = regex;
    this.lk = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gl() {
    var idx = this.lk;
    var re = this.ll;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.lj + indexHint) + "\n") + re);
    return ((((idx >= 0) && (re !== null)) && (idx < re.length)) ? (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^") : base);
  }
}
var $d_ju_regex_PatternSyntaxException = new $TypeData().i($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
  d5: 1,
  ao: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1
}));
function $p_Lorg_loveroo_webgl_engine_render_TextureAtlas__onTextureLoadComplete__ju_Map__jl_Void($thiz, textures) {
  $f_Lorg_loveroo_webgl_engine_runtime_EngineRuntime__debugLog__T__jl_Void($m_Lorg_loveroo_webgl_Game$().y.x, (((("Stitching atlas " + $thiz.lD) + " with ") + textures.bT) + " elements"));
  $thiz.e6(true);
  $m_Lorg_loveroo_webgl_engine_render_Renderer$().i5();
  var i = new $c_sr_IntRef(0);
  $f_jl_Iterable__forEach__ju_function_Consumer__V($thiz.ft, new $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$3(textures, i, $thiz));
  $thiz.hb.eT();
  textures.eW(new $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$4($thiz));
  $thiz.ha = true;
  return $thiz.kG();
}
/** @constructor */
function $c_Lorg_loveroo_webgl_engine_render_TextureAtlas(id, path, atlasSize, elementSize, elements) {
  this.ez = null;
  this.bX = false;
  this.eA = null;
  this.ak = null;
  this.ci = null;
  this.br = null;
  this.dR = 0;
  this.dQ = 0;
  this.j2 = null;
  this.fp = null;
  this.lD = null;
  this.lE = null;
  this.db = null;
  this.cO = null;
  this.ft = null;
  this.ja = null;
  this.ha = false;
  this.hb = null;
  this.fu = 0;
  this.lD = id;
  this.lE = path;
  this.db = atlasSize;
  this.cO = elementSize;
  this.ft = elements;
  $ct_Lorg_loveroo_webgl_engine_render_RenderBuffer__T__Lorg_loveroo_webgl_engine_render_data_ColorFormat__I__I__(this, id, $m_Lorg_loveroo_webgl_engine_render_Renderer$().cN.dT, atlasSize.bW, atlasSize.bF);
  this.ha = false;
  this.hb = $ct_Lorg_loveroo_webgl_engine_render_Shader__T__T__(new $c_Lorg_loveroo_webgl_engine_render_Shader(), "sprite_raw", "sprite");
}
$p = $c_Lorg_loveroo_webgl_engine_render_TextureAtlas.prototype = new $h_Lorg_loveroo_webgl_engine_render_RenderBuffer();
$p.constructor = $c_Lorg_loveroo_webgl_engine_render_TextureAtlas;
/** @constructor */
function $h_Lorg_loveroo_webgl_engine_render_TextureAtlas() {
}
$h_Lorg_loveroo_webgl_engine_render_TextureAtlas.prototype = $p;
$p.bz = (function() {
  $c_Lorg_loveroo_webgl_engine_render_RenderBuffer.prototype.bz.call(this);
  this.fu = ((this.db.bW / $checkIntDivisor(this.cO.bW)) | 0);
  this.ja = $ct_ju_HashMap__(new $c_ju_HashMap());
  var i = new $c_sr_IntRef(0);
  $f_jl_Iterable__forEach__ju_function_Consumer__V(this.ft, new $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$1(i, this));
  var textures = $ct_ju_HashMap__(new $c_ju_HashMap());
  var loaded = new $c_sr_IntRef(0);
  $f_jl_Iterable__forEach__ju_function_Consumer__V(this.ft, new $c_Lorg_loveroo_webgl_engine_render_TextureAtlas$$anon$2(textures, loaded, this));
});
$p.kG = (function() {
  return (this.ha ? $f_Lorg_loveroo_webgl_engine_data_resource_Resource__postCreate__jl_Void(this) : (void 0));
});
$p.e6 = (function(clear) {
  return ((!this.ha) ? $c_Lorg_loveroo_webgl_engine_render_RenderBuffer.prototype.e6.call(this, clear) : (void 0));
});
$p.ou = (function(id) {
  return $p_ju_HashMap__getOrDefaultImpl__O__O__O(this.ja, id, null);
});
var $d_Lorg_loveroo_webgl_engine_render_TextureAtlas = new $TypeData().i($c_Lorg_loveroo_webgl_engine_render_TextureAtlas, "org.loveroo.webgl.engine.render.TextureAtlas", ({
  dN: 1,
  b6: 1,
  ab: 1,
  ac: 1,
  H: 1,
  R: 1
}));
/** @constructor */
function $c_s_None$() {
}
$p = $c_s_None$.prototype = new $h_s_Option();
$p.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $p;
$p.A = (function() {
  return 2433880;
});
$p.q = (function() {
  return "None";
});
$p.cG = (function() {
  return 0;
});
$p.cI = (function() {
  return "None";
});
$p.cH = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.qC = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get");
});
$p.bO = (function() {
  this.qC();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  fq: 1,
  bk: 1,
  b: 1,
  d: 1,
  K: 1,
  a: 1
}));
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
/** @constructor */
function $c_s_Some(value) {
  this.eI = null;
  this.eI = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.A = (function() {
  return $m_s_util_hashing_MurmurHash3$().gu(this, 1323286827, true);
});
$p.E = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().i(this.eI, x$0.eI)));
});
$p.q = (function() {
  return $m_sr_ScalaRunTime$().k2(this);
});
$p.cG = (function() {
  return 1;
});
$p.cI = (function() {
  return "Some";
});
$p.cH = (function(n) {
  if ((n === 0)) {
    return this.eI;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.bO = (function() {
  return this.eI;
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bl)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  bl: 1,
  bk: 1,
  b: 1,
  d: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.Q = (function() {
  return (-1);
});
$p.eX = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.e7 = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.i2 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.dD = (function() {
  return this.dJ();
});
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.bt) ? $thiz.bt : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.nn = null;
  this.di = 0;
  this.bt = 0;
  this.nn = self;
  this.di = 0;
  this.bt = self.G();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.Q = (function() {
  return this.bt;
});
$p.h = (function() {
  return (this.bt > 0);
});
$p.g = (function() {
  if ((this.bt > 0)) {
    var r = this.nn.V(this.di);
    this.di = ((1 + this.di) | 0);
    this.bt = ((this.bt - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().a4.g();
  }
});
$p.e8 = (function(n) {
  if ((n > 0)) {
    this.di = ((this.di + n) | 0);
    var b = ((this.bt - n) | 0);
    this.bt = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.gx = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bt = ((b < 0) ? 0 : b);
  this.di = ((this.di + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  fB: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1,
  a: 1
}));
function $f_sc_MapOps__getOrElse__O__F0__O($thiz, key, default$1) {
  var x5 = $thiz.ea(key);
  if ((x5 instanceof $c_s_Some)) {
    return x5.eI;
  }
  if (($m_s_None$() === x5)) {
    return default$1.av();
  }
  throw new $c_s_MatchError(x5);
}
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.dF(x, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => default$1.n(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.B();
  while (it.h()) {
    var next = it.g();
    f.gg(next.b3, next.aL);
  }
}
function $f_sc_MapOps__default__O__O($thiz, key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.b3;
    var v = x$1$2.aL;
    return ((k + " -> ") + v);
  })), $thiz.B()), sb, start, sep, end);
}
/** @constructor */
function $c_sci_HashMapBuilder$$anon$1(hm$1, outer) {
  this.bH = 0;
  this.fP = 0;
  this.dY = null;
  this.bw = 0;
  this.cS = null;
  this.fQ = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_ChampBaseIterator__sci_Node__(this, hm$1.b4);
  while (this.h()) {
    var originalHash = this.dY.eY(this.bH);
    outer.f5(outer.cw, this.dY.cF(this.bH), this.dY.cp(this.bH), originalHash, $m_sc_Hashing$().cc(originalHash), 0);
    this.bH = ((1 + this.bH) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.g = (function() {
  return $m_sc_Iterator$().a4.g();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  fX: 1,
  bs: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.q)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.q)));
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.dp = 0;
  this.eK = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  g4: 1,
  g5: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.dr = 0;
  this.dq = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $p;
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  g6: 1,
  g7: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.ds = 0;
  this.cA = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  g8: 1,
  g9: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.dl = 0;
  this.hN = null;
  this.bI = 0;
  this.fR = null;
  this.fS = null;
  this.jK = 0;
  this.nw = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.jK = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.A = (function() {
  return $m_s_util_hashing_MurmurHash3$().oW(this.jK, $m_sr_Statics$().I(this.nw), (-889275714));
});
$p.r7 = (function() {
  if ((!this.h())) {
    $m_sc_Iterator$().a4.g();
  }
  this.jK = this.hN.eY(this.dl);
  this.nw = this.hN.cp(this.dl);
  this.dl = ((this.dl - 1) | 0);
  return this;
});
$p.g = (function() {
  return this.r7();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  gb: 1,
  fU: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.bH = 0;
  this.fP = 0;
  this.dY = null;
  this.bw = 0;
  this.cS = null;
  this.fQ = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.r6 = (function() {
  if ((!this.h())) {
    $m_sc_Iterator$().a4.g();
  }
  var payload = this.dY.op(this.bH);
  this.bH = ((1 + this.bH) | 0);
  return payload;
});
$p.g = (function() {
  return this.r6();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  gc: 1,
  bs: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bx <= $thiz.al)) {
    $m_sc_Iterator$().a4.g();
  }
  $thiz.du = ((1 + $thiz.du) | 0);
  var slice = $thiz.jM.cJ($thiz.du);
  while ((slice.a.length === 0)) {
    $thiz.du = ((1 + $thiz.du) | 0);
    slice = $thiz.jM.cJ($thiz.du);
  }
  $thiz.fU = $thiz.e1;
  var count = $thiz.ny;
  var idx = $thiz.du;
  var c = (((count + ((count >>> 31) | 0)) | 0) >> 1);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.dt = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x46 = $thiz.dt;
  switch (x46) {
    case 1: {
      $thiz.aN = slice;
      break;
    }
    case 2: {
      $thiz.aO = slice;
      break;
    }
    case 3: {
      $thiz.bk = slice;
      break;
    }
    case 4: {
      $thiz.cl = slice;
      break;
    }
    case 5: {
      $thiz.e0 = slice;
      break;
    }
    case 6: {
      $thiz.jL = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x46);
    }
  }
  $thiz.e1 = (($thiz.fU + Math.imul(slice.a.length, (1 << Math.imul(5, (($thiz.dt - 1) | 0))))) | 0);
  if (($thiz.e1 > $thiz.cX)) {
    $thiz.e1 = $thiz.cX;
  }
  if (($thiz.dt > 1)) {
    $thiz.eL = (((1 << Math.imul(5, $thiz.dt)) - 1) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.al - $thiz.bx) | 0) + $thiz.cX) | 0);
  if ((pos === $thiz.e1)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.dt > 1)) {
    var io = ((pos - $thiz.fU) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.eL ^ io));
    $thiz.eL = io;
  }
  $thiz.bx = (($thiz.bx - $thiz.al) | 0);
  var a = $thiz.aN.a.length;
  var b = $thiz.bx;
  $thiz.cW = ((a < b) ? a : b);
  $thiz.al = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aN = $thiz.aO.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aO = $thiz.bk.a[(31 & ((io >>> 10) | 0))];
    $thiz.aN = $thiz.aO.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bk = $thiz.cl.a[(31 & ((io >>> 15) | 0))];
    $thiz.aO = $thiz.bk.a[0];
    $thiz.aN = $thiz.aO.a[0];
  } else if ((xor < 33554432)) {
    $thiz.cl = $thiz.e0.a[(31 & ((io >>> 20) | 0))];
    $thiz.bk = $thiz.cl.a[0];
    $thiz.aO = $thiz.bk.a[0];
    $thiz.aN = $thiz.aO.a[0];
  } else {
    $thiz.e0 = $thiz.jL.a[((io >>> 25) | 0)];
    $thiz.cl = $thiz.e0.a[0];
    $thiz.bk = $thiz.cl.a[0];
    $thiz.aO = $thiz.bk.a[0];
    $thiz.aN = $thiz.aO.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aN = $thiz.aO.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aO = $thiz.bk.a[(31 & ((io >>> 10) | 0))];
    $thiz.aN = $thiz.aO.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bk = $thiz.cl.a[(31 & ((io >>> 15) | 0))];
    $thiz.aO = $thiz.bk.a[(31 & ((io >>> 10) | 0))];
    $thiz.aN = $thiz.aO.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cl = $thiz.e0.a[(31 & ((io >>> 20) | 0))];
    $thiz.bk = $thiz.cl.a[(31 & ((io >>> 15) | 0))];
    $thiz.aO = $thiz.bk.a[(31 & ((io >>> 10) | 0))];
    $thiz.aN = $thiz.aO.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.e0 = $thiz.jL.a[((io >>> 25) | 0)];
    $thiz.cl = $thiz.e0.a[(31 & ((io >>> 20) | 0))];
    $thiz.bk = $thiz.cl.a[(31 & ((io >>> 15) | 0))];
    $thiz.aO = $thiz.bk.a[(31 & ((io >>> 10) | 0))];
    $thiz.aN = $thiz.aO.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.jM = null;
  this.cX = 0;
  this.ny = 0;
  this.aN = null;
  this.aO = null;
  this.bk = null;
  this.cl = null;
  this.e0 = null;
  this.jL = null;
  this.cW = 0;
  this.al = 0;
  this.eL = 0;
  this.bx = 0;
  this.du = 0;
  this.dt = 0;
  this.fU = 0;
  this.e1 = 0;
  this.jM = v;
  this.cX = totalLength;
  this.ny = sliceCount;
  this.aN = v.c;
  this.cW = this.aN.a.length;
  this.al = 0;
  this.eL = 0;
  this.bx = this.cX;
  this.du = 0;
  this.dt = 1;
  this.fU = 0;
  this.e1 = this.cW;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.Q = (function() {
  return ((this.bx - this.al) | 0);
});
$p.h = (function() {
  return (this.bx > this.al);
});
$p.g = (function() {
  if ((this.al === this.cW)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.aN.a[this.al];
  this.al = ((1 + this.al) | 0);
  return r;
});
$p.e8 = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.al - this.bx) | 0) + this.cX) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.cX;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.cX)) {
      this.al = 0;
      this.bx = 0;
      this.cW = 0;
    } else {
      while ((newpos >= this.e1)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.fU) | 0);
      if ((this.dt > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.eL ^ io));
        this.eL = io;
      }
      this.cW = this.aN.a.length;
      this.al = (31 & io);
      this.bx = ((this.al + ((this.cX - newpos) | 0)) | 0);
      if ((this.cW > this.bx)) {
        this.cW = this.bx;
      }
    }
  }
  return this;
});
$p.e7 = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().ia(xs);
  var srcLen = ((this.bx - this.al) | 0);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? xsLen : ((xsLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var total$1 = ((total < 0) ? 0 : total);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total$1)) {
    if ((this.al === this.cW)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total$1 - copied) | 0);
    var b = ((this.aN.a.length - this.al) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.aN;
      var srcPos = this.al;
      var destPos = ((start + copied) | 0);
      src.m(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().q2(this.aN, this.al, xs, ((start + copied) | 0), count);
    }
    this.al = ((this.al + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total$1;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  ge: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1,
  w: 1
}));
/** @constructor */
function $c_scm_HashMap$$anon$1(outer) {
  this.dv = 0;
  this.cY = null;
  this.fX = 0;
  this.fW = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer);
}
$p = $c_scm_HashMap$$anon$1.prototype = new $h_scm_HashMap$HashMapIterator();
$p.constructor = $c_scm_HashMap$$anon$1;
/** @constructor */
function $h_scm_HashMap$$anon$1() {
}
$h_scm_HashMap$$anon$1.prototype = $p;
$p.kh = (function(nd) {
  return new $c_T2(nd.dw, nd.c8);
});
var $d_scm_HashMap$$anon$1 = new $TypeData().i($c_scm_HashMap$$anon$1, "scala.collection.mutable.HashMap$$anon$1", ({
  gD: 1,
  aC: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
/** @constructor */
function $c_scm_HashMap$$anon$4(outer) {
  this.dv = 0;
  this.cY = null;
  this.fX = 0;
  this.fW = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer);
}
$p = $c_scm_HashMap$$anon$4.prototype = new $h_scm_HashMap$HashMapIterator();
$p.constructor = $c_scm_HashMap$$anon$4;
/** @constructor */
function $h_scm_HashMap$$anon$4() {
}
$h_scm_HashMap$$anon$4.prototype = $p;
$p.kh = (function(nd) {
  return nd;
});
var $d_scm_HashMap$$anon$4 = new $TypeData().i($c_scm_HashMap$$anon$4, "scala.collection.mutable.HashMap$$anon$4", ({
  gE: 1,
  aC: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
/** @constructor */
function $c_scm_HashMap$$anon$5(outer) {
  this.dv = 0;
  this.cY = null;
  this.fX = 0;
  this.fW = null;
  this.jQ = 0;
  this.pn = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.pn = outer;
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer);
  this.jQ = 0;
}
$p = $c_scm_HashMap$$anon$5.prototype = new $h_scm_HashMap$HashMapIterator();
$p.constructor = $c_scm_HashMap$$anon$5;
/** @constructor */
function $h_scm_HashMap$$anon$5() {
}
$h_scm_HashMap$$anon$5.prototype = $p;
$p.A = (function() {
  return this.jQ;
});
$p.kh = (function(nd) {
  var $x_1 = $m_s_util_hashing_MurmurHash3$();
  var improvedHash = nd.cC;
  this.jQ = $x_1.cf((improvedHash ^ ((improvedHash >>> 16) | 0)), $m_sr_Statics$().I(nd.c8));
  return this;
});
var $d_scm_HashMap$$anon$5 = new $TypeData().i($c_scm_HashMap$$anon$5, "scala.collection.mutable.HashMap$$anon$5", ({
  gF: 1,
  aC: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$1(outer) {
  this.dx = 0;
  this.cZ = null;
  this.fZ = 0;
  this.fY = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.ki = (function(nd) {
  return nd.dy;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  gH: 1,
  aD: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.dx = 0;
  this.cZ = null;
  this.fZ = 0;
  this.fY = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.ki = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  gI: 1,
  aD: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.dx = 0;
  this.cZ = null;
  this.fZ = 0;
  this.fY = null;
  this.jT = 0;
  this.nC = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.nC = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.jT = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.A = (function() {
  return this.jT;
});
$p.ki = (function(nd) {
  this.jT = $p_scm_HashSet__improveHash__I__I(this.nC, nd.ca);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  gJ: 1,
  aD: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1
}));
function $p_s_util_matching_Regex$MatchIterator__ensure__V($thiz) {
  var x6 = $thiz.d2;
  switch (x6) {
    case 0: {
      if ((!$thiz.h())) {
        throw $ct_jl_IllegalStateException__(new $c_jl_IllegalStateException());
      } else {
        return (void 0);
      }
      break;
    }
    case 1: {
      return (void 0);
      break;
    }
    case 2: {
      return (void 0);
      break;
    }
    case 3: {
      throw $ct_jl_IllegalStateException__(new $c_jl_IllegalStateException());
      break;
    }
    default: {
      throw new $c_s_MatchError(x6);
    }
  }
}
/** @constructor */
function $c_s_util_matching_Regex$MatchIterator(source, regex, _groupNames) {
  this.hZ = null;
  this.k1 = null;
  this.d1 = null;
  this.d2 = 0;
  this.hZ = source;
  this.k1 = _groupNames;
  this.d1 = new $c_ju_regex_Matcher(regex.jZ, $dp_toString__T(source));
  this.d2 = 0;
}
$p = $c_s_util_matching_Regex$MatchIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_util_matching_Regex$MatchIterator;
/** @constructor */
function $h_s_util_matching_Regex$MatchIterator() {
}
$h_s_util_matching_Regex$MatchIterator.prototype = $p;
$p.kO = (function() {
  return this.hZ;
});
$p.h = (function() {
  var x4 = this.d2;
  switch (x4) {
    case 0: {
      this.d2 = (this.d1.qs() ? 1 : 3);
      break;
    }
    case 1: {
      break;
    }
    case 2: {
      this.d2 = 0;
      this.h();
      break;
    }
    case 3: {
      break;
    }
    default: {
      throw new $c_s_MatchError(x4);
    }
  }
  return (this.d2 === 1);
});
$p.gp = (function() {
  var x5 = this.d2;
  switch (x5) {
    case 0: {
      if ((!this.h())) {
        throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException());
      }
      this.gp();
      break;
    }
    case 1: {
      this.d2 = 2;
      break;
    }
    case 2: {
      this.d2 = 0;
      this.gp();
      break;
    }
    case 3: {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException());
      break;
    }
    default: {
      throw new $c_s_MatchError(x5);
    }
  }
  return this.d1.or();
});
$p.q = (function() {
  return "<iterator>";
});
$p.dI = (function() {
  $p_s_util_matching_Regex$MatchIterator__ensure__V(this);
  return this.d1.dI();
});
$p.f4 = (function(i) {
  $p_s_util_matching_Regex$MatchIterator__ensure__V(this);
  return this.d1.f4(i);
});
$p.eU = (function() {
  $p_s_util_matching_Regex$MatchIterator__ensure__V(this);
  return this.d1.eU();
});
$p.gk = (function(i) {
  $p_s_util_matching_Regex$MatchIterator__ensure__V(this);
  return this.d1.gk(i);
});
$p.g = (function() {
  return this.gp();
});
var $d_s_util_matching_Regex$MatchIterator = new $TypeData().i($c_s_util_matching_Regex$MatchIterator, "scala.util.matching.Regex$MatchIterator", ({
  hU: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1,
  bT: 1
}));
/** @constructor */
function $c_s_util_matching_Regex$MatchIterator$$anon$4(outer) {
  this.i0 = null;
  this.eQ = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.eQ = outer;
  this.i0 = new $c_jl_StringBuilder();
}
$p = $c_s_util_matching_Regex$MatchIterator$$anon$4.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_util_matching_Regex$MatchIterator$$anon$4;
/** @constructor */
function $h_s_util_matching_Regex$MatchIterator$$anon$4() {
}
$h_s_util_matching_Regex$MatchIterator$$anon$4.prototype = $p;
$p.ky = (function() {
  return this.eQ.d1;
});
$p.h = (function() {
  return this.eQ.h();
});
$p.ij = (function() {
  this.eQ.gp();
  return new $c_s_util_matching_Regex$Match(this.eQ.hZ, this.ky(), this.eQ.k1).oi();
});
$p.g = (function() {
  return this.ij();
});
var $d_s_util_matching_Regex$MatchIterator$$anon$4 = new $TypeData().i($c_s_util_matching_Regex$MatchIterator$$anon$4, "scala.util.matching.Regex$MatchIterator$$anon$4", ({
  hV: 1,
  f: 1,
  b: 1,
  c: 1,
  g: 1,
  hW: 1
}));
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$p = $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$p.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $p;
$p.ed = (function(s) {
  this.rf(s);
  this.ie("\n");
});
/** @constructor */
function $c_ju_AbstractSequentialList() {
}
$p = $c_ju_AbstractSequentialList.prototype = new $h_ju_AbstractList();
$p.constructor = $c_ju_AbstractSequentialList;
/** @constructor */
function $h_ju_AbstractSequentialList() {
}
$h_ju_AbstractSequentialList.prototype = $p;
function $f_sc_View__toString__T($thiz) {
  return ($thiz.dD() + "(<not computed>)");
}
class $c_s_concurrent_Future$$anon$1 extends $c_ju_NoSuchElementException {
  constructor(t$2) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("Future.collect partial function is not defined at: " + t$2), null, true, true);
  }
  eV() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$1 = new $TypeData().i($c_s_concurrent_Future$$anon$1, "scala.concurrent.Future$$anon$1", ({
  h0: 1,
  aa: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1,
  al: 1
}));
class $c_s_concurrent_Future$$anon$2 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.filter predicate is not satisfied", null, true, true);
  }
  eV() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$2 = new $TypeData().i($c_s_concurrent_Future$$anon$2, "scala.concurrent.Future$$anon$2", ({
  h1: 1,
  aa: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1,
  al: 1
}));
class $c_s_concurrent_Future$$anon$3 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.failed not completed with a throwable.", null, true, true);
  }
  eV() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$3 = new $TypeData().i($c_s_concurrent_Future$$anon$3, "scala.concurrent.Future$$anon$3", ({
  h2: 1,
  aa: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1,
  al: 1
}));
function $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, initial) {
  $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, initial);
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__($thiz, result) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().gv(result));
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().g2);
  return $thiz;
}
function $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try($thiz) {
  var \u03b4this$tailLocal2 = $thiz;
  while (true) {
    var state = \u03b4this$tailLocal2.M;
    if ((state instanceof $c_s_util_Try)) {
      return state;
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      \u03b4this$tailLocal2 = state.f3(\u03b4this$tailLocal2);
    } else {
      return null;
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks($thiz, state, callbacks) {
  var \u03b4this$tailLocal4 = $thiz;
  var state$tailLocal2 = state;
  while (true) {
    if ((state$tailLocal2 instanceof $c_s_util_Try)) {
      $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(\u03b4this$tailLocal4, callbacks, state$tailLocal2);
      return callbacks;
    } else if ($is_s_concurrent_impl_Promise$Callbacks(state$tailLocal2)) {
      if (\u03b4this$tailLocal4.gi(state$tailLocal2, ((state$tailLocal2 !== $m_s_concurrent_impl_Promise$().g2) ? $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(\u03b4this$tailLocal4, callbacks, state$tailLocal2) : callbacks))) {
        return callbacks;
      } else {
        state$tailLocal2 = \u03b4this$tailLocal4.M;
      }
    } else {
      var p = state$tailLocal2.f3(\u03b4this$tailLocal4);
      var state$tailLocal2$tmp1 = p.M;
      \u03b4this$tailLocal4 = p;
      state$tailLocal2 = state$tailLocal2$tmp1;
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks($thiz, left, right) {
  var right$tailLocal1 = right;
  var left$tailLocal1 = left;
  while (true) {
    if ((left$tailLocal1 instanceof $c_s_concurrent_impl_Promise$Transformation)) {
      return new $c_s_concurrent_impl_Promise$ManyCallbacks(left$tailLocal1, right$tailLocal1);
    } else {
      var m = left$tailLocal1;
      var left$tailLocal1$tmp1 = m.jW;
      var right$tailLocal1$tmp1 = new $c_s_concurrent_impl_Promise$ManyCallbacks(m.jV, right$tailLocal1);
      left$tailLocal1 = left$tailLocal1$tmp1;
      right$tailLocal1 = right$tailLocal1$tmp1;
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V($thiz, callbacks, resolved) {
  var callbacks$tailLocal1 = callbacks;
  while (true) {
    if ((callbacks$tailLocal1 instanceof $c_s_concurrent_impl_Promise$ManyCallbacks)) {
      var m = callbacks$tailLocal1;
      m.jV.oR(resolved);
      callbacks$tailLocal1 = m.jW;
    } else {
      callbacks$tailLocal1.oR(resolved);
      return (void 0);
    }
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$DefaultPromise() {
  this.M = null;
}
$p = $c_s_concurrent_impl_Promise$DefaultPromise.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_impl_Promise$DefaultPromise;
/** @constructor */
function $h_s_concurrent_impl_Promise$DefaultPromise() {
}
$h_s_concurrent_impl_Promise$DefaultPromise.prototype = $p;
$p.qx = (function(f, executor) {
  var state = this.M;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 2, f, executor)) : this);
});
$p.qZ = (function(f, executor) {
  var state = this.M;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 1, f, executor)) : this);
});
$p.r8 = (function(func, executor) {
  $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, this.M, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 6, func, executor));
});
$p.q = (function() {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    var state = \u03b4this$tailLocal1.M;
    if ((state instanceof $c_s_util_Try)) {
      return (("Future(" + state) + ")");
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      \u03b4this$tailLocal1 = state.f3(\u03b4this$tailLocal1);
    } else {
      return "Future(<not completed>)";
    }
  }
});
$p.rG = (function(value) {
  var state = this.M;
  return ((!(state instanceof $c_s_util_Try)) && this.eh(state, $m_s_concurrent_impl_Promise$().gv(value)));
});
$p.eh = (function(state, resolved) {
  var \u03b4this$tailLocal3 = this;
  var state$tailLocal1 = state;
  while (true) {
    if ($is_s_concurrent_impl_Promise$Callbacks(state$tailLocal1)) {
      if ((!\u03b4this$tailLocal3.gi(state$tailLocal1, resolved))) {
        state$tailLocal1 = \u03b4this$tailLocal3.M;
        continue;
      }
      if ((state$tailLocal1 !== $m_s_concurrent_impl_Promise$().g2)) {
        $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(\u03b4this$tailLocal3, state$tailLocal1, resolved);
      }
      return true;
    } else if ((state$tailLocal1 instanceof $c_s_concurrent_impl_Promise$Link)) {
      var p = state$tailLocal1.f3(\u03b4this$tailLocal3);
      if ((p !== \u03b4this$tailLocal3)) {
        var state$tailLocal1$tmp1 = p.M;
        \u03b4this$tailLocal3 = p;
        state$tailLocal1 = state$tailLocal1$tmp1;
        continue;
      }
      return false;
    } else {
      return false;
    }
  }
});
$p.kd = (function(other) {
  if ((other !== this)) {
    var state = this.M;
    if ((!(state instanceof $c_s_util_Try))) {
      if ((other instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
        var resolved = $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other);
      } else {
        var this$1 = $m_s_Option$().pO($p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other));
        var resolved = (this$1.t() ? null : this$1.bO());
      }
      if ((resolved !== null)) {
        this.eh(state, resolved);
      } else {
        other.r8(this, $m_s_concurrent_ExecutionContext$parasitic$());
      }
    }
  }
  return this;
});
$p.kx = (function(target, link) {
  var \u03b4this$tailLocal5 = this;
  var link$tailLocal1 = link;
  var target$tailLocal2 = target;
  while (true) {
    if ((\u03b4this$tailLocal5 !== target$tailLocal2)) {
      var state = \u03b4this$tailLocal5.M;
      if ((state instanceof $c_s_util_Try)) {
        if ((!target$tailLocal2.eh(target$tailLocal2.M, state))) {
          throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "Cannot link completed promises together");
        } else {
          return (void 0);
        }
      } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
        var l = ((link$tailLocal1 !== null) ? link$tailLocal1 : new $c_s_concurrent_impl_Promise$Link(target$tailLocal2));
        var p = l.f3(\u03b4this$tailLocal5);
        if (((\u03b4this$tailLocal5 !== p) && \u03b4this$tailLocal5.gi(state, l))) {
          if ((state !== $m_s_concurrent_impl_Promise$().g2)) {
            $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(p, p.M, state);
            return (void 0);
          } else {
            return (void 0);
          }
        } else {
          target$tailLocal2 = p;
          link$tailLocal1 = l;
        }
      } else {
        \u03b4this$tailLocal5 = state.f3(\u03b4this$tailLocal5);
      }
    } else {
      return (void 0);
    }
  }
});
$p.rI = (function(resolved) {
  var \u03b4this$tailLocal6 = this;
  while (true) {
    var state = \u03b4this$tailLocal6.M;
    if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      var next = (\u03b4this$tailLocal6.gi(state, resolved) ? state.M : \u03b4this$tailLocal6);
      \u03b4this$tailLocal6 = next;
    } else {
      \u03b4this$tailLocal6.eh(state, resolved);
      return (void 0);
    }
  }
});
$p.n = (function(v1) {
  this.eh(this.M, v1);
});
function $isArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aI)));
}
var $d_s_concurrent_impl_Promise$DefaultPromise = new $TypeData().i($c_s_concurrent_impl_Promise$DefaultPromise, "scala.concurrent.impl.Promise$DefaultPromise", ({
  aI: 1,
  av: 1,
  a: 1,
  bM: 1,
  bJ: 1,
  bL: 1,
  h: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.hS = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.q = (function() {
  return this.hS;
});
$p.E = (function(that) {
  return (this === that);
});
$p.A = (function() {
  return $systemIdentityHashCode(this);
});
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.cm = null;
    this.cm = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gl() {
    return $dp_toString__T(this.cm);
  }
  cI() {
    return "JavaScriptException";
  }
  cG() {
    return 1;
  }
  cH(x$1) {
    return ((x$1 === 0) ? this.cm : $m_sr_Statics$().qP(x$1));
  }
  f2() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  A() {
    return $m_s_util_hashing_MurmurHash3$().gu(this, 1744042595, true);
  }
  E(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().i(this.cm, x$1.cm)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bQ)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  bQ: 1,
  o: 1,
  i: 1,
  e: 1,
  a: 1,
  K: 1,
  d: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.kQ && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.kQ = false;
  this.f7 = null;
  this.kQ = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.f7 = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.rf = (function(s) {
  this.ie(((s === null) ? "null" : s));
});
$p.ie = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.f7 = (("" + this.f7) + rest);
      rest = "";
    } else {
      var $x_1 = this.f7;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.f7 = "";
      var this$4 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$4.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  ca: 1,
  bV: 1,
  bU: 1,
  aM: 1,
  aK: 1,
  aO: 1,
  aL: 1,
  aN: 1
}));
function $ct_ju_HashSet__ju_HashMap__($thiz, inner) {
  $thiz.gG = inner;
  $thiz.iD = new $c_ju_HashMap$KeySet(inner);
  return $thiz;
}
function $ct_ju_HashSet__I__($thiz, initialCapacity) {
  $ct_ju_HashSet__ju_HashMap__($thiz, $ct_ju_HashMap__I__(new $c_ju_HashMap(), initialCapacity));
  return $thiz;
}
/** @constructor */
function $c_ju_HashSet() {
  this.gG = null;
  this.iD = null;
}
$p = $c_ju_HashSet.prototype = new $h_ju_AbstractSet();
$p.constructor = $c_ju_HashSet;
/** @constructor */
function $h_ju_HashSet() {
}
$h_ju_HashSet.prototype = $p;
$p.aX = (function(o) {
  return this.gG.d4(o);
});
$p.ke = (function(c) {
  return this.iD.ke(c);
});
$p.w = (function(e) {
  var $x_2 = this.gG;
  if ((e === null)) {
    var $x_1 = 0;
  } else {
    var originalHash = $dp_hashCode__I(e);
    var $x_1 = (originalHash ^ ((originalHash >>> 16) | 0));
  }
  return ($x_2.bA(e, (void 0), $x_1, false) === null);
});
$p.l = (function() {
  return this.gG.bT;
});
$p.ce = (function() {
  return this.iD.ce();
});
var $d_ju_HashSet = new $TypeData().i($c_ju_HashSet, "java.util.HashSet", ({
  cG: 1,
  aq: 1,
  a5: 1,
  P: 1,
  a3: 1,
  at: 1,
  w: 1,
  a: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.t())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.bQ();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.hS = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.rt = (function() {
  return $d_I.l();
});
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.q = (function() {
  return $f_sc_View__toString__T(this);
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.l() === that.l())) {
      try {
        return $thiz.rC(that);
      } catch (e) {
        if (false) {
          return false;
        } else {
          throw e;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ay)));
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ay)));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.hS = null;
  this.hS = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  hd: 1,
  hc: 1,
  h8: 1,
  a: 1,
  he: 1,
  h9: 1,
  d: 1,
  ha: 1,
  hb: 1
}));
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$();
  }
  return $n_s_reflect_ManifestFactory$IntManifest$;
}
function $ct_ju_ArrayList__O__I__($thiz, innerInit, _size) {
  $thiz.p2 = _size;
  $thiz.f9 = innerInit;
  $thiz.p3 = null;
  return $thiz;
}
function $ct_ju_ArrayList__I__($thiz, initialCapacity) {
  if ((initialCapacity < 0)) {
    $m_jl_BoundsChecks$().ow(initialCapacity);
  }
  $ct_ju_ArrayList__O__I__($thiz, [], 0);
  return $thiz;
}
function $ct_ju_ArrayList__($thiz) {
  $ct_ju_ArrayList__I__($thiz, 16);
  return $thiz;
}
/** @constructor */
function $c_ju_ArrayList() {
  this.p2 = 0;
  this.f9 = null;
  this.p3 = null;
}
$p = $c_ju_ArrayList.prototype = new $h_ju_AbstractList();
$p.constructor = $c_ju_ArrayList;
/** @constructor */
function $h_ju_ArrayList() {
}
$h_ju_ArrayList.prototype = $p;
$p.l = (function() {
  return (this.f9.length | 0);
});
$p.s = (function(index) {
  var length = this.l();
  if (((index >>> 0) >= (length >>> 0))) {
    $m_jl_BoundsChecks$().kt(index, length);
  }
  return this.f9[index];
});
$p.kN = (function(index, element) {
  var e = this.s(index);
  this.f9[index] = element;
  return e;
});
$p.w = (function(e) {
  (this.f9.push(e) | 0);
  return true;
});
var $d_ju_ArrayList = new $TypeData().i($c_ju_ArrayList, "java.util.ArrayList", ({
  cx: 1,
  aV: 1,
  a5: 1,
  P: 1,
  a3: 1,
  a9: 1,
  aY: 1,
  cL: 1,
  w: 1,
  a: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.kc($thiz)) {
        return $thiz.io(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.t)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.t)));
}
/** @constructor */
function $c_sc_AbstractSet() {
}
$p = $c_sc_AbstractSet.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSet;
/** @constructor */
function $h_sc_AbstractSet() {
}
$h_sc_AbstractSet.prototype = $p;
$p.rC = (function(that) {
  return this.eX(that);
});
$p.E = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.dJ = (function() {
  return "Set";
});
$p.q = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.n = (function(v1) {
  return this.aX(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.l() === o.l())) {
      try {
        return $thiz.eX(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((map$1) => ((kv$2) => $m_sr_BoxesRunTime$().i(map$1.dF(kv$2.b3, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sc_Map$().ns.av()))), kv$2.aL)))(o)));
      } catch (e) {
        if (false) {
          return false;
        } else {
          throw e;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.I)));
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.I)));
}
function $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, _fun, _ec, _arg, _xform) {
  $thiz.hR = _fun;
  $thiz.g4 = _ec;
  $thiz.g3 = _arg;
  $thiz.g5 = _xform;
  $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz);
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__($thiz, xform, f, ec) {
  $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, f, ec, null, xform);
  return $thiz;
}
function $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V($thiz, t, e) {
  if ((false || $m_s_util_control_NonFatal$().i3(t))) {
    var completed = $thiz.eh($thiz.M, $m_s_concurrent_impl_Promise$().gv(new $c_s_util_Failure(t)));
    if (((($thiz.g5 === 5) || ($thiz.g5 === 6)) || (!completed))) {
      e.kM(t);
    }
  } else {
    var $x_1 = t;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.cm : $x_1);
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$Transformation() {
  this.M = null;
  this.hR = null;
  this.g4 = null;
  this.g3 = null;
  this.g5 = 0;
}
$p = $c_s_concurrent_impl_Promise$Transformation.prototype = new $h_s_concurrent_impl_Promise$DefaultPromise();
$p.constructor = $c_s_concurrent_impl_Promise$Transformation;
/** @constructor */
function $h_s_concurrent_impl_Promise$Transformation() {
}
$h_s_concurrent_impl_Promise$Transformation.prototype = $p;
$p.oR = (function(resolved) {
  this.g3 = resolved;
  var e = this.g4;
  try {
    if ((e === null)) {
      $m_sr_Scala3RunTime$().bb();
    }
    e.kg(this);
  } catch (e$2) {
    var e$3 = ((e$2 instanceof $c_jl_Throwable) ? e$2 : new $c_sjs_js_JavaScriptException(e$2));
    this.hR = null;
    this.g3 = null;
    this.g4 = null;
    if ((e === null)) {
      $m_sr_Scala3RunTime$().bb();
    }
    $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, e$3, e);
  }
  return this;
});
$p.ef = (function() {
  var x$proxy4 = this.g3;
  if ((x$proxy4 === null)) {
    $m_sr_Scala3RunTime$().bb();
  }
  var x$proxy5 = this.hR;
  if ((x$proxy5 === null)) {
    $m_sr_Scala3RunTime$().bb();
  }
  var x$proxy6 = this.g4;
  if ((x$proxy6 === null)) {
    $m_sr_Scala3RunTime$().bb();
  }
  this.hR = null;
  this.g3 = null;
  this.g4 = null;
  try {
    var resolvedResult;
    switch (this.g5) {
      case 0: {
        var resolvedResult = null;
        break;
      }
      case 1: {
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Success) ? new $c_s_util_Success(x$proxy5.n(x$proxy4.bO())) : x$proxy4);
        break;
      }
      case 2: {
        if ((x$proxy4 instanceof $c_s_util_Success)) {
          var f = x$proxy5.n(x$proxy4.bO());
          if ((f instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
            f.kx(this, null);
          } else {
            this.kd(f);
          }
          var resolvedResult = null;
        } else {
          var resolvedResult = x$proxy4;
        }
        break;
      }
      case 3: {
        var resolvedResult = $m_s_concurrent_impl_Promise$().gv(x$proxy5.n(x$proxy4));
        break;
      }
      case 4: {
        var f$2 = x$proxy5.n(x$proxy4);
        if ((f$2 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
          f$2.kx(this, null);
        } else {
          this.kd(f$2);
        }
        var resolvedResult = null;
        break;
      }
      case 5: {
        x$proxy4.e9(x$proxy5);
        var resolvedResult = null;
        break;
      }
      case 6: {
        x$proxy5.n(x$proxy4);
        var resolvedResult = null;
        break;
      }
      case 7: {
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Failure) ? $m_s_concurrent_impl_Promise$().gv(x$proxy4.oH(x$proxy5)) : x$proxy4);
        break;
      }
      case 8: {
        if ((x$proxy4 instanceof $c_s_util_Failure)) {
          var f$3 = x$proxy5.gh(x$proxy4.dA, $m_s_concurrent_Future$().nK);
          var resolvedResult = ((f$3 !== $m_s_concurrent_Future$().jU) ? (((f$3 instanceof $c_s_concurrent_impl_Promise$DefaultPromise) ? f$3.kx(this, null) : this.kd(f$3)), null) : x$proxy4);
        } else {
          var resolvedResult = x$proxy4;
        }
        break;
      }
      case 9: {
        var resolvedResult = (((x$proxy4 instanceof $c_s_util_Failure) || (!(!x$proxy5.n(x$proxy4.bO())))) ? x$proxy4 : $m_s_concurrent_Future$().nJ);
        break;
      }
      case 10: {
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Success) ? new $c_s_util_Success(x$proxy5.gh(x$proxy4.bO(), $m_s_concurrent_Future$().nH)) : x$proxy4);
        break;
      }
      default: {
        var resolvedResult = new $c_s_util_Failure($ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ("BUG: encountered transformation promise with illegal type: " + this.g5)));
      }
    }
    if ((resolvedResult !== null)) {
      this.eh(this.M, resolvedResult);
    }
  } catch (e) {
    $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)), x$proxy6);
  }
});
function $isArrayOf_s_concurrent_impl_Promise$Transformation(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bP)));
}
var $d_s_concurrent_impl_Promise$Transformation = new $TypeData().i($c_s_concurrent_impl_Promise$Transformation, "scala.concurrent.impl.Promise$Transformation", ({
  bP: 1,
  aI: 1,
  av: 1,
  a: 1,
  bM: 1,
  bJ: 1,
  bL: 1,
  h: 1,
  ak: 1,
  ap: 1,
  gT: 1
}));
/** @constructor */
function $c_ju_LinkedList() {
  this.fa = null;
  this.cL = null;
  this.bp = 0.0;
  this.fa = null;
  this.cL = null;
  this.bp = 0.0;
}
$p = $c_ju_LinkedList.prototype = new $h_ju_AbstractSequentialList();
$p.constructor = $c_ju_LinkedList;
/** @constructor */
function $h_ju_LinkedList() {
}
$h_ju_LinkedList.prototype = $p;
$p.k5 = (function(e) {
  var oldLast = this.cL;
  this.cL = new $c_ju_LinkedList$Node(e, oldLast, null);
  this.bp = (this.bp + 1.0);
  if ((oldLast !== null)) {
    oldLast.gH = this.cL;
  } else {
    this.fa = this.cL;
  }
});
$p.aX = (function(o) {
  var _\uff3fself = this.f1(0);
  while (_\uff3fself.h()) {
    var t = _\uff3fself.g();
    if (((t === null) ? (o === null) : $dp_equals__O__Z(t, o))) {
      return true;
    }
  }
  return false;
});
$p.l = (function() {
  return $doubleToInt(this.bp);
});
$p.w = (function(e) {
  this.k5(e);
  return true;
});
$p.dE = (function() {
  this.fa = null;
  this.cL = null;
  this.bp = 0.0;
});
$p.kv = (function(index) {
  if ((index === 0)) {
    return this.fa;
  } else if ((index === (($doubleToInt(this.bp) - 1) | 0))) {
    return this.cL;
  } else {
    var elem = null;
    elem = null;
    var num = $doubleToInt(this.bp);
    if ((index <= (((num + ((num >>> 31) | 0)) | 0) >> 1))) {
      elem = this.fa;
      var i = 0;
      while ((i < index)) {
        elem = elem.gH;
        i = ((1 + i) | 0);
      }
    } else {
      elem = this.cL;
      var end = (($doubleToInt(this.bp) - 1) | 0);
      var i$1 = index;
      while ((i$1 < end)) {
        elem = elem.kX;
        i$1 = ((1 + i$1) | 0);
      }
    }
    return elem;
  }
});
$p.s = (function(index) {
  var length = $doubleToInt(this.bp);
  if (((index >>> 0) >= (length >>> 0))) {
    $m_jl_BoundsChecks$().kt(index, length);
  }
  return this.kv(index).fd;
});
$p.kN = (function(index, element) {
  var length = $doubleToInt(this.bp);
  if (((index >>> 0) >= (length >>> 0))) {
    $m_jl_BoundsChecks$().kt(index, length);
  }
  var node = this.kv(index);
  var oldValue = node.fd;
  node.fd = element;
  return oldValue;
});
$p.f1 = (function(index) {
  var length = $doubleToInt(this.bp);
  if (((index >>> 0) > (length >>> 0))) {
    $m_jl_BoundsChecks$().ku(index, length);
  }
  return new $c_ju_LinkedList$$anon$1(this, index);
});
var $d_ju_LinkedList = new $TypeData().i($c_ju_LinkedList, "java.util.LinkedList", ({
  cH: 1,
  cw: 1,
  aV: 1,
  a5: 1,
  P: 1,
  a3: 1,
  a9: 1,
  aY: 1,
  cz: 1,
  cK: 1,
  w: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.gh = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.ov = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.t = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.io = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.kc = (function(that) {
  return true;
});
$p.E = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.A = (function() {
  return $m_s_util_hashing_MurmurHash3$().oN(this);
});
$p.q = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.ic = (function(x) {
  return this.ov((x | 0));
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.v)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.v)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.af)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
/** @constructor */
function $c_sc_AbstractMap() {
}
$p = $c_sc_AbstractMap.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractMap;
/** @constructor */
function $h_sc_AbstractMap() {
}
$h_sc_AbstractMap.prototype = $p;
$p.gh = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cn = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.ic = (function(key) {
  return this.aX(key);
});
$p.i2 = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
$p.E = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.A = (function() {
  return $m_s_util_hashing_MurmurHash3$().r0(this);
});
$p.dJ = (function() {
  return "Map";
});
$p.q = (function() {
  return $f_sc_Iterable__toString__T(this);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.fM = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.fM = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.V = (function(idx) {
  return this.fM.V(idx);
});
$p.G = (function() {
  return this.fM.G();
});
$p.t = (function() {
  return this.fM.t();
});
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.M)));
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.M)));
}
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.fM = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.dG = (function(len) {
  var x = this.G();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.Q = (function() {
  return this.G();
});
$p.B = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.dJ = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  fA: 1,
  fM: 1,
  fv: 1,
  fx: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  a: 1,
  fQ: 1,
  u: 1,
  fL: 1,
  y: 1,
  fz: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
/** @constructor */
function $c_sci_AbstractMap() {
}
$p = $c_sci_AbstractMap.prototype = new $h_sc_AbstractMap();
$p.constructor = $c_sci_AbstractMap;
/** @constructor */
function $h_sci_AbstractMap() {
}
$h_sci_AbstractMap.prototype = $p;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ($is_sci_IndexedSeq(that) ? ($thiz.G() === that.G()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.G();
      var equal = (length === o.G());
      if (equal) {
        var index = 0;
        var a = $thiz.k7();
        var b = o.k7();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? ((length >>> 0) > (lo >>> 0)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().i($thiz.V(index), o.V(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.B().e8(index);
          var thatIt = o.B().e8(index);
          while ((equal && thisIt.h())) {
            equal = $m_sr_BoxesRunTime$().i(thisIt.g(), thatIt.g());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.D)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
}
function $isArrayOf_sci_SeqMap$SeqMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gh)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gi)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gj)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gk)));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_sci_Map$EmptyMap$() {
}
$p = $c_sci_Map$EmptyMap$.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$EmptyMap$;
/** @constructor */
function $h_sci_Map$EmptyMap$() {
}
$h_sci_Map$EmptyMap$.prototype = $p;
$p.l = (function() {
  return 0;
});
$p.Q = (function() {
  return 0;
});
$p.t = (function() {
  return true;
});
$p.pN = (function(key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
});
$p.aX = (function(key) {
  return false;
});
$p.ea = (function(key) {
  return $m_s_None$();
});
$p.dF = (function(key, default$1) {
  return default$1.av();
});
$p.B = (function() {
  return $m_sc_Iterator$().a4;
});
$p.n = (function(key) {
  this.pN(key);
});
$p.ej = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  g3: 1,
  a1: 1,
  S: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  U: 1,
  T: 1,
  d: 1,
  I: 1,
  q: 1,
  a2: 1,
  M: 1,
  a: 1
}));
var $n_sci_Map$EmptyMap$;
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$();
  }
  return $n_sci_Map$EmptyMap$;
}
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.ck = null;
  this.dn = null;
  this.ck = key1;
  this.dn = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.l = (function() {
  return 1;
});
$p.Q = (function() {
  return 1;
});
$p.t = (function() {
  return false;
});
$p.n = (function(key) {
  if ($m_sr_BoxesRunTime$().i(key, this.ck)) {
    return this.dn;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.aX = (function(key) {
  return $m_sr_BoxesRunTime$().i(key, this.ck);
});
$p.ea = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.ck) ? new $c_s_Some(this.dn) : $m_s_None$());
});
$p.dF = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().i(key, this.ck) ? this.dn : default$1.av());
});
$p.B = (function() {
  return new $c_sc_Iterator$$anon$20(new $c_T2(this.ck, this.dn));
});
$p.ei = (function(key, value) {
  return ($m_sr_BoxesRunTime$().i(key, this.ck) ? new $c_sci_Map$Map1(this.ck, value) : new $c_sci_Map$Map2(this.ck, this.dn, key, value));
});
$p.eX = (function(p) {
  return (!(!p.n(new $c_T2(this.ck, this.dn))));
});
$p.A = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cf(this.ck, this.dn);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d0;
  h = $m_s_util_hashing_MurmurHash3$().H(h, a);
  h = $m_s_util_hashing_MurmurHash3$().H(h, b);
  h = $m_s_util_hashing_MurmurHash3$().ec(h, c);
  return $m_s_util_hashing_MurmurHash3$().bn(h, 1);
});
$p.ej = (function(key, value) {
  return this.ei(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bx)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  bx: 1,
  a1: 1,
  S: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  U: 1,
  T: 1,
  d: 1,
  I: 1,
  q: 1,
  a2: 1,
  M: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.c1 = null;
  this.cT = null;
  this.c2 = null;
  this.cU = null;
  this.c1 = key1;
  this.cT = value1;
  this.c2 = key2;
  this.cU = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.l = (function() {
  return 2;
});
$p.Q = (function() {
  return 2;
});
$p.t = (function() {
  return false;
});
$p.n = (function(key) {
  if ($m_sr_BoxesRunTime$().i(key, this.c1)) {
    return this.cT;
  } else if ($m_sr_BoxesRunTime$().i(key, this.c2)) {
    return this.cU;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.aX = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.c1) || $m_sr_BoxesRunTime$().i(key, this.c2));
});
$p.ea = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.c1) ? new $c_s_Some(this.cT) : ($m_sr_BoxesRunTime$().i(key, this.c2) ? new $c_s_Some(this.cU) : $m_s_None$()));
});
$p.dF = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().i(key, this.c1) ? this.cT : ($m_sr_BoxesRunTime$().i(key, this.c2) ? this.cU : default$1.av()));
});
$p.B = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.ei = (function(key, value) {
  return ($m_sr_BoxesRunTime$().i(key, this.c1) ? new $c_sci_Map$Map2(this.c1, value, this.c2, this.cU) : ($m_sr_BoxesRunTime$().i(key, this.c2) ? new $c_sci_Map$Map2(this.c1, this.cT, this.c2, value) : new $c_sci_Map$Map3(this.c1, this.cT, this.c2, this.cU, key, value)));
});
$p.eX = (function(p) {
  return ((!(!p.n(new $c_T2(this.c1, this.cT)))) && (!(!p.n(new $c_T2(this.c2, this.cU)))));
});
$p.A = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cf(this.c1, this.cT);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cf(this.c2, this.cU);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d0;
  h = $m_s_util_hashing_MurmurHash3$().H(h, a);
  h = $m_s_util_hashing_MurmurHash3$().H(h, b);
  h = $m_s_util_hashing_MurmurHash3$().ec(h, c);
  return $m_s_util_hashing_MurmurHash3$().bn(h, 2);
});
$p.ej = (function(key, value) {
  return this.ei(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.by)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  by: 1,
  a1: 1,
  S: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  U: 1,
  T: 1,
  d: 1,
  I: 1,
  q: 1,
  a2: 1,
  M: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.bJ = null;
  this.cx = null;
  this.bK = null;
  this.cy = null;
  this.bL = null;
  this.cz = null;
  this.bJ = key1;
  this.cx = value1;
  this.bK = key2;
  this.cy = value2;
  this.bL = key3;
  this.cz = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.l = (function() {
  return 3;
});
$p.Q = (function() {
  return 3;
});
$p.t = (function() {
  return false;
});
$p.n = (function(key) {
  if ($m_sr_BoxesRunTime$().i(key, this.bJ)) {
    return this.cx;
  } else if ($m_sr_BoxesRunTime$().i(key, this.bK)) {
    return this.cy;
  } else if ($m_sr_BoxesRunTime$().i(key, this.bL)) {
    return this.cz;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.aX = (function(key) {
  return (($m_sr_BoxesRunTime$().i(key, this.bJ) || $m_sr_BoxesRunTime$().i(key, this.bK)) || $m_sr_BoxesRunTime$().i(key, this.bL));
});
$p.ea = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.bJ) ? new $c_s_Some(this.cx) : ($m_sr_BoxesRunTime$().i(key, this.bK) ? new $c_s_Some(this.cy) : ($m_sr_BoxesRunTime$().i(key, this.bL) ? new $c_s_Some(this.cz) : $m_s_None$())));
});
$p.dF = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().i(key, this.bJ) ? this.cx : ($m_sr_BoxesRunTime$().i(key, this.bK) ? this.cy : ($m_sr_BoxesRunTime$().i(key, this.bL) ? this.cz : default$1.av())));
});
$p.B = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.ei = (function(key, value) {
  return ($m_sr_BoxesRunTime$().i(key, this.bJ) ? new $c_sci_Map$Map3(this.bJ, value, this.bK, this.cy, this.bL, this.cz) : ($m_sr_BoxesRunTime$().i(key, this.bK) ? new $c_sci_Map$Map3(this.bJ, this.cx, this.bK, value, this.bL, this.cz) : ($m_sr_BoxesRunTime$().i(key, this.bL) ? new $c_sci_Map$Map3(this.bJ, this.cx, this.bK, this.cy, this.bL, value) : new $c_sci_Map$Map4(this.bJ, this.cx, this.bK, this.cy, this.bL, this.cz, key, value))));
});
$p.eX = (function(p) {
  return (((!(!p.n(new $c_T2(this.bJ, this.cx)))) && (!(!p.n(new $c_T2(this.bK, this.cy))))) && (!(!p.n(new $c_T2(this.bL, this.cz)))));
});
$p.A = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cf(this.bJ, this.cx);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cf(this.bK, this.cy);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cf(this.bL, this.cz);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d0;
  h = $m_s_util_hashing_MurmurHash3$().H(h, a);
  h = $m_s_util_hashing_MurmurHash3$().H(h, b);
  h = $m_s_util_hashing_MurmurHash3$().ec(h, c);
  return $m_s_util_hashing_MurmurHash3$().bn(h, 3);
});
$p.ej = (function(key, value) {
  return this.ei(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bz)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  bz: 1,
  a1: 1,
  S: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  U: 1,
  T: 1,
  d: 1,
  I: 1,
  q: 1,
  a2: 1,
  M: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bg = null;
  this.c3 = null;
  this.bh = null;
  this.c4 = null;
  this.bi = null;
  this.c5 = null;
  this.bj = null;
  this.c6 = null;
  this.bg = key1;
  this.c3 = value1;
  this.bh = key2;
  this.c4 = value2;
  this.bi = key3;
  this.c5 = value3;
  this.bj = key4;
  this.c6 = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.l = (function() {
  return 4;
});
$p.Q = (function() {
  return 4;
});
$p.t = (function() {
  return false;
});
$p.n = (function(key) {
  if ($m_sr_BoxesRunTime$().i(key, this.bg)) {
    return this.c3;
  } else if ($m_sr_BoxesRunTime$().i(key, this.bh)) {
    return this.c4;
  } else if ($m_sr_BoxesRunTime$().i(key, this.bi)) {
    return this.c5;
  } else if ($m_sr_BoxesRunTime$().i(key, this.bj)) {
    return this.c6;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.aX = (function(key) {
  return ((($m_sr_BoxesRunTime$().i(key, this.bg) || $m_sr_BoxesRunTime$().i(key, this.bh)) || $m_sr_BoxesRunTime$().i(key, this.bi)) || $m_sr_BoxesRunTime$().i(key, this.bj));
});
$p.ea = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.bg) ? new $c_s_Some(this.c3) : ($m_sr_BoxesRunTime$().i(key, this.bh) ? new $c_s_Some(this.c4) : ($m_sr_BoxesRunTime$().i(key, this.bi) ? new $c_s_Some(this.c5) : ($m_sr_BoxesRunTime$().i(key, this.bj) ? new $c_s_Some(this.c6) : $m_s_None$()))));
});
$p.dF = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().i(key, this.bg) ? this.c3 : ($m_sr_BoxesRunTime$().i(key, this.bh) ? this.c4 : ($m_sr_BoxesRunTime$().i(key, this.bi) ? this.c5 : ($m_sr_BoxesRunTime$().i(key, this.bj) ? this.c6 : default$1.av()))));
});
$p.B = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.ei = (function(key, value) {
  return ($m_sr_BoxesRunTime$().i(key, this.bg) ? new $c_sci_Map$Map4(this.bg, value, this.bh, this.c4, this.bi, this.c5, this.bj, this.c6) : ($m_sr_BoxesRunTime$().i(key, this.bh) ? new $c_sci_Map$Map4(this.bg, this.c3, this.bh, value, this.bi, this.c5, this.bj, this.c6) : ($m_sr_BoxesRunTime$().i(key, this.bi) ? new $c_sci_Map$Map4(this.bg, this.c3, this.bh, this.c4, this.bi, value, this.bj, this.c6) : ($m_sr_BoxesRunTime$().i(key, this.bj) ? new $c_sci_Map$Map4(this.bg, this.c3, this.bh, this.c4, this.bi, this.c5, this.bj, value) : $m_sci_HashMap$().jJ.f6(this.bg, this.c3).f6(this.bh, this.c4).f6(this.bi, this.c5).f6(this.bj, this.c6).f6(key, value)))));
});
$p.eX = (function(p) {
  return ((((!(!p.n(new $c_T2(this.bg, this.c3)))) && (!(!p.n(new $c_T2(this.bh, this.c4))))) && (!(!p.n(new $c_T2(this.bi, this.c5))))) && (!(!p.n(new $c_T2(this.bj, this.c6)))));
});
$p.pW = (function(builder) {
  return builder.e4(this.bg, this.c3).e4(this.bh, this.c4).e4(this.bi, this.c5).e4(this.bj, this.c6);
});
$p.A = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cf(this.bg, this.c3);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cf(this.bh, this.c4);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cf(this.bi, this.c5);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cf(this.bj, this.c6);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d0;
  h = $m_s_util_hashing_MurmurHash3$().H(h, a);
  h = $m_s_util_hashing_MurmurHash3$().H(h, b);
  h = $m_s_util_hashing_MurmurHash3$().ec(h, c);
  return $m_s_util_hashing_MurmurHash3$().bn(h, 4);
});
$p.ej = (function(key, value) {
  return this.ei(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bA)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  bA: 1,
  a1: 1,
  S: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  U: 1,
  T: 1,
  d: 1,
  I: 1,
  q: 1,
  a2: 1,
  M: 1,
  p: 1,
  a: 1
}));
function $is_scm_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aE)));
}
function $isArrayOf_scm_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aE)));
}
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fY)));
}
/** @constructor */
function $c_scm_AbstractSet() {
}
$p = $c_scm_AbstractSet.prototype = new $h_sc_AbstractSet();
$p.constructor = $c_scm_AbstractSet;
/** @constructor */
function $h_scm_AbstractSet() {
}
$h_scm_AbstractSet.prototype = $p;
$p.ee = (function() {
  return this;
});
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.jX = null;
  this.jX = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.kc = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.io = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.k7 = (function() {
  return $m_sci_IndexedSeqDefaults$().nv;
});
$p.B = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.dG = (function(len) {
  var x = this.G();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.Q = (function() {
  return this.G();
});
$p.E = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.A = (function() {
  return $m_s_util_hashing_MurmurHash3$().oN(this);
});
$p.q = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.t = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.gh = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.e9 = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.e7 = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.i2 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.G = (function() {
  return (this.jX.length | 0);
});
$p.V = (function(idx) {
  return this.jX[idx];
});
$p.dD = (function() {
  return "WrappedVarArgs";
});
$p.ic = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.n = (function(v1) {
  return this.V((v1 | 0));
});
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  hH: 1,
  D: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  q: 1,
  h: 1,
  n: 1,
  u: 1,
  d: 1,
  t: 1,
  F: 1,
  E: 1,
  y: 1,
  v: 1,
  L: 1,
  G: 1,
  p: 1,
  z: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.b4 = null;
  this.b4 = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.Q = (function() {
  return this.b4.aM;
});
$p.l = (function() {
  return this.b4.aM;
});
$p.t = (function() {
  return (this.b4.aM === 0);
});
$p.B = (function() {
  return (this.t() ? $m_sc_Iterator$().a4 : new $c_sci_MapKeyValueTupleIterator(this.b4));
});
$p.aX = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().I(key);
  var keyHash = $m_sc_Hashing$().cc(keyUnimprovedHash);
  return this.b4.kf(key, keyUnimprovedHash, keyHash, 0);
});
$p.n = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().I(key);
  var keyHash = $m_sc_Hashing$().cc(keyUnimprovedHash);
  return this.b4.k6(key, keyUnimprovedHash, keyHash, 0);
});
$p.ea = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().I(key);
  var keyHash = $m_sc_Hashing$().cc(keyUnimprovedHash);
  return this.b4.i9(key, keyUnimprovedHash, keyHash, 0);
});
$p.dF = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().I(key);
  var keyHash = $m_sc_Hashing$().cc(keyUnimprovedHash);
  return this.b4.kn(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.f6 = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().I(key);
  var newRootNode = this.b4.oX(key, value, keyUnimprovedHash, $m_sc_Hashing$().cc(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.b4) ? this : new $c_sci_HashMap(newRootNode));
});
$p.cn = (function(f) {
  this.b4.cn(f);
});
$p.E = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.b4;
      var x$2 = that.b4;
      return ((x === null) ? (x$2 === null) : x.E(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.A = (function() {
  if (this.t()) {
    return $m_s_util_hashing_MurmurHash3$().hT;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.b4);
    return $m_s_util_hashing_MurmurHash3$().is(hashIterator, $m_s_util_hashing_MurmurHash3$().d0);
  }
});
$p.dD = (function() {
  return "HashMap";
});
$p.ej = (function(key, value) {
  return this.f6(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bu)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  bu: 1,
  a1: 1,
  S: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  U: 1,
  T: 1,
  d: 1,
  I: 1,
  q: 1,
  a2: 1,
  M: 1,
  p: 1,
  bq: 1,
  gl: 1,
  a: 1,
  C: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gm)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gw)));
}
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
$p.e3 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
/** @constructor */
function $c_scm_AbstractMap() {
}
$p = $c_scm_AbstractMap.prototype = new $h_sc_AbstractMap();
$p.constructor = $c_scm_AbstractMap;
/** @constructor */
function $h_scm_AbstractMap() {
}
$h_scm_AbstractMap.prototype = $p;
$p.ee = (function() {
  return this;
});
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.jR = loadFactor;
  $thiz.au = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.jS = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.au.a.length);
  $thiz.c9 = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
function $p_scm_HashSet__improveHash__I__I($thiz, originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
}
function $p_scm_HashSet__addElem__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (($thiz.au.a.length - 1) | 0));
  matchResult4: {
    var x10 = $thiz.au.a[idx];
    if ((x10 === null)) {
      $thiz.au.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
      break matchResult4;
    }
    var prev = null;
    var n = x10;
    while (((n !== null) && (n.ca <= hash))) {
      if (((n.ca === hash) && $m_sr_BoxesRunTime$().i(elem, n.dy))) {
        return false;
      }
      prev = n;
      n = n.af;
    }
    if ((prev === null)) {
      $thiz.au.a[idx] = new $c_scm_HashSet$Node(elem, hash, x10);
    } else {
      var this$3 = prev;
      var n$1 = new $c_scm_HashSet$Node(elem, hash, prev.af);
      this$3.af = n$1;
    }
  }
  $thiz.c9 = ((1 + $thiz.c9) | 0);
  return true;
}
function $p_scm_HashSet__remove__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (($thiz.au.a.length - 1) | 0));
  var x11 = $thiz.au.a[idx];
  if ((x11 === null)) {
    return false;
  }
  if (((x11.ca === hash) && $m_sr_BoxesRunTime$().i(x11.dy, elem))) {
    $thiz.au.a[idx] = x11.af;
    $thiz.c9 = (($thiz.c9 - 1) | 0);
    return true;
  }
  var prev = x11;
  var next = x11.af;
  while (((next !== null) && (next.ca <= hash))) {
    if (((next.ca === hash) && $m_sr_BoxesRunTime$().i(next.dy, elem))) {
      var this$2 = prev;
      var n = next.af;
      this$2.af = n;
      $thiz.c9 = (($thiz.c9 - 1) | 0);
      return true;
    }
    prev = next;
    next = next.af;
  }
  return false;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.au.a.length;
  $thiz.jS = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.c9 === 0)) {
    $thiz.au = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.au = $m_ju_Arrays$().S($thiz.au, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.au.a[i];
        if ((old !== null)) {
          preLow.af = null;
          preHigh.af = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.af;
            if (((n.ca & oldlen) === 0)) {
              var this$2 = lastLow;
              var n$1 = n;
              this$2.af = n$1;
              lastLow = n;
            } else {
              var this$3 = lastHigh;
              var n$2 = n;
              this$3.af = n$2;
              lastHigh = n;
            }
            n = next;
          }
          var this$4 = lastLow;
          this$4.af = null;
          if ((old !== preLow.af)) {
            $thiz.au.a[i] = preLow.af;
          }
          if ((preHigh.af !== null)) {
            $thiz.au.a[((i + oldlen) | 0)] = preHigh.af;
            var this$5 = lastHigh;
            this$5.af = null;
          }
        }
        i = ((1 + i) | 0);
      }
      oldlen = (oldlen << 1);
    }
  }
}
function $p_scm_HashSet__tableSizeFor__I__I($thiz, capacity) {
  var x = ((capacity - 1) | 0);
  var i = ((x > 4) ? x : 4);
  var x$1 = ((((-2147483648) >> Math.clz32(i)) & i) << 1);
  return ((x$1 < 1073741824) ? x$1 : 1073741824);
}
function $p_scm_HashSet__newThreshold__I__I($thiz, size) {
  return $doubleToInt((size * $thiz.jR));
}
/** @constructor */
function $c_scm_HashSet() {
  this.jR = 0.0;
  this.au = null;
  this.jS = 0;
  this.c9 = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.l = (function() {
  return this.c9;
});
$p.aX = (function(elem) {
  var hash = $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().I(elem));
  matchResult1: {
    var $x_1;
    var x1 = this.au.a[(hash & ((this.au.a.length - 1) | 0))];
    if ((x1 === null)) {
      var $x_1 = null;
      break matchResult1;
    }
    var $x_1 = x1.qv(elem, hash);
  }
  return ($x_1 !== null);
});
$p.eg = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.jR)));
  if ((target > this.au.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.w = (function(elem) {
  if ((((1 + this.c9) | 0) >= this.jS)) {
    $p_scm_HashSet__growTable__I__V(this, (this.au.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().I(elem)));
});
$p.pB = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, v1$2, $p_scm_HashSet__improveHash__I__I(this, (v2$2 | 0)));
    }));
    xs.rK.rN(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.h()) {
      var next = iter.g();
      $p_scm_HashSet__addElem__O__I__Z(this, next.dy, next.ca);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.of();
    while (iter$2.h()) {
      var next$2 = iter$2.g();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.oy(), next$2.os());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.ro = (function(elem) {
  return $p_scm_HashSet__remove__O__I__Z(this, elem, $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().I(elem)));
});
$p.B = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.Q = (function() {
  return this.c9;
});
$p.t = (function() {
  return (this.c9 === 0);
});
$p.dD = (function() {
  return "HashSet";
});
$p.A = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.h()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().is(hashIterator, $m_s_util_hashing_MurmurHash3$().nU);
});
$p.e3 = (function(elems) {
  return this.pB(elems);
});
$p.e5 = (function(elem) {
  this.w(elem);
  return this;
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bE)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  bE: 1,
  gA: 1,
  fw: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  fN: 1,
  d: 1,
  ay: 1,
  ai: 1,
  w: 1,
  ah: 1,
  Y: 1,
  Z: 1,
  X: 1,
  aF: 1,
  gR: 1,
  gQ: 1,
  p: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.g1)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gN)));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.c = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.c = null;
}
$p = $c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $p;
$p.dG = (function(len) {
  var x = this.G();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.Q = (function() {
  return this.G();
});
$p.dJ = (function() {
  return "IndexedSeq";
});
$p.kc = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.io = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.G = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.f : this.c.a.length);
});
$p.B = (function() {
  return ((this === $m_sci_Vector0$()) ? $m_sci_Vector$().nA : new $c_sci_NewVectorIterator(this, this.G(), this.cK()));
});
$p.dD = (function() {
  return "Vector";
});
$p.e7 = (function(xs, start, len) {
  return this.B().e7(xs, start, len);
});
$p.k7 = (function() {
  return $m_sci_Vector$().nz;
});
$p.aE = (function(index) {
  return $m_scg_CommonErrors$().qJ(index, ((this.G() - 1) | 0));
});
$p.e9 = (function(f) {
  var c = this.cK();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = (((c + ((c >>> 31) | 0)) | 0) >> 1);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.kj(((((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0) - 1) | 0), this.cJ(i), f);
    i = ((1 + i) | 0);
  }
});
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.N)));
}
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fT)));
}
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.t()) | 0);
    } else {
      if ((!xs$tailLocal1.t())) {
        var i$tailLocal1$tmp1 = ((1 + i$tailLocal1) | 0);
        var xs$tailLocal1$tmp1 = xs$tailLocal1.bQ();
        i$tailLocal1 = i$tailLocal1$tmp1;
        xs$tailLocal1 = xs$tailLocal1$tmp1;
        continue;
      }
      return (-1);
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.t();
      var bEmpty = b$tailLocal1.t();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().i(a$tailLocal1.cq(), b$tailLocal1.cq()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.bQ();
        var b$tailLocal1$tmp1 = b$tailLocal1.bQ();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (aEmpty && bEmpty);
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.ov = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.V = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.io = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.dJ = (function() {
  return "LinearSeq";
});
$p.B = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.pp = (function(prefix) {
  if (this.t()) {
    return prefix;
  } else if (prefix.t()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.cq(), this);
    var curr = result;
    var that = prefix.bQ();
    while ((!that.t())) {
      var temp = new $c_sci_$colon$colon(that.cq(), this);
      curr.fO = temp;
      curr = temp;
      that = that.bQ();
    }
    return result;
  }
});
$p.t = (function() {
  return (this === $m_sci_Nil$());
});
$p.re = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.pp(prefix);
  }
  if ((prefix.Q() === 0)) {
    return this;
  }
  if (false) {
    if (this.t()) {
      return prefix.rR();
    }
  }
  var iter = prefix.B();
  if (iter.h()) {
    var result = new $c_sci_$colon$colon(iter.g(), this);
    var curr = result;
    while (iter.h()) {
      var temp = new $c_sci_$colon$colon(iter.g(), this);
      curr.fO = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.e9 = (function(f) {
  var these = this;
  while ((!these.t())) {
    f.n(these.cq());
    these = these.bQ();
  }
});
$p.G = (function() {
  var these = this;
  var len = 0;
  while ((!these.t())) {
    len = ((1 + len) | 0);
    these = these.bQ();
  }
  return len;
});
$p.dG = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.dD = (function() {
  return "List";
});
$p.E = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.qi = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.ic = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.n = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.c = null;
}
$p = $c_sci_VectorImpl.prototype = new $h_sci_Vector();
$p.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $p;
function $ct_scm_HashMap__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.jP = loadFactor;
  $thiz.P = new ($d_scm_HashMap$Node.r().C)($p_scm_HashMap__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.hQ = $p_scm_HashMap__newThreshold__I__I($thiz, $thiz.P.a.length);
  $thiz.c7 = 0;
  return $thiz;
}
function $ct_scm_HashMap__($thiz) {
  $ct_scm_HashMap__I__D__($thiz, 16, 0.75);
  return $thiz;
}
function $p_scm_HashMap__put0__O__O__I__Z__s_Some($thiz, key, value, hash, getOld) {
  if ((((1 + $thiz.c7) | 0) >= $thiz.hQ)) {
    $p_scm_HashMap__growTable__I__V($thiz, ($thiz.P.a.length << 1));
  }
  return $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, (hash & (($thiz.P.a.length - 1) | 0)));
}
function $p_scm_HashMap__put0__O__O__Z__s_Some($thiz, key, value, getOld) {
  if ((((1 + $thiz.c7) | 0) >= $thiz.hQ)) {
    $p_scm_HashMap__growTable__I__V($thiz, ($thiz.P.a.length << 1));
  }
  var originalHash = $m_sr_Statics$().I(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  return $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, (hash & (($thiz.P.a.length - 1) | 0)));
}
function $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, idx) {
  matchResult7: {
    var x30 = $thiz.P.a[idx];
    if ((x30 === null)) {
      $thiz.P.a[idx] = new $c_scm_HashMap$Node(key, hash, value, null);
      break matchResult7;
    }
    var prev = null;
    var n = x30;
    while (((n !== null) && (n.cC <= hash))) {
      if (((n.cC === hash) && $m_sr_BoxesRunTime$().i(key, n.dw))) {
        var old$2 = n.c8;
        var this$2 = n;
        this$2.c8 = value;
        return (getOld ? new $c_s_Some(old$2) : null);
      }
      prev = n;
      n = n.aD;
    }
    if ((prev === null)) {
      $thiz.P.a[idx] = new $c_scm_HashMap$Node(key, hash, value, x30);
    } else {
      var this$6 = prev;
      var n$1 = new $c_scm_HashMap$Node(key, hash, value, prev.aD);
      this$6.aD = n$1;
    }
  }
  $thiz.c7 = ((1 + $thiz.c7) | 0);
  return null;
}
function $p_scm_HashMap__growTable__I__V($thiz, newlen) {
  if ((newlen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), (("new HashMap table size " + newlen) + " exceeds maximum"));
  }
  var oldlen = $thiz.P.a.length;
  $thiz.hQ = $p_scm_HashMap__newThreshold__I__I($thiz, newlen);
  if (($thiz.c7 === 0)) {
    $thiz.P = new ($d_scm_HashMap$Node.r().C)(newlen);
  } else {
    $thiz.P = $m_ju_Arrays$().S($thiz.P, newlen);
    var preLow = new $c_scm_HashMap$Node(null, 0, null, null);
    var preHigh = new $c_scm_HashMap$Node(null, 0, null, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.P.a[i];
        if ((old !== null)) {
          preLow.aD = null;
          preHigh.aD = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.aD;
            if (((n.cC & oldlen) === 0)) {
              var this$2 = lastLow;
              var n$1 = n;
              this$2.aD = n$1;
              lastLow = n;
            } else {
              var this$3 = lastHigh;
              var n$2 = n;
              this$3.aD = n$2;
              lastHigh = n;
            }
            n = next;
          }
          var this$4 = lastLow;
          this$4.aD = null;
          if ((old !== preLow.aD)) {
            $thiz.P.a[i] = preLow.aD;
          }
          if ((preHigh.aD !== null)) {
            $thiz.P.a[((i + oldlen) | 0)] = preHigh.aD;
            var this$5 = lastHigh;
            this$5.aD = null;
          }
        }
        i = ((1 + i) | 0);
      }
      oldlen = (oldlen << 1);
    }
  }
}
function $p_scm_HashMap__tableSizeFor__I__I($thiz, capacity) {
  var x = ((capacity - 1) | 0);
  var i = ((x > 4) ? x : 4);
  var x$1 = ((((-2147483648) >> Math.clz32(i)) & i) << 1);
  return ((x$1 < 1073741824) ? x$1 : 1073741824);
}
function $p_scm_HashMap__newThreshold__I__I($thiz, size) {
  return $doubleToInt((size * $thiz.jP));
}
/** @constructor */
function $c_scm_HashMap() {
  this.jP = 0.0;
  this.P = null;
  this.hQ = 0;
  this.c7 = 0;
}
$p = $c_scm_HashMap.prototype = new $h_scm_AbstractMap();
$p.constructor = $c_scm_HashMap;
/** @constructor */
function $h_scm_HashMap() {
}
$h_scm_HashMap.prototype = $p;
$p.l = (function() {
  return this.c7;
});
$p.aX = (function(key) {
  var originalHash = $m_sr_Statics$().I(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  matchResult1: {
    var $x_1;
    var x1 = this.P.a[(hash & ((this.P.a.length - 1) | 0))];
    if ((x1 === null)) {
      var $x_1 = null;
      break matchResult1;
    }
    var $x_1 = x1.i7(key, hash);
  }
  return ($x_1 !== null);
});
$p.eg = (function(size) {
  var target = $p_scm_HashMap__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.jP)));
  if ((target > this.P.a.length)) {
    $p_scm_HashMap__growTable__I__V(this, target);
  }
});
$p.pA = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if ((xs instanceof $c_sci_HashMap)) {
    var f = new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2, v2$2, v3$2) => {
      var h = (v3$2 | 0);
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, v1$2, v2$2, (h ^ ((h >>> 16) | 0)), false);
    }));
    xs.b4.kk(f);
    return this;
  } else if ((xs instanceof $c_scm_HashMap)) {
    var iter = xs.oB();
    while (iter.h()) {
      var next = iter.g();
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, next.dw, next.c8, next.cC, false);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.of();
    while (iter$2.h()) {
      var entry = iter$2.g();
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, entry.oy(), entry.oZ(), entry.os(), false);
    }
    return this;
  } else {
    return ($is_scm_Map(xs) ? (xs.cn(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((key$2, value$2) => {
      var originalHash = $m_sr_Statics$().I(key$2);
      return $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, key$2, value$2, (originalHash ^ ((originalHash >>> 16) | 0)), false);
    }))), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
  }
});
$p.B = (function() {
  return ((this.c7 === 0) ? $m_sc_Iterator$().a4 : new $c_scm_HashMap$$anon$1(this));
});
$p.oB = (function() {
  return ((this.c7 === 0) ? $m_sc_Iterator$().a4 : new $c_scm_HashMap$$anon$4(this));
});
$p.dE = (function() {
  $m_ju_Arrays$().oh(this.P, null);
  this.c7 = 0;
});
$p.ea = (function(key) {
  var originalHash = $m_sr_Statics$().I(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  matchResult1: {
    var x34;
    var x1 = this.P.a[(hash & ((this.P.a.length - 1) | 0))];
    if ((x1 === null)) {
      var x34 = null;
      break matchResult1;
    }
    var x34 = x1.i7(key, hash);
  }
  if ((x34 === null)) {
    return $m_s_None$();
  }
  return new $c_s_Some(x34.c8);
});
$p.n = (function(key) {
  var originalHash = $m_sr_Statics$().I(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  matchResult1: {
    var x35;
    var x1 = this.P.a[(hash & ((this.P.a.length - 1) | 0))];
    if ((x1 === null)) {
      var x35 = null;
      break matchResult1;
    }
    var x35 = x1.i7(key, hash);
  }
  if ((x35 === null)) {
    return $f_sc_MapOps__default__O__O(this, key);
  }
  return x35.c8;
});
$p.dF = (function(key, default$1) {
  if ((!($objectGetClass(this) === $d_scm_HashMap.l()))) {
    return $f_sc_MapOps__getOrElse__O__F0__O(this, key, default$1);
  } else {
    var originalHash = $m_sr_Statics$().I(key);
    var hash = (originalHash ^ ((originalHash >>> 16) | 0));
    matchResult1: {
      var nd;
      var x1 = this.P.a[(hash & ((this.P.a.length - 1) | 0))];
      if ((x1 === null)) {
        var nd = null;
        break matchResult1;
      }
      var nd = x1.i7(key, hash);
    }
    return ((nd === null) ? default$1.av() : nd.c8);
  }
});
$p.rh = (function(key, value) {
  var x37 = $p_scm_HashMap__put0__O__O__Z__s_Some(this, key, value, true);
  if ((x37 === null)) {
    return $m_s_None$();
  }
  return x37;
});
$p.pI = (function(elem) {
  $p_scm_HashMap__put0__O__O__Z__s_Some(this, elem.b3, elem.aL, false);
  return this;
});
$p.Q = (function() {
  return this.c7;
});
$p.t = (function() {
  return (this.c7 === 0);
});
$p.cn = (function(f) {
  var len = this.P.a.length;
  var i = 0;
  while ((i < len)) {
    var n = this.P.a[i];
    if ((n !== null)) {
      n.cn(f);
    }
    i = ((1 + i) | 0);
  }
});
$p.dJ = (function() {
  return "HashMap";
});
$p.A = (function() {
  if (this.t()) {
    return $m_s_util_hashing_MurmurHash3$().hT;
  } else {
    var tupleHashIterator = new $c_scm_HashMap$$anon$5(this);
    return $m_s_util_hashing_MurmurHash3$().is(tupleHashIterator, $m_s_util_hashing_MurmurHash3$().d0);
  }
});
$p.e3 = (function(elems) {
  return this.pA(elems);
});
$p.e5 = (function(elem) {
  return this.pI(elem);
});
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bD)));
}
var $d_scm_HashMap = new $TypeData().i($c_scm_HashMap, "scala.collection.mutable.HashMap", ({
  bD: 1,
  gz: 1,
  S: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  U: 1,
  T: 1,
  d: 1,
  I: 1,
  ai: 1,
  w: 1,
  ah: 1,
  Y: 1,
  Z: 1,
  X: 1,
  aF: 1,
  gP: 1,
  aE: 1,
  p: 1,
  bq: 1,
  a: 1
}));
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.e = suffix1;
  $thiz.f = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.c = null;
  this.e = null;
  this.f = 0;
}
$p = $c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $p;
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.V)));
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.c = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$p = $c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $p;
$p.V = (function(index) {
  if (((index >= 0) && (index < this.c.a.length))) {
    return this.c.a[index];
  } else {
    throw this.aE(index);
  }
});
$p.dK = (function(index, elem) {
  if (((index >= 0) && (index < this.c.a.length))) {
    var a1 = this.c;
    var a1c = a1.d();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.aE(index);
  }
});
$p.dB = (function(elem) {
  if ((this.c.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().eS(this.c, elem));
  } else {
    var $x_2 = this.c;
    var $x_1 = $m_sci_VectorStatics$().bm;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.cK = (function() {
  return 1;
});
$p.cJ = (function(idx) {
  return this.c;
});
$p.n = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.c.a.length))) {
    return this.c.a[index];
  } else {
    throw this.aE(index);
  }
});
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  gp: 1,
  W: 1,
  N: 1,
  J: 1,
  x: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  u: 1,
  d: 1,
  t: 1,
  q: 1,
  F: 1,
  E: 1,
  y: 1,
  v: 1,
  L: 1,
  D: 1,
  p: 1,
  z: 1,
  G: 1,
  a: 1,
  C: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.jI = null;
  this.fO = null;
  this.jI = head;
  this.fO = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.f2 = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.cG = (function() {
  return 2;
});
$p.cI = (function() {
  return "::";
});
$p.cH = (function(n) {
  if ((n === 0)) {
    return this.jI;
  }
  if ((n === 1)) {
    return this.fO;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.cq = (function() {
  return this.jI;
});
$p.bQ = (function() {
  return this.fO;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  fS: 1,
  aA: 1,
  J: 1,
  x: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  u: 1,
  d: 1,
  t: 1,
  q: 1,
  F: 1,
  E: 1,
  bo: 1,
  af: 1,
  bw: 1,
  bv: 1,
  p: 1,
  z: 1,
  bp: 1,
  G: 1,
  a: 1,
  C: 1,
  K: 1
}));
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.f2 = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.cG = (function() {
  return 0;
});
$p.cI = (function() {
  return "Nil";
});
$p.cH = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.qG = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list");
});
$p.rE = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.Q = (function() {
  return 0;
});
$p.B = (function() {
  return $m_sc_Iterator$().a4;
});
$p.cq = (function() {
  this.qG();
});
$p.bQ = (function() {
  this.rE();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  gf: 1,
  aA: 1,
  J: 1,
  x: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  u: 1,
  d: 1,
  t: 1,
  q: 1,
  F: 1,
  E: 1,
  bo: 1,
  af: 1,
  bw: 1,
  bv: 1,
  p: 1,
  z: 1,
  bp: 1,
  G: 1,
  a: 1,
  C: 1,
  K: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
/** @constructor */
function $c_sci_Vector0$() {
  this.c = null;
  this.e = null;
  this.f = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().jN, $m_sci_VectorStatics$().jN, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.o6 = (function(index) {
  throw this.aE(index);
});
$p.dK = (function(index, elem) {
  throw this.aE(index);
});
$p.dB = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.cK = (function() {
  return 0;
});
$p.cJ = (function(idx) {
  return null;
});
$p.E = (function(o) {
  return ((this === o) || ((o instanceof $c_sci_Vector) ? false : $f_sc_Seq__equals__O__Z(this, o)));
});
$p.aE = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.V = (function(i) {
  this.o6(i);
});
$p.n = (function(v1) {
  this.o6((v1 | 0));
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  go: 1,
  V: 1,
  W: 1,
  N: 1,
  J: 1,
  x: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  u: 1,
  d: 1,
  t: 1,
  q: 1,
  F: 1,
  E: 1,
  y: 1,
  v: 1,
  L: 1,
  D: 1,
  p: 1,
  z: 1,
  G: 1,
  a: 1,
  C: 1
}));
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$();
  }
  return $n_sci_Vector0$;
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.c = null;
  this.e = null;
  this.f = 0;
  this.bM = 0;
  this.bl = null;
  this.bM = len1;
  this.bl = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.V = (function(index) {
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.bM) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bl.a.length) ? this.bl.a[i2].a[i1] : this.e.a[(31 & io)]);
    } else {
      return this.c.a[index];
    }
  } else {
    throw this.aE(index);
  }
});
$p.dK = (function(index, elem) {
  if (((index >= 0) && (index < this.f))) {
    if ((index >= this.bM)) {
      var io = ((index - this.bM) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.bl.a.length)) {
        var a2 = this.bl;
        var a2c = a2.d();
        var a1 = a2c.a[i2];
        var a1c = a1.d();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.c, this.bM, a2c, this.e, this.f);
      } else {
        var a1$1 = this.e;
        var a1c$1 = a1$1.d();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.c, this.bM, this.bl, a1c$1, this.f);
      }
    } else {
      var a1$2 = this.c;
      var a1c$2 = a1$2.d();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bM, this.bl, this.e, this.f);
    }
  } else {
    throw this.aE(index);
  }
});
$p.dB = (function(elem) {
  if ((this.e.a.length < 32)) {
    var suffix1$3 = $m_sci_VectorStatics$().eS(this.e, elem);
    var length0$3 = ((1 + this.f) | 0);
    return new $c_sci_Vector2(this.c, this.bM, this.bl, suffix1$3, length0$3);
  } else if ((this.bl.a.length < 30)) {
    var data2$4 = $m_sci_VectorStatics$().u(this.bl, this.e);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$4 = ((1 + this.f) | 0);
    return new $c_sci_Vector2(this.c, this.bM, data2$4, a, length0$4);
  } else {
    var $x_5 = this.c;
    var $x_4 = this.bM;
    var $x_3 = this.bl;
    var $x_2 = this.bM;
    var $x_1 = $m_sci_VectorStatics$().cB;
    var x = this.e;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.f) | 0));
  }
});
$p.cK = (function() {
  return 3;
});
$p.cJ = (function(idx) {
  switch (idx) {
    case 0: {
      return this.c;
      break;
    }
    case 1: {
      return this.bl;
      break;
    }
    case 2: {
      return this.e;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.n = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.bM) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bl.a.length) ? this.bl.a[i2].a[i1] : this.e.a[(31 & io)]);
    } else {
      return this.c.a[index];
    }
  } else {
    throw this.aE(index);
  }
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  gq: 1,
  V: 1,
  W: 1,
  N: 1,
  J: 1,
  x: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  u: 1,
  d: 1,
  t: 1,
  q: 1,
  F: 1,
  E: 1,
  y: 1,
  v: 1,
  L: 1,
  D: 1,
  p: 1,
  z: 1,
  G: 1,
  a: 1,
  C: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.c = null;
  this.e = null;
  this.f = 0;
  this.b9 = 0;
  this.by = null;
  this.ba = 0;
  this.aV = null;
  this.aW = null;
  this.b9 = len1;
  this.by = prefix2;
  this.ba = len12;
  this.aV = data3;
  this.aW = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.V = (function(index) {
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.ba) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aV.a.length) ? this.aV.a[i3].a[i2].a[i1] : ((i2 < this.aW.a.length) ? this.aW.a[i2].a[i1] : this.e.a[i1]));
    } else if ((index >= this.b9)) {
      var io$2 = ((index - this.b9) | 0);
      return this.by.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.c.a[index];
    }
  } else {
    throw this.aE(index);
  }
});
$p.dK = (function(index, elem) {
  if (((index >= 0) && (index < this.f))) {
    if ((index >= this.ba)) {
      var io = ((index - this.ba) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.aV.a.length)) {
        var a3 = this.aV;
        var a3c = a3.d();
        var a2 = a3c.a[i3];
        var a2c = a2.d();
        var a1 = a2c.a[i2];
        var a1c = a1.d();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.c, this.b9, this.by, this.ba, a3c, this.aW, this.e, this.f);
      } else if ((i2 < this.aW.a.length)) {
        var a2$1 = this.aW;
        var a2c$1 = a2$1.d();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.d();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.c, this.b9, this.by, this.ba, this.aV, a2c$1, this.e, this.f);
      } else {
        var a1$2 = this.e;
        var a1c$2 = a1$2.d();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.c, this.b9, this.by, this.ba, this.aV, this.aW, a1c$2, this.f);
      }
    } else if ((index >= this.b9)) {
      var io$2 = ((index - this.b9) | 0);
      var a2$2 = this.by;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.d();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.d();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.c, this.b9, a2c$2, this.ba, this.aV, this.aW, this.e, this.f);
    } else {
      var a1$4 = this.c;
      var a1c$4 = a1$4.d();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.b9, this.by, this.ba, this.aV, this.aW, this.e, this.f);
    }
  } else {
    throw this.aE(index);
  }
});
$p.dB = (function(elem) {
  if ((this.e.a.length < 32)) {
    var suffix1$16 = $m_sci_VectorStatics$().eS(this.e, elem);
    var length0$16 = ((1 + this.f) | 0);
    return new $c_sci_Vector3(this.c, this.b9, this.by, this.ba, this.aV, this.aW, suffix1$16, length0$16);
  } else if ((this.aW.a.length < 31)) {
    var suffix2$6 = $m_sci_VectorStatics$().u(this.aW, this.e);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$17 = ((1 + this.f) | 0);
    return new $c_sci_Vector3(this.c, this.b9, this.by, this.ba, this.aV, suffix2$6, a, length0$17);
  } else if ((this.aV.a.length < 30)) {
    var data3$7 = $m_sci_VectorStatics$().u(this.aV, $m_sci_VectorStatics$().u(this.aW, this.e));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$18 = ((1 + this.f) | 0);
    return new $c_sci_Vector3(this.c, this.b9, this.by, this.ba, data3$7, $m_sci_VectorStatics$().bm, a$1, length0$18);
  } else {
    var $x_8 = this.c;
    var $x_7 = this.b9;
    var $x_6 = this.by;
    var $x_5 = this.ba;
    var $x_4 = this.aV;
    var $x_3 = this.ba;
    var $x_2 = $m_sci_VectorStatics$().eM;
    var x = $m_sci_VectorStatics$().u(this.aW, this.e);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().bm;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.f) | 0));
  }
});
$p.cK = (function() {
  return 5;
});
$p.cJ = (function(idx) {
  switch (idx) {
    case 0: {
      return this.c;
      break;
    }
    case 1: {
      return this.by;
      break;
    }
    case 2: {
      return this.aV;
      break;
    }
    case 3: {
      return this.aW;
      break;
    }
    case 4: {
      return this.e;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.n = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.ba) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aV.a.length) ? this.aV.a[i3].a[i2].a[i1] : ((i2 < this.aW.a.length) ? this.aW.a[i2].a[i1] : this.e.a[i1]));
    } else if ((index >= this.b9)) {
      var io$2 = ((index - this.b9) | 0);
      return this.by.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.c.a[index];
    }
  } else {
    throw this.aE(index);
  }
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  gr: 1,
  V: 1,
  W: 1,
  N: 1,
  J: 1,
  x: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  u: 1,
  d: 1,
  t: 1,
  q: 1,
  F: 1,
  E: 1,
  y: 1,
  v: 1,
  L: 1,
  D: 1,
  p: 1,
  z: 1,
  G: 1,
  a: 1,
  C: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.c = null;
  this.e = null;
  this.f = 0;
  this.aP = 0;
  this.b5 = null;
  this.aQ = 0;
  this.b6 = null;
  this.aR = 0;
  this.az = null;
  this.aB = null;
  this.aA = null;
  this.aP = len1;
  this.b5 = prefix2;
  this.aQ = len12;
  this.b6 = prefix3;
  this.aR = len123;
  this.az = data4;
  this.aB = suffix3;
  this.aA = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.V = (function(index) {
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.aR) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.az.a.length) ? this.az.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aB.a.length) ? this.aB.a[i3].a[i2].a[i1] : ((i2 < this.aA.a.length) ? this.aA.a[i2].a[i1] : this.e.a[i1])));
    } else if ((index >= this.aQ)) {
      var io$2 = ((index - this.aQ) | 0);
      return this.b6.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aP)) {
      var io$3 = ((index - this.aP) | 0);
      return this.b5.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.c.a[index];
    }
  } else {
    throw this.aE(index);
  }
});
$p.dK = (function(index, elem) {
  if (((index >= 0) && (index < this.f))) {
    if ((index >= this.aR)) {
      var io = ((index - this.aR) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.az.a.length)) {
        var a4 = this.az;
        var a4c = a4.d();
        var a3 = a4c.a[i4];
        var a3c = a3.d();
        var a2 = a3c.a[i3];
        var a2c = a2.d();
        var a1 = a2c.a[i2];
        var a1c = a1.d();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        return new $c_sci_Vector4(this.c, this.aP, this.b5, this.aQ, this.b6, this.aR, a4c, this.aB, this.aA, this.e, this.f);
      } else if ((i3 < this.aB.a.length)) {
        var a3$1 = this.aB;
        var a3c$1 = a3$1.d();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.d();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.d();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.c, this.aP, this.b5, this.aQ, this.b6, this.aR, this.az, a3c$1, this.aA, this.e, this.f);
      } else if ((i2 < this.aA.a.length)) {
        var a2$2 = this.aA;
        var a2c$2 = a2$2.d();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.d();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.c, this.aP, this.b5, this.aQ, this.b6, this.aR, this.az, this.aB, a2c$2, this.e, this.f);
      } else {
        var a1$3 = this.e;
        var a1c$3 = a1$3.d();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.c, this.aP, this.b5, this.aQ, this.b6, this.aR, this.az, this.aB, this.aA, a1c$3, this.f);
      }
    } else if ((index >= this.aQ)) {
      var io$2 = ((index - this.aQ) | 0);
      var a3$2 = this.b6;
      var idx3 = ((io$2 >>> 10) | 0);
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a3c$2 = a3$2.d();
      var a2$3 = a3c$2.a[idx3];
      var a2c$3 = a2$3.d();
      var a1$4 = a2c$3.a[idx2];
      var a1c$4 = a1$4.d();
      a1c$4.a[idx1] = elem;
      a2c$3.a[idx2] = a1c$4;
      a3c$2.a[idx3] = a2c$3;
      return new $c_sci_Vector4(this.c, this.aP, this.b5, this.aQ, a3c$2, this.aR, this.az, this.aB, this.aA, this.e, this.f);
    } else if ((index >= this.aP)) {
      var io$3 = ((index - this.aP) | 0);
      var a2$4 = this.b5;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.d();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.d();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.c, this.aP, a2c$4, this.aQ, this.b6, this.aR, this.az, this.aB, this.aA, this.e, this.f);
    } else {
      var a1$6 = this.c;
      var a1c$6 = a1$6.d();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.aP, this.b5, this.aQ, this.b6, this.aR, this.az, this.aB, this.aA, this.e, this.f);
    }
  } else {
    throw this.aE(index);
  }
});
$p.dB = (function(elem) {
  if ((this.e.a.length < 32)) {
    var suffix1$33 = $m_sci_VectorStatics$().eS(this.e, elem);
    var length0$33 = ((1 + this.f) | 0);
    return new $c_sci_Vector4(this.c, this.aP, this.b5, this.aQ, this.b6, this.aR, this.az, this.aB, this.aA, suffix1$33, length0$33);
  } else if ((this.aA.a.length < 31)) {
    var suffix2$22 = $m_sci_VectorStatics$().u(this.aA, this.e);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$34 = ((1 + this.f) | 0);
    return new $c_sci_Vector4(this.c, this.aP, this.b5, this.aQ, this.b6, this.aR, this.az, this.aB, suffix2$22, a, length0$34);
  } else if ((this.aB.a.length < 31)) {
    var suffix3$9 = $m_sci_VectorStatics$().u(this.aB, $m_sci_VectorStatics$().u(this.aA, this.e));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$35 = ((1 + this.f) | 0);
    return new $c_sci_Vector4(this.c, this.aP, this.b5, this.aQ, this.b6, this.aR, this.az, suffix3$9, $m_sci_VectorStatics$().bm, a$1, length0$35);
  } else if ((this.az.a.length < 30)) {
    var data4$10 = $m_sci_VectorStatics$().u(this.az, $m_sci_VectorStatics$().u(this.aB, $m_sci_VectorStatics$().u(this.aA, this.e)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$36 = ((1 + this.f) | 0);
    return new $c_sci_Vector4(this.c, this.aP, this.b5, this.aQ, this.b6, this.aR, data4$10, $m_sci_VectorStatics$().cB, $m_sci_VectorStatics$().bm, a$2, length0$36);
  } else {
    var $x_11 = this.c;
    var $x_10 = this.aP;
    var $x_9 = this.b5;
    var $x_8 = this.aQ;
    var $x_7 = this.b6;
    var $x_6 = this.aR;
    var $x_5 = this.az;
    var $x_4 = this.aR;
    var $x_3 = $m_sci_VectorStatics$().jO;
    var x = $m_sci_VectorStatics$().u(this.aB, $m_sci_VectorStatics$().u(this.aA, this.e));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().cB;
    var $x_1 = $m_sci_VectorStatics$().bm;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.f) | 0));
  }
});
$p.cK = (function() {
  return 7;
});
$p.cJ = (function(idx) {
  switch (idx) {
    case 0: {
      return this.c;
      break;
    }
    case 1: {
      return this.b5;
      break;
    }
    case 2: {
      return this.b6;
      break;
    }
    case 3: {
      return this.az;
      break;
    }
    case 4: {
      return this.aB;
      break;
    }
    case 5: {
      return this.aA;
      break;
    }
    case 6: {
      return this.e;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.n = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.aR) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.az.a.length) ? this.az.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aB.a.length) ? this.aB.a[i3].a[i2].a[i1] : ((i2 < this.aA.a.length) ? this.aA.a[i2].a[i1] : this.e.a[i1])));
    } else if ((index >= this.aQ)) {
      var io$2 = ((index - this.aQ) | 0);
      return this.b6.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aP)) {
      var io$3 = ((index - this.aP) | 0);
      return this.b5.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.c.a[index];
    }
  } else {
    throw this.aE(index);
  }
});
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  gs: 1,
  V: 1,
  W: 1,
  N: 1,
  J: 1,
  x: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  u: 1,
  d: 1,
  t: 1,
  q: 1,
  F: 1,
  E: 1,
  y: 1,
  v: 1,
  L: 1,
  D: 1,
  p: 1,
  z: 1,
  G: 1,
  a: 1,
  C: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.c = null;
  this.e = null;
  this.f = 0;
  this.am = 0;
  this.aG = null;
  this.an = 0;
  this.aH = null;
  this.ao = 0;
  this.aI = null;
  this.ap = 0;
  this.a7 = null;
  this.aa = null;
  this.a9 = null;
  this.a8 = null;
  this.am = len1;
  this.aG = prefix2;
  this.an = len12;
  this.aH = prefix3;
  this.ao = len123;
  this.aI = prefix4;
  this.ap = len1234;
  this.a7 = data5;
  this.aa = suffix4;
  this.a9 = suffix3;
  this.a8 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.V = (function(index) {
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.ap) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a7.a.length) ? this.a7.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.aa.a.length) ? this.aa.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a9.a.length) ? this.a9.a[i3].a[i2].a[i1] : ((i2 < this.a8.a.length) ? this.a8.a[i2].a[i1] : this.e.a[i1]))));
    } else if ((index >= this.ao)) {
      var io$2 = ((index - this.ao) | 0);
      return this.aI.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.an)) {
      var io$3 = ((index - this.an) | 0);
      return this.aH.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.am)) {
      var io$4 = ((index - this.am) | 0);
      return this.aG.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.c.a[index];
    }
  } else {
    throw this.aE(index);
  }
});
$p.dK = (function(index, elem) {
  if (((index >= 0) && (index < this.f))) {
    if ((index >= this.ap)) {
      var io = ((index - this.ap) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.a7.a.length)) {
        var a5 = this.a7;
        var a5c = a5.d();
        var a4 = a5c.a[i5];
        var a4c = a4.d();
        var a3 = a4c.a[i4];
        var a3c = a3.d();
        var a2 = a3c.a[i3];
        var a2c = a2.d();
        var a1 = a2c.a[i2];
        var a1c = a1.d();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        return new $c_sci_Vector5(this.c, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, a5c, this.aa, this.a9, this.a8, this.e, this.f);
      } else if ((i4 < this.aa.a.length)) {
        var a4$1 = this.aa;
        var a4c$1 = a4$1.d();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.d();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.d();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.d();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        return new $c_sci_Vector5(this.c, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.a7, a4c$1, this.a9, this.a8, this.e, this.f);
      } else if ((i3 < this.a9.a.length)) {
        var a3$2 = this.a9;
        var a3c$2 = a3$2.d();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.d();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.d();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.c, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.a7, this.aa, a3c$2, this.a8, this.e, this.f);
      } else if ((i2 < this.a8.a.length)) {
        var a2$3 = this.a8;
        var a2c$3 = a2$3.d();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.d();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.c, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.a7, this.aa, this.a9, a2c$3, this.e, this.f);
      } else {
        var a1$4 = this.e;
        var a1c$4 = a1$4.d();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.c, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.a7, this.aa, this.a9, this.a8, a1c$4, this.f);
      }
    } else if ((index >= this.ao)) {
      var io$2 = ((index - this.ao) | 0);
      var a4$2 = this.aI;
      var idx4 = ((io$2 >>> 15) | 0);
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a4c$2 = a4$2.d();
      var a3$3 = a4c$2.a[idx4];
      var a3c$3 = a3$3.d();
      var a2$4 = a3c$3.a[idx3];
      var a2c$4 = a2$4.d();
      var a1$5 = a2c$4.a[idx2];
      var a1c$5 = a1$5.d();
      a1c$5.a[idx1] = elem;
      a2c$4.a[idx2] = a1c$5;
      a3c$3.a[idx3] = a2c$4;
      a4c$2.a[idx4] = a3c$3;
      return new $c_sci_Vector5(this.c, this.am, this.aG, this.an, this.aH, this.ao, a4c$2, this.ap, this.a7, this.aa, this.a9, this.a8, this.e, this.f);
    } else if ((index >= this.an)) {
      var io$3 = ((index - this.an) | 0);
      var a3$4 = this.aH;
      var idx3$1 = ((io$3 >>> 10) | 0);
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a3c$4 = a3$4.d();
      var a2$5 = a3c$4.a[idx3$1];
      var a2c$5 = a2$5.d();
      var a1$6 = a2c$5.a[idx2$1];
      var a1c$6 = a1$6.d();
      a1c$6.a[idx1$1] = elem;
      a2c$5.a[idx2$1] = a1c$6;
      a3c$4.a[idx3$1] = a2c$5;
      return new $c_sci_Vector5(this.c, this.am, this.aG, this.an, a3c$4, this.ao, this.aI, this.ap, this.a7, this.aa, this.a9, this.a8, this.e, this.f);
    } else if ((index >= this.am)) {
      var io$4 = ((index - this.am) | 0);
      var a2$6 = this.aG;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.d();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.d();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.c, this.am, a2c$6, this.an, this.aH, this.ao, this.aI, this.ap, this.a7, this.aa, this.a9, this.a8, this.e, this.f);
    } else {
      var a1$8 = this.c;
      var a1c$8 = a1$8.d();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.a7, this.aa, this.a9, this.a8, this.e, this.f);
    }
  } else {
    throw this.aE(index);
  }
});
$p.dB = (function(elem) {
  if ((this.e.a.length < 32)) {
    var suffix1$54 = $m_sci_VectorStatics$().eS(this.e, elem);
    var length0$54 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(this.c, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.a7, this.aa, this.a9, this.a8, suffix1$54, length0$54);
  } else if ((this.a8.a.length < 31)) {
    var suffix2$41 = $m_sci_VectorStatics$().u(this.a8, this.e);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$55 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(this.c, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.a7, this.aa, this.a9, suffix2$41, a, length0$55);
  } else if ((this.a9.a.length < 31)) {
    var suffix3$29 = $m_sci_VectorStatics$().u(this.a9, $m_sci_VectorStatics$().u(this.a8, this.e));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$56 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(this.c, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.a7, this.aa, suffix3$29, $m_sci_VectorStatics$().bm, a$1, length0$56);
  } else if ((this.aa.a.length < 31)) {
    var suffix4$12 = $m_sci_VectorStatics$().u(this.aa, $m_sci_VectorStatics$().u(this.a9, $m_sci_VectorStatics$().u(this.a8, this.e)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$57 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(this.c, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.a7, suffix4$12, $m_sci_VectorStatics$().cB, $m_sci_VectorStatics$().bm, a$2, length0$57);
  } else if ((this.a7.a.length < 30)) {
    var data5$13 = $m_sci_VectorStatics$().u(this.a7, $m_sci_VectorStatics$().u(this.aa, $m_sci_VectorStatics$().u(this.a9, $m_sci_VectorStatics$().u(this.a8, this.e))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$58 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(this.c, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, data5$13, $m_sci_VectorStatics$().eM, $m_sci_VectorStatics$().cB, $m_sci_VectorStatics$().bm, a$3, length0$58);
  } else {
    var $x_14 = this.c;
    var $x_13 = this.am;
    var $x_12 = this.aG;
    var $x_11 = this.an;
    var $x_10 = this.aH;
    var $x_9 = this.ao;
    var $x_8 = this.aI;
    var $x_7 = this.ap;
    var $x_6 = this.a7;
    var $x_5 = this.ap;
    var $x_4 = $m_sci_VectorStatics$().nB;
    var x = $m_sci_VectorStatics$().u(this.aa, $m_sci_VectorStatics$().u(this.a9, $m_sci_VectorStatics$().u(this.a8, this.e)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().eM;
    var $x_2 = $m_sci_VectorStatics$().cB;
    var $x_1 = $m_sci_VectorStatics$().bm;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.f) | 0));
  }
});
$p.cK = (function() {
  return 9;
});
$p.cJ = (function(idx) {
  switch (idx) {
    case 0: {
      return this.c;
      break;
    }
    case 1: {
      return this.aG;
      break;
    }
    case 2: {
      return this.aH;
      break;
    }
    case 3: {
      return this.aI;
      break;
    }
    case 4: {
      return this.a7;
      break;
    }
    case 5: {
      return this.aa;
      break;
    }
    case 6: {
      return this.a9;
      break;
    }
    case 7: {
      return this.a8;
      break;
    }
    case 8: {
      return this.e;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.n = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.ap) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a7.a.length) ? this.a7.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.aa.a.length) ? this.aa.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a9.a.length) ? this.a9.a[i3].a[i2].a[i1] : ((i2 < this.a8.a.length) ? this.a8.a[i2].a[i1] : this.e.a[i1]))));
    } else if ((index >= this.ao)) {
      var io$2 = ((index - this.ao) | 0);
      return this.aI.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.an)) {
      var io$3 = ((index - this.an) | 0);
      return this.aH.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.am)) {
      var io$4 = ((index - this.am) | 0);
      return this.aG.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.c.a[index];
    }
  } else {
    throw this.aE(index);
  }
});
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  gt: 1,
  V: 1,
  W: 1,
  N: 1,
  J: 1,
  x: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  u: 1,
  d: 1,
  t: 1,
  q: 1,
  F: 1,
  E: 1,
  y: 1,
  v: 1,
  L: 1,
  D: 1,
  p: 1,
  z: 1,
  G: 1,
  a: 1,
  C: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.c = null;
  this.e = null;
  this.f = 0;
  this.ab = 0;
  this.aq = null;
  this.ac = 0;
  this.ar = null;
  this.ad = 0;
  this.as = null;
  this.ae = 0;
  this.at = null;
  this.aj = 0;
  this.Y = null;
  this.a2 = null;
  this.a1 = null;
  this.a0 = null;
  this.Z = null;
  this.ab = len1;
  this.aq = prefix2;
  this.ac = len12;
  this.ar = prefix3;
  this.ad = len123;
  this.as = prefix4;
  this.ae = len1234;
  this.at = prefix5;
  this.aj = len12345;
  this.Y = data6;
  this.a2 = suffix5;
  this.a1 = suffix4;
  this.a0 = suffix3;
  this.Z = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.V = (function(index) {
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.aj) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.Y.a.length) ? this.Y.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a2.a.length) ? this.a2.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a1.a.length) ? this.a1.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a0.a.length) ? this.a0.a[i3].a[i2].a[i1] : ((i2 < this.Z.a.length) ? this.Z.a[i2].a[i1] : this.e.a[i1])))));
    } else if ((index >= this.ae)) {
      var io$2 = ((index - this.ae) | 0);
      return this.at.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ad)) {
      var io$3 = ((index - this.ad) | 0);
      return this.as.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.ac)) {
      var io$4 = ((index - this.ac) | 0);
      return this.ar.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.ab)) {
      var io$5 = ((index - this.ab) | 0);
      return this.aq.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.c.a[index];
    }
  } else {
    throw this.aE(index);
  }
});
$p.dK = (function(index, elem) {
  if (((index >= 0) && (index < this.f))) {
    if ((index >= this.aj)) {
      var io = ((index - this.aj) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.Y.a.length)) {
        var a6 = this.Y;
        var a6c = a6.d();
        var a5 = a6c.a[i6];
        var a5c = a5.d();
        var a4 = a5c.a[i5];
        var a4c = a4.d();
        var a3 = a4c.a[i4];
        var a3c = a3.d();
        var a2 = a3c.a[i3];
        var a2c = a2.d();
        var a1 = a2c.a[i2];
        var a1c = a1.d();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        a6c.a[i6] = a5c;
        return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.aj, a6c, this.a2, this.a1, this.a0, this.Z, this.e, this.f);
      } else if ((i5 < this.a2.a.length)) {
        var a5$1 = this.a2;
        var a5c$1 = a5$1.d();
        var a4$1 = a5c$1.a[i5];
        var a4c$1 = a4$1.d();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.d();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.d();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.d();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        a5c$1.a[i5] = a4c$1;
        return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.aj, this.Y, a5c$1, this.a1, this.a0, this.Z, this.e, this.f);
      } else if ((i4 < this.a1.a.length)) {
        var a4$2 = this.a1;
        var a4c$2 = a4$2.d();
        var a3$2 = a4c$2.a[i4];
        var a3c$2 = a3$2.d();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.d();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.d();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        a4c$2.a[i4] = a3c$2;
        return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.aj, this.Y, this.a2, a4c$2, this.a0, this.Z, this.e, this.f);
      } else if ((i3 < this.a0.a.length)) {
        var a3$3 = this.a0;
        var a3c$3 = a3$3.d();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.d();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.d();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.aj, this.Y, this.a2, this.a1, a3c$3, this.Z, this.e, this.f);
      } else if ((i2 < this.Z.a.length)) {
        var a2$4 = this.Z;
        var a2c$4 = a2$4.d();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.d();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.aj, this.Y, this.a2, this.a1, this.a0, a2c$4, this.e, this.f);
      } else {
        var a1$5 = this.e;
        var a1c$5 = a1$5.d();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.aj, this.Y, this.a2, this.a1, this.a0, this.Z, a1c$5, this.f);
      }
    } else if ((index >= this.ae)) {
      var io$2 = ((index - this.ae) | 0);
      var a5$2 = this.at;
      var idx5 = ((io$2 >>> 20) | 0);
      var idx4 = (31 & ((io$2 >>> 15) | 0));
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a5c$2 = a5$2.d();
      var a4$3 = a5c$2.a[idx5];
      var a4c$3 = a4$3.d();
      var a3$4 = a4c$3.a[idx4];
      var a3c$4 = a3$4.d();
      var a2$5 = a3c$4.a[idx3];
      var a2c$5 = a2$5.d();
      var a1$6 = a2c$5.a[idx2];
      var a1c$6 = a1$6.d();
      a1c$6.a[idx1] = elem;
      a2c$5.a[idx2] = a1c$6;
      a3c$4.a[idx3] = a2c$5;
      a4c$3.a[idx4] = a3c$4;
      a5c$2.a[idx5] = a4c$3;
      return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, a5c$2, this.aj, this.Y, this.a2, this.a1, this.a0, this.Z, this.e, this.f);
    } else if ((index >= this.ad)) {
      var io$3 = ((index - this.ad) | 0);
      var a4$4 = this.as;
      var idx4$1 = ((io$3 >>> 15) | 0);
      var idx3$1 = (31 & ((io$3 >>> 10) | 0));
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a4c$4 = a4$4.d();
      var a3$5 = a4c$4.a[idx4$1];
      var a3c$5 = a3$5.d();
      var a2$6 = a3c$5.a[idx3$1];
      var a2c$6 = a2$6.d();
      var a1$7 = a2c$6.a[idx2$1];
      var a1c$7 = a1$7.d();
      a1c$7.a[idx1$1] = elem;
      a2c$6.a[idx2$1] = a1c$7;
      a3c$5.a[idx3$1] = a2c$6;
      a4c$4.a[idx4$1] = a3c$5;
      return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, this.ar, this.ad, a4c$4, this.ae, this.at, this.aj, this.Y, this.a2, this.a1, this.a0, this.Z, this.e, this.f);
    } else if ((index >= this.ac)) {
      var io$4 = ((index - this.ac) | 0);
      var a3$6 = this.ar;
      var idx3$2 = ((io$4 >>> 10) | 0);
      var idx2$2 = (31 & ((io$4 >>> 5) | 0));
      var idx1$2 = (31 & io$4);
      var a3c$6 = a3$6.d();
      var a2$7 = a3c$6.a[idx3$2];
      var a2c$7 = a2$7.d();
      var a1$8 = a2c$7.a[idx2$2];
      var a1c$8 = a1$8.d();
      a1c$8.a[idx1$2] = elem;
      a2c$7.a[idx2$2] = a1c$8;
      a3c$6.a[idx3$2] = a2c$7;
      return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, a3c$6, this.ad, this.as, this.ae, this.at, this.aj, this.Y, this.a2, this.a1, this.a0, this.Z, this.e, this.f);
    } else if ((index >= this.ab)) {
      var io$5 = ((index - this.ab) | 0);
      var a2$8 = this.aq;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.d();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.d();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.c, this.ab, a2c$8, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.aj, this.Y, this.a2, this.a1, this.a0, this.Z, this.e, this.f);
    } else {
      var a1$10 = this.c;
      var a1c$10 = a1$10.d();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.aj, this.Y, this.a2, this.a1, this.a0, this.Z, this.e, this.f);
    }
  } else {
    throw this.aE(index);
  }
});
$p.dB = (function(elem) {
  if ((this.e.a.length < 32)) {
    var suffix1$79 = $m_sci_VectorStatics$().eS(this.e, elem);
    var length0$79 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.aj, this.Y, this.a2, this.a1, this.a0, this.Z, suffix1$79, length0$79);
  } else if ((this.Z.a.length < 31)) {
    var suffix2$63 = $m_sci_VectorStatics$().u(this.Z, this.e);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$80 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.aj, this.Y, this.a2, this.a1, this.a0, suffix2$63, a, length0$80);
  } else if ((this.a0.a.length < 31)) {
    var suffix3$52 = $m_sci_VectorStatics$().u(this.a0, $m_sci_VectorStatics$().u(this.Z, this.e));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$81 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.aj, this.Y, this.a2, this.a1, suffix3$52, $m_sci_VectorStatics$().bm, a$1, length0$81);
  } else if ((this.a1.a.length < 31)) {
    var suffix4$36 = $m_sci_VectorStatics$().u(this.a1, $m_sci_VectorStatics$().u(this.a0, $m_sci_VectorStatics$().u(this.Z, this.e)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$82 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.aj, this.Y, this.a2, suffix4$36, $m_sci_VectorStatics$().cB, $m_sci_VectorStatics$().bm, a$2, length0$82);
  } else if ((this.a2.a.length < 31)) {
    var suffix5$15 = $m_sci_VectorStatics$().u(this.a2, $m_sci_VectorStatics$().u(this.a1, $m_sci_VectorStatics$().u(this.a0, $m_sci_VectorStatics$().u(this.Z, this.e))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$83 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.aj, this.Y, suffix5$15, $m_sci_VectorStatics$().eM, $m_sci_VectorStatics$().cB, $m_sci_VectorStatics$().bm, a$3, length0$83);
  } else if ((this.Y.a.length < 62)) {
    var data6$16 = $m_sci_VectorStatics$().u(this.Y, $m_sci_VectorStatics$().u(this.a2, $m_sci_VectorStatics$().u(this.a1, $m_sci_VectorStatics$().u(this.a0, $m_sci_VectorStatics$().u(this.Z, this.e)))));
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var length0$84 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(this.c, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.aj, data6$16, $m_sci_VectorStatics$().jO, $m_sci_VectorStatics$().eM, $m_sci_VectorStatics$().cB, $m_sci_VectorStatics$().bm, a$4, length0$84);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.cK = (function() {
  return 11;
});
$p.cJ = (function(idx) {
  switch (idx) {
    case 0: {
      return this.c;
      break;
    }
    case 1: {
      return this.aq;
      break;
    }
    case 2: {
      return this.ar;
      break;
    }
    case 3: {
      return this.as;
      break;
    }
    case 4: {
      return this.at;
      break;
    }
    case 5: {
      return this.Y;
      break;
    }
    case 6: {
      return this.a2;
      break;
    }
    case 7: {
      return this.a1;
      break;
    }
    case 8: {
      return this.a0;
      break;
    }
    case 9: {
      return this.Z;
      break;
    }
    case 10: {
      return this.e;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.n = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.aj) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.Y.a.length) ? this.Y.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a2.a.length) ? this.a2.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a1.a.length) ? this.a1.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a0.a.length) ? this.a0.a[i3].a[i2].a[i1] : ((i2 < this.Z.a.length) ? this.Z.a[i2].a[i1] : this.e.a[i1])))));
    } else if ((index >= this.ae)) {
      var io$2 = ((index - this.ae) | 0);
      return this.at.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ad)) {
      var io$3 = ((index - this.ad) | 0);
      return this.as.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.ac)) {
      var io$4 = ((index - this.ac) | 0);
      return this.ar.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.ab)) {
      var io$5 = ((index - this.ab) | 0);
      return this.aq.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.c.a[index];
    }
  } else {
    throw this.aE(index);
  }
});
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  gu: 1,
  V: 1,
  W: 1,
  N: 1,
  J: 1,
  x: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  u: 1,
  d: 1,
  t: 1,
  q: 1,
  F: 1,
  E: 1,
  y: 1,
  v: 1,
  L: 1,
  D: 1,
  p: 1,
  z: 1,
  G: 1,
  a: 1,
  C: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.bN = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.bN = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.e3 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.eg = (function(size) {
});
$p.B = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.dG = (function(len) {
  var x = this.bN.G();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.dJ = (function() {
  return "IndexedSeq";
});
$p.G = (function() {
  return this.bN.G();
});
$p.Q = (function() {
  return this.bN.G();
});
$p.pF = (function(x) {
  var this$1 = this.bN;
  var str = ("" + $cToS(x));
  this$1.K = (this$1.K + str);
  return this;
});
$p.q = (function() {
  return this.bN.K;
});
$p.oQ = (function(start, end) {
  return this.bN.oS(start, end);
});
$p.t = (function() {
  return (this.bN.G() === 0);
});
$p.V = (function(i) {
  return $bC(this.bN.o9(i));
});
$p.n = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.bN.o9(i));
});
$p.e5 = (function(elem) {
  return this.pF($uC(elem));
});
$p.ee = (function() {
  return this.bN.K;
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  gS: 1,
  bC: 1,
  x: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  u: 1,
  d: 1,
  t: 1,
  ai: 1,
  w: 1,
  ah: 1,
  bI: 1,
  bH: 1,
  Y: 1,
  Z: 1,
  X: 1,
  aj: 1,
  y: 1,
  v: 1,
  bG: 1,
  bF: 1,
  am: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gM)));
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gO)));
}
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.e2 = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.e2 = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.eg = (function(size) {
});
$p.dJ = (function() {
  return "IndexedSeq";
});
$p.B = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.dG = (function(len) {
  var x = (this.e2.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.V = (function(index) {
  return this.e2[index];
});
$p.G = (function() {
  return (this.e2.length | 0);
});
$p.Q = (function() {
  return (this.e2.length | 0);
});
$p.dD = (function() {
  return "WrappedArray";
});
$p.ee = (function() {
  return this;
});
$p.e5 = (function(elem) {
  this.e2.push(elem);
  return this;
});
$p.n = (function(v1) {
  var index = (v1 | 0);
  return this.e2[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  hE: 1,
  gy: 1,
  bC: 1,
  x: 1,
  m: 1,
  b: 1,
  c: 1,
  l: 1,
  k: 1,
  j: 1,
  h: 1,
  n: 1,
  u: 1,
  d: 1,
  t: 1,
  ai: 1,
  w: 1,
  ah: 1,
  bI: 1,
  bH: 1,
  Y: 1,
  Z: 1,
  aF: 1,
  gB: 1,
  z: 1,
  p: 1,
  bF: 1,
  y: 1,
  v: 1,
  bG: 1,
  gL: 1,
  X: 1,
  a: 1
}));
$s_Lorg_loveroo_webgl_main__main__AT__V(new ($d_T.r().C)([]));
//# sourceMappingURL=main.js.map
