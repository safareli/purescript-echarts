var echarts = require("echarts");

exports.initImpl = function(el) {
    return function() {
        return echarts.init(el);
    };
};

exports.setOptionImpl = function(option) {
    return function(chart) {
        return function() {
            chart.setOption(option, false, false);
            return {};
        };
    };
};

exports.resetOptionImpl = function(option) {
    return function(chart) {
        return function() {
            chart.setOption(option, true, false);
            return {};
        };
    };
};

exports.resizeImpl = function(chart) {
    return function() {
        chart.resize();
        return {};
    };
};

exports.clearImpl = function(chart) {
    return function() {
        chart.clear();
        return {};
    };
};

exports.disposeImpl = function(chart) {
    return function() {
        chart.dispose();
        return {};
    };
};

exports.getOptionImpl = function(chart) {
    return function() {
        return chart.getOption();
    };
};
