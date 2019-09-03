goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__719__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__720__i = 0, G__720__a = new Array(arguments.length -  0);
while (G__720__i < G__720__a.length) {G__720__a[G__720__i] = arguments[G__720__i + 0]; ++G__720__i;}
  args = new cljs.core.IndexedSeq(G__720__a,0,null);
} 
return G__719__delegate.call(this,args);};
G__719.cljs$lang$maxFixedArity = 0;
G__719.cljs$lang$applyTo = (function (arglist__721){
var args = cljs.core.seq(arglist__721);
return G__719__delegate(args);
});
G__719.cljs$core$IFn$_invoke$arity$variadic = G__719__delegate;
return G__719;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__722__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__723__i = 0, G__723__a = new Array(arguments.length -  0);
while (G__723__i < G__723__a.length) {G__723__a[G__723__i] = arguments[G__723__i + 0]; ++G__723__i;}
  args = new cljs.core.IndexedSeq(G__723__a,0,null);
} 
return G__722__delegate.call(this,args);};
G__722.cljs$lang$maxFixedArity = 0;
G__722.cljs$lang$applyTo = (function (arglist__724){
var args = cljs.core.seq(arglist__724);
return G__722__delegate(args);
});
G__722.cljs$core$IFn$_invoke$arity$variadic = G__722__delegate;
return G__722;
})()
);

return null;
});
