"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    var impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Cliente);

    this.nombre = nombre;
    this.impuesto = {};
  }

  _createClass(Cliente, [{
    key: "getNombre",
    get: function get() {
      return this.nombre;
    }
  }, {
    key: "setNombre",
    set: function set(val) {
      this.nombre = val;
    }
  }, {
    key: "getImpuesto",
    get: function get() {
      return this.impuesto.impuesto;
    }
  }, {
    key: "calcImpuesto",
    value: // ((monto_bruto_anual − deducciones) * 21%)
    function calcImpuesto(montoBruto, deducciones) {
      var impuesto = (montoBruto - deducciones) * 0.21;
      if (!impuesto) return 0;
      this.impuesto = {
        impuesto: impuesto
      };
    }
  }]);

  return Cliente;
}();

;

var Impuestos = /*#__PURE__*/function () {
  function Impuestos(montoBruto, deducciones) {
    _classCallCheck(this, Impuestos);

    this.montoBruto = montoBruto;
    this.deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "getMontoBruto",
    get: function get() {
      return this.montoBruto;
    }
  }, {
    key: "setMontoBruto",
    set: function set(val) {
      return this.montoBruto = val;
    }
  }, {
    key: "getDeducciones",
    get: function get() {
      return this.deducciones;
    }
  }, {
    key: "setDeducciones",
    set: function set(val) {
      return this.deducciones = val;
    }
  }]);

  return Impuestos;
}();

;
var boton = document.getElementById("boton");
var nombre = document.getElementById("nombre");
var montoBruto = document.getElementById("montoBruto");
var deducciones = document.getElementById("deducciones");
var calculo = document.getElementById("calculo");
boton.addEventListener("click", function () {
  //Normalizaciones
  var nombreValor = nombre.value;
  var montoBrutoValor = Number(montoBruto.value);
  var deduccionesValor = Number(deducciones.value);

  if (!nombreValor || !montoBrutoValor || !deduccionesValor) {
    alert("Debe completar los campos");
    return;
  }

  var Cliente1 = new Cliente(nombreValor);
  var Impuesto1 = new Impuestos(montoBrutoValor, deduccionesValor);
  Cliente1.calcImpuesto(Impuesto1.getMontoBruto, Impuesto1.getDeducciones);
  calculo.innerHTML = "<h2>Los impuestos de don ".concat(Cliente1.nombre, " son de: ").concat(Math.round(Cliente1.getImpuesto), " CLP</h2>");
});