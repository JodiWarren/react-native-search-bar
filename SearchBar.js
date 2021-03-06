var NativeModules, PropTypes, RNSearchBar, React, ReactNative, SearchBar, createReactClass;

React = require('react');

ReactNative = require('react-native');

RNSearchBar = ReactNative.requireNativeComponent('RNSearchBar', null);

PropTypes = require('prop-types');

NativeModules = ReactNative.NativeModules;

createReactClass = require('create-react-class');

SearchBar = createReactClass({
  propTypes: {
    placeholder: PropTypes.string,
    text: PropTypes.string,
    barTintColor: PropTypes.string,
    tintColor: PropTypes.string,
    textColor: PropTypes.string,
    textFieldBackgroundColor: PropTypes.string,
    showsCancelButton: PropTypes.bool,
    onChange: PropTypes.func,
    onChangeText: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onSearchButtonPress: PropTypes.func,
    onCancelButtonPress: PropTypes.func,
    enablesReturnKeyAutomatically: PropTypes.bool,
    hideBackground: PropTypes.bool,
    barStyle: PropTypes.oneOf(['default', 'black']),
    searchBarStyle: PropTypes.oneOf(['default', 'prominent', 'minimal']),
    editable: PropTypes.bool,
    keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search']),
    keyboardAppearance: PropTypes.oneOf(['default', 'light', 'dark']),
    returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo']),
    autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
    autoCorrect: PropTypes.bool,
    spellCheck: PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      barStyle: 'default',
      searchBarStyle: 'default',
      editable: true
    };
  },
  _onChange: function(e) {
    var base, base1;
    if (typeof (base = this.props).onChange === "function") {
      base.onChange(e);
    }
    return typeof (base1 = this.props).onChangeText === "function" ? base1.onChangeText(e.nativeEvent.text) : void 0;
  },
  _onPress: function(e) {
    var base, base1, button;
    button = e.nativeEvent.button;
    if (button === 'search') {
      return typeof (base = this.props).onSearchButtonPress === "function" ? base.onSearchButtonPress(e.nativeEvent.searchText) : void 0;
    } else if (button === 'cancel') {
      return typeof (base1 = this.props).onCancelButtonPress === "function" ? base1.onCancelButtonPress() : void 0;
    }
  },
  blur: function() {
    return NativeModules.RNSearchBarManager.blur(ReactNative.findNodeHandle(this));
  },
  focus: function() {
    return NativeModules.RNSearchBarManager.focus(ReactNative.findNodeHandle(this));
  },
  unFocus: function() {
    return NativeModules.RNSearchBarManager.unFocus(ReactNative.findNodeHandle(this));
  },
  componentWillReceiveProps (nextProps) {
    if (nextProps.showsCancelButton !== this.props.showsCancelButton) {
      NativeModules.RNSearchBarManager.toggleCancelButton(ReactNative.findNodeHandle(this), nextProps.showsCancelButton);
    }
  },
  render: function() {
    return <RNSearchBar
      style={{height: NativeModules.RNSearchBarManager.ComponentHeight}}
      onChange={this._onChange}
      onPress={this._onPress}
      {...this.props}
    />;
  }
});

module.exports = SearchBar;
