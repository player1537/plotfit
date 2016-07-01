import { getXScaleFunction, getYScaleFunction,
         getFittingFunction } from './getters';
import { SET_XSCALE, SET_YSCALE, SET_FITTING } from './mutation-types';

export function setXScale({ dispatch, state }, { target: { value } }) {
  var { expr, scope, isLog } = value,
      scale = getXScaleFunction(state),
      oldScope = scale.scope(),
      variables = scale.variables(expr),
      newScopeMap = {},
      newScope = [];

  for (var i=0; i<variables.length; ++i) {
    newScopeMap[variables[i]] = 0.0;
  }

  for (i=0; i<oldScope.length; ++i) {
    if (variables.includes(oldScope[i].key)) {
      newScopeMap[oldScope[i].key] = oldScope[i].value;
    }
  }

  for (i=0; i<scope.length; ++i) {
    if (variables.includes(scope[i].key)) {
      newScopeMap[scope[i].key] = scope[i].value;
    }
  }

  for (var key in newScopeMap) {
    newScope.push({ key, value: newScopeMap[key] });
  }

  dispatch(SET_XSCALE, { expr, isLog, scope: newScope });
};


export function setYScale({ dispatch, state }, { target: { value } }) {
  var { expr, scope, isLog } = value,
      scale = getYScaleFunction(state),
      oldScope = scale.scope(),
      variables = scale.variables(expr),
      newScopeMap = {},
      newScope = [];

  for (var i=0; i<variables.length; ++i) {
    newScopeMap[variables[i]] = 0.0;
  }

  for (i=0; i<oldScope.length; ++i) {
    if (variables.includes(oldScope[i].key)) {
      newScopeMap[oldScope[i].key] = oldScope[i].value;
    }
  }

  for (i=0; i<scope.length; ++i) {
    if (variables.includes(scope[i].key)) {
      newScopeMap[scope[i].key] = scope[i].value;
    }
  }

  for (var key in newScopeMap) {
    newScope.push({ key, value: newScopeMap[key] });
  }

  dispatch(SET_YSCALE, { expr, isLog, scope: newScope });
};

export function setFitting({ dispatch, state }, { target: { value } }) {
  var { expr, scope, isFitting } = value,
      fitting = getFittingFunction(state),
      oldScope = fitting.scope(),
      variables = fitting.variables(expr),
      newScopeMap = {},
      newScope = [];

  for (var i=0; i<variables.length; ++i) {
    newScopeMap[variables[i]] = 0.0;
  }

  for (i=0; i<oldScope.length; ++i) {
    if (variables.includes(oldScope[i].key)) {
      newScopeMap[oldScope[i].key] = oldScope[i].value;
    }
  }

  for (i=0; i<scope.length; ++i) {
    if (variables.includes(scope[i].key)) {
      newScopeMap[scope[i].key] = scope[i].value;
    }
  }

  for (var key in newScopeMap) {
    newScope.push({ key, value: newScopeMap[key] });
  }

  dispatch(SET_FITTING, { expr, isFitting, scope: newScope });
};

export function fitFittingFunction({ dispatch, state }, _) {
  getFittingFunction(state).recalculate(function(fitter) {
    dispatch('FITTING_SET_SCOPE', fitter.scope());
  });
};



export function setSidebarLeft({ dispatch }, _) {
  dispatch('SIDEBAR_SET_LEFT', _);
};

export function setSidebarRight({ dispatch }, _) {
  dispatch('SIDEBAR_SET_RIGHT', _);
};
