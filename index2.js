var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}
var

Card = function (_React$Component) {_inherits(Card, _React$Component);function Card() {var _ref;var _temp, _this, _ret;_classCallCheck(this, Card);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.
    state = { expanded: false }, _this.
    randomNumber = Math.floor(Math.random() * 5) + 1, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(Card, [{ key: "render", value: function render()

    {var _this2 = this;
      return (
        React.createElement("div", {
            "class": "card card--" + this.randomNumber + " " + (
            this.state.expanded ? "card--expanded" : ""),

            onClick: function onClick() {
              _this2.setState({ expanded: !_this2.state.expanded });
            } },

          React.createElement("div", null,
            React.createElement("div", { className: "card__avatar" }),
            React.createElement("div", { className: "card__title" }),
            React.createElement("div", { className: "card__description" }))));



    } }]);return Card;}(React.Component);var


Grid = function (_React$Component2) {_inherits(Grid, _React$Component2);function Grid() {_classCallCheck(this, Grid);return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));}_createClass(Grid, [{ key: "componentDidMount", value: function componentDidMount()
    {
      // will automatically clean itself up when dom node is removed
      animateCSSGrid.wrapGrid(this.grid, { easing: 'backOut', stagger: 10, duration: 400 });
    } }, { key: "render", value: function render()

    {var _this4 = this;
      var classes = "grid";
      Object.keys(this.props.settings).
      filter(function (k) {return _this4.props.settings[k];}).
      forEach(function (k) {return classes += " " + k;});
      return (
        React.createElement("div", { className: classes, ref: function ref(el) {return _this4.grid = el;} },
          [].concat(_toConsumableArray(Array(10).keys())).map(function (i) {return React.createElement(Card, { key: i });})));


    } }]);return Grid;}(React.Component);var


GridContainer = function (_React$Component3) {_inherits(GridContainer, _React$Component3);function GridContainer() {var _ref2;var _temp2, _this5, _ret2;_classCallCheck(this, GridContainer);for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}return _ret2 = (_temp2 = (_this5 = _possibleConstructorReturn(this, (_ref2 = GridContainer.__proto__ || Object.getPrototypeOf(GridContainer)).call.apply(_ref2, [this].concat(args))), _this5), _this5.
    state = {
      "grid-gap": false,
      "grid-template-columns": false }, _temp2), _possibleConstructorReturn(_this5, _ret2);}_createClass(GridContainer, [{ key: "render", value: function render()


    {var _this6 = this;
      return (
        React.createElement("div", { className: "p-4" },
          React.createElement("a", { href: "https://github.com/aholachek/animate-css-grid" }, "animate-css-grid"),


          React.createElement("div", { className: "mb-4 pt-4" },
            Object.keys(this.state).map(function (k) {return (
                React.createElement("button", {
                    className: "btn",
                    onClick: function onClick() {return _this6.setState(_defineProperty({}, k, !_this6.state[k]));} }, "toggle ",

                  React.createElement("code", null, k)));})),



          React.createElement(Grid, { settings: this.state })));


    } }]);return GridContainer;}(React.Component);


ReactDOM.render(React.createElement(GridContainer, null), document.getElementById("main"));