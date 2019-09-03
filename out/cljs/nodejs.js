// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__552__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__553__i = 0, G__553__a = new Array(arguments.length -  0);
while (G__553__i < G__553__a.length) {G__553__a[G__553__i] = arguments[G__553__i + 0]; ++G__553__i;}
  args = new cljs.core.IndexedSeq(G__553__a,0,null);
} 
return G__552__delegate.call(this,args);};
G__552.cljs$lang$maxFixedArity = 0;
G__552.cljs$lang$applyTo = (function (arglist__554){
var args = cljs.core.seq(arglist__554);
return G__552__delegate(args);
});
G__552.cljs$core$IFn$_invoke$arity$variadic = G__552__delegate;
return G__552;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__555__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__555 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__556__i = 0, G__556__a = new Array(arguments.length -  0);
while (G__556__i < G__556__a.length) {G__556__a[G__556__i] = arguments[G__556__i + 0]; ++G__556__i;}
  args = new cljs.core.IndexedSeq(G__556__a,0,null);
} 
return G__555__delegate.call(this,args);};
G__555.cljs$lang$maxFixedArity = 0;
G__555.cljs$lang$applyTo = (function (arglist__557){
var args = cljs.core.seq(arglist__557);
return G__555__delegate(args);
});
G__555.cljs$core$IFn$_invoke$arity$variadic = G__555__delegate;
return G__555;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
