var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DragIcon = function DragIcon(props) {
    return React.createElement("img", Object.assign({}, props, { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEXklEQVR4Xu2bx24VMRSGv7Cii/oE1A11QVnSJZpASDwGEiABj0DnQUCUQEQHsQHBDggs6FvqBggriv7IEyaTO+NybWeulNlF1+Wcz8f2KU4f4/MtBs4BG4A+4AFwAHiVWxxNnvtbDdwG5lQm/gpsAp7mFCg3ACl/B5hdo6QgbASe5YKQE8Aq4G6D8oXOWSHkAiDltfJVs69b6C9mOyS3hBwAfJUvoGSBkBrASmP2ritftQhB0JnwPNWZkBJAt8qXLSEZhFQApLz2/NxIK/fZnAnRLSEFADk5DyMqXzAUhPXA20hQh4dJAeAqsDOmkKWxrgB7Yo6dAsAQMCWmkKWxfgLTY46dAsAPYFpMIUtjaewZMcdOAUBmurtGSO3j+RYFmtpcBPa1HcAS4FEHl/ejOckHLQosN75DFZR8gnW9cAhKv4XAcWArMAm4CRwGPgB/LQBklQuA08AW4A9wHTgGvI+5+qluAZuMLgBsY0T7PcUZYBNuAoDDFrBBjPb7hAU4opR7e8ac4jqU5OcfCczhpdgCS4GTRj4tqlJuh1xuDBcLqAtsvgFrXCapQI4NQIvzGJhVmccpgLIBsEV154H9jlZUNIsN4FJDfGCF0ATAJZ7/DswcZwA217sxqVIHwEV56R0SnMS2AJfgqxZCJwA+ObwQ3zw2gH5gl4MVdswxVgH4KC/fXr653FufLzYAuc2KPWxBlmQcA6EMoK5i00k5HS4qa73w0dy0jQ1AwyqAuueYhRoFoQBgq9gE6NnqLiPFFwHQPSoTCk1dt1rTBuEEYa0ADADbe1WLLuXuFwCXa6TLeVrbfUgAfgGTWytiWsGGAdwAtqWdp7WjDxSHYIpCRmu1NoLpKl9XXIMrTCIyVimrF5RXvXGw7Aj5QLBGWQ0EUjhCvrIPKy8Zq66wj0cVWquLDcCnFjnGg+0UDBV5+XkOdnwZ2OvQrtwkNoBrwA4HGT6Ztwaj3Pe6cNgVQhvCYZdrvKPynbZAGaQLhF5IiNQqbwOg35eZKKtuO7QhJXahoV4o5RW1vqzbIracYAFBz9uq8baCCSVF3znsv5RngPIBTzoEc8pX6LSvVd7FAgrBNYnS4ptNbU9pZ6XF33gqr+axD0GNqVrkKSOf/r5VqkU2iuhiAQE6NnZJASBYxgkAwejCO05YgIVdVqtMNdki4ETpgYRqiQdNGc3FAuTenjW1vt/mgcXRwEM3+yGoQqXC6+qTePnhukVs/w9QFGWqkalqkUrDvw7ffWN7prCApkKFfAdbyN3UpifeCSo+mBpzlUpj9cQzuZRJ1p4A0PROsFvDCKlFZj8EfWp1PkBCa5HZAbhEkT6Kq601qvMdsGif4hYoxraF0q4yJ1PeJxp0FbbaziWp0jR2YzIjVKhyv5QWUMwTCiG58jksoAzBtX6vPt28P/AyjBwW4Ashm/I5LaCAYCtgSPmRooXXUgY2zmkBNgjZlR8PCyggyFlSuKvoUN998+/zvgnWwHX/3+0fUHrv1bTPYJQAAAAASUVORK5CYII=" }));
};
var DeleteIcon = function DeleteIcon(props) {
    return React.createElement("img", Object.assign({}, props, { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDk2IDk2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZS8+PGc+PHBhdGggZD0iTTQ4LDBBNDgsNDgsMCwxLDAsOTYsNDgsNDguMDUxMiw0OC4wNTEyLDAsMCwwLDQ4LDBabTAsODRBMzYsMzYsMCwxLDEsODQsNDgsMzYuMDM5MywzNi4wMzkzLDAsMCwxLDQ4LDg0WiIvPjxwYXRoIGQ9Ik02NC4yNDIyLDMxLjc1NzhhNS45OTc5LDUuOTk3OSwwLDAsMC04LjQ4NDQsMEw0OCwzOS41MTU2bC03Ljc1NzgtNy43NTc4YTUuOTk5NCw1Ljk5OTQsMCwwLDAtOC40ODQ0LDguNDg0NEwzOS41MTU2LDQ4bC03Ljc1NzgsNy43NTc4YTUuOTk5NCw1Ljk5OTQsMCwxLDAsOC40ODQ0LDguNDg0NEw0OCw1Ni40ODQ0bDcuNzU3OCw3Ljc1NzhhNS45OTk0LDUuOTk5NCwwLDAsMCw4LjQ4NDQtOC40ODQ0TDU2LjQ4NDQsNDhsNy43NTc4LTcuNzU3OEE1Ljk5NzksNS45OTc5LDAsMCwwLDY0LjI0MjIsMzEuNzU3OFoiLz48L2c+PC9zdmc+" }));
};
var TransIcon = function TransIcon(props) {
    return React.createElement("img", Object.assign({}, props, { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB3aWR0aD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0OHY0OEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0yNS43NCAzMC4xNWwtNS4wOC01LjAyLjA2LS4wNmMzLjQ4LTMuODggNS45Ni04LjM0IDcuNDItMTMuMDZIMzRWOEgyMFY0aC00djRIMnYzLjk4aDIyLjM0QzIyLjk5IDE1Ljg0IDIwLjg4IDE5LjUgMTggMjIuN2MtMS44Ni0yLjA3LTMuNC00LjMyLTQuNjItNi43aC00YzEuNDYgMy4yNiAzLjQ2IDYuMzQgNS45NiA5LjEyTDUuMTcgMzUuMTcgOCAzOGwxMC0xMCA2LjIyIDYuMjIgMS41Mi00LjA3ek0zNyAyMGgtNGwtOSAyNGg0bDIuMjUtNmg5LjVMNDIgNDRoNGwtOS0yNHptLTUuMjUgMTRMMzUgMjUuMzMgMzguMjUgMzRoLTYuNXoiLz48L3N2Zz4=" }));
};

var DEFAULT_SETTINGS = {
    dir: "ltr",
    lng: "ar"
};

var ContentEditable = function (_React$Component) {
    _inherits(ContentEditable, _React$Component);

    function ContentEditable() {
        _classCallCheck(this, ContentEditable);

        var _this = _possibleConstructorReturn(this, (ContentEditable.__proto__ || Object.getPrototypeOf(ContentEditable)).call(this));

        _this.emitChange = _this.emitChange.bind(_this);
        return _this;
    }

    _createClass(ContentEditable, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                tagName = _props.tagName,
                html = _props.html,
                onChange = _props.onChange,
                props = _objectWithoutProperties(_props, ["tagName", "html", "onChange"]);

            return React.createElement(tagName || 'div', Object.assign({}, props, {
                ref: function ref(e) {
                    return _this2.htmlEl = e;
                },
                onInput: this.emitChange,
                onBlur: this.props.onBlur || this.emitChange,
                contentEditable: !this.props.disabled,
                dangerouslySetInnerHTML: { __html: html }
            }), this.props.children);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            // We need not rerender if the change of props simply reflects the user's
            // edits. Rerendering in this case would make the cursor/caret jump.
            return (
                // Rerender if there is no element yet... (somehow?)
                !this.htmlEl
                // ...or if html really changed... (programmatically, not by user edit)
                || nextProps.html !== this.htmlEl.innerHTML && nextProps.html !== this.props.html
                // ...or if editing is enabled or disabled.
                || this.props.disabled !== nextProps.disabled
            );
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            if (this.htmlEl && this.props.html !== this.htmlEl.innerHTML) {
                // Perhaps React (whose VDOM gets outdated because we often prevent
                // rerendering) did not update the DOM. So we update it manually now.
                this.htmlEl.innerHTML = this.props.html;
            }
        }
    }, {
        key: "emitChange",
        value: function emitChange(evt) {
            if (!this.htmlEl) return;
            var html = this.htmlEl.innerHTML;
            if (this.props.onChange && html !== this.lastHtml) {
                evt.target = { value: html };
                this.props.onChange(evt);
            }
            this.lastHtml = html;
        }
    }]);

    return ContentEditable;
}(React.Component);

var Header = function Header() {
    return React.createElement(
        "div",
        null,
        "HEADER"
    );
};

var Footer = function Footer() {
    return React.createElement(
        "div",
        null,
        "Footer"
    );
};

var NewNote = function (_React$Component2) {
    _inherits(NewNote, _React$Component2);

    function NewNote(props) {
        _classCallCheck(this, NewNote);

        var _this3 = _possibleConstructorReturn(this, (NewNote.__proto__ || Object.getPrototypeOf(NewNote)).call(this, props));

        _this3.save = function () {
            var text = _this3.state.text;

            _this3.props.addNote(text);
        };

        _this3.state = { text: "" };
        return _this3;
    }

    _createClass(NewNote, [{
        key: "render",
        value: function render() {
            var _this4 = this;

            return React.createElement(
                "div",
                { className: "note-new" },
                React.createElement("textarea", { onChange: function onChange(e) {
                        return _this4.setState({ text: e.target.value });
                    } }),
                React.createElement(
                    "button",
                    { onClick: this.save },
                    "save"
                )
            );
        }
    }]);

    return NewNote;
}(React.Component);

var Menu = function (_React$Component3) {
    _inherits(Menu, _React$Component3);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this5 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this5.onDirChange = function (dir) {
            var s = Object.assign({}, _this5.state, { dir: dir });
            LocalStorage.set("settings", s, true);
            _this5.setState(s);
            document.body.setAttribute("dir", dir);
        };

        _this5.state = Object.assign({}, DEFAULT_SETTINGS);
        return _this5;
    }

    _createClass(Menu, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this6 = this;

            console.error("MOUT");
            LocalStorage.get("settings", function (settings) {
                if (settings) {
                    _this6.setState(settings);
                    var dir = settings.dir;

                    document.body.setAttribute("dir", dir);
                }
            }, true);
        }
    }, {
        key: "render",
        value: function render() {
            var _this7 = this;

            var dir = this.state.dir;


            return React.createElement(
                "div",
                { className: "menu" },
                React.createElement(
                    "div",
                    { className: "menu-option" },
                    React.createElement(
                        "span",
                        null,
                        "Direction"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "span",
                        null,
                        "RTL: ",
                        React.createElement("input", { type: "radio", checked: dir === "rtl", value: "rtl", onChange: function onChange(ev) {
                                return _this7.onDirChange(ev.target.value);
                            } })
                    ),
                    React.createElement(
                        "span",
                        null,
                        "LTR: ",
                        React.createElement("input", { type: "radio", checked: dir !== "rtl", value: "ltr", onChange: function onChange(ev) {
                                return _this7.onDirChange(ev.target.value);
                            } })
                    )
                )
            );
        }
    }]);

    return Menu;
}(React.Component);

var Body = function (_React$Component4) {
    _inherits(Body, _React$Component4);

    function Body(props) {
        _classCallCheck(this, Body);

        var _this8 = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));

        _this8.addNote = function (text) {
            var notes = _this8.state.notes;

            var n = [].concat(_toConsumableArray(notes), [{ _id: notes.length, text: text }]);
            _this8.setState({ notes: n });
            LocalStorage.set("notes", n, true);
        };

        _this8.deleteNote = function (_id) {
            var notes = _this8.state.notes;

            var n = notes.filter(function (note) {
                return note._id !== _id;
            });
            _this8.setState({ notes: n });
            LocalStorage.set("notes", n, true);
        };

        _this8.editNote = function (_id, text) {
            var notes = _this8.state.notes;

            var n = notes.reduce(function (acc, note) {
                if (note._id === _id) {
                    note = Object.assign({}, note, { text: text });
                }
                acc.push(note);
                return acc;
            }, []);
            _this8.setState({ notes: n });
            LocalStorage.set("notes", n, true);
        };

        _this8.translateNote = function (_ref) {
            var _id = _ref._id,
                text = _ref.text;

            TranslationApi.trans(text, function (res) {
                _this8.editNote(_id, res.translatedText);
            });
        };

        _this8.copyNotes = function () {
            var notes = _this8.state.notes;

            Utils.copy(notes.map(function (_ref2) {
                var text = _ref2.text;
                return text;
            }).join("\n"));
        };

        _this8.state = { notes: [] };
        return _this8;
    }

    _createClass(Body, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this9 = this;

            console.error("MOUT");
            LocalStorage.get("notes", function (notes) {
                _this9.setState({ notes: notes || [] });
            }, true);

            var list = document.querySelector("ul.notes");

            new Sortable(list, {
                handle: '.handle',
                animation: 150,
                ghostClass: 'blue-background-class',
                onEnd: function onEnd(evt) {
                    var notes = [].concat(_toConsumableArray(_this9.state.notes));
                    var tmp = notes[evt.oldIndex];
                    notes[evt.oldIndex] = notes[evt.newIndex];
                    notes[evt.newIndex] = tmp;
                    //this.setState({notes});
                    LocalStorage.set("notes", notes, true);
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this10 = this;

            var notes = this.state.notes;


            return React.createElement(
                "div",
                { className: "body" },
                React.createElement(
                    "ul",
                    { className: "notes" },
                    notes.map(function (note) {
                        return React.createElement(
                            "li",
                            { key: note._id, id: "note_" + note._id },
                            React.createElement(DragIcon, { className: "handle" }),
                            React.createElement(ContentEditable, { onChange: function onChange(ev) {
                                    return _this10.editNote(note._id, ev.target.value);
                                }, html: note.text }),
                            React.createElement(
                                "span",
                                { className: "options" },
                                React.createElement(DeleteIcon, { className: "delete-icon", fill: "red", onClick: function onClick() {
                                        return _this10.deleteNote(note._id);
                                    } }),
                                React.createElement(TransIcon, { className: "trans-icon", fill: "red", onClick: function onClick() {
                                        return _this10.translateNote(note);
                                    } })
                            )
                        );
                    })
                ),
                React.createElement(
                    "div",
                    { className: "btn-groups" },
                    React.createElement(
                        "button",
                        { onClick: function onClick() {
                                return _this10.addNote("Click to edit");
                            } },
                        "+"
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.copyNotes },
                        "Copy"
                    )
                )
            );
        }
    }]);

    return Body;
}(React.Component);

var App = function (_React$Component5) {
    _inherits(App, _React$Component5);

    function App(props) {
        _classCallCheck(this, App);

        var _this11 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this11.state = { liked: false };
        return _this11;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(Menu, null),
                React.createElement(Body, null)
            );
        }
    }]);

    return App;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(App, null), domContainer);