// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('npm_force_resolutions.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('clojure.string');
goog.require('cognitect.transit');
npm_force_resolutions.core.node_slurp = (function npm_force_resolutions$core$node_slurp(path){
var fs = cljs.nodejs.require.call(null,"fs");
return fs.readFileSync(path,"utf8");
});
npm_force_resolutions.core.node_spit = (function npm_force_resolutions$core$node_spit(path,data){
var fs = cljs.nodejs.require.call(null,"fs");
return fs.writeFileSync(path,data);
});
npm_force_resolutions.core.read_json = (function npm_force_resolutions$core$read_json(path){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),clojure.string.replace.call(null,npm_force_resolutions.core.node_slurp.call(null,path),/\^/,"\\\\^"));
});
npm_force_resolutions.core.find_resolutions = (function npm_force_resolutions$core$find_resolutions(folder){
var package_json = npm_force_resolutions.core.read_json.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(folder),"/package.json"].join(''));
return cljs.core.get.call(null,package_json,"resolutions");
});
npm_force_resolutions.core.remove_from_requires = (function npm_force_resolutions$core$remove_from_requires(resolutions,dependency){
return cljs.core.update.call(null,dependency,"requires",(function (p1__703_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__703_SHARP_,cljs.core.keys.call(null,resolutions));
}));
});
npm_force_resolutions.core.map_vals = (function npm_force_resolutions$core$map_vals(f,m){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__704){
var vec__705 = p__704;
var k = cljs.core.nth.call(null,vec__705,(0),null);
var v = cljs.core.nth.call(null,vec__705,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,f.call(null,k,v)]);
}),m));
});
npm_force_resolutions.core.add_dependencies = (function npm_force_resolutions$core$add_dependencies(resolutions,dependency){
var required_dependencies = cljs.core.keys.call(null,cljs.core.get.call(null,dependency,"requires"));
var new_dependencies = cljs.core.select_keys.call(null,npm_force_resolutions.core.map_vals.call(null,((function (required_dependencies){
return (function (k,v){
return new cljs.core.PersistentArrayMap(null, 1, ["version",v], null);
});})(required_dependencies))
,resolutions),required_dependencies);
var with_deps = cljs.core.merge_with.call(null,cljs.core.into,dependency,new cljs.core.PersistentArrayMap(null, 1, ["dependencies",cljs.core.PersistentArrayMap.EMPTY], null));
return cljs.core.update.call(null,with_deps,"dependencies",((function (required_dependencies,new_dependencies,with_deps){
return (function (p1__708_SHARP_){
return cljs.core.conj.call(null,p1__708_SHARP_,new_dependencies);
});})(required_dependencies,new_dependencies,with_deps))
);
});
npm_force_resolutions.core.fix_existing_dependency = (function npm_force_resolutions$core$fix_existing_dependency(resolutions,key,dependency){
if(cljs.core.contains_QMARK_.call(null,resolutions,key)){
return cljs.core.conj.call(null,cljs.core.dissoc.call(null,dependency,"version","resolved","integrity","bundled"),new cljs.core.PersistentArrayMap(null, 1, ["version",cljs.core.get.call(null,resolutions,key)], null));
} else {
return dependency;
}
});
npm_force_resolutions.core.order_map = (function npm_force_resolutions$core$order_map(target){
return cljs.core.into.call(null,cljs.core.sorted_map_by.call(null,(function (key1,key2){
return cljs.core.compare.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key2], null));
})),target);
});
npm_force_resolutions.core.sort_or_remove_map = (function npm_force_resolutions$core$sort_or_remove_map(key,dependency){
if(cljs.core.map_QMARK_.call(null,cljs.core.get.call(null,dependency,key))){
return cljs.core.update.call(null,dependency,key,npm_force_resolutions.core.order_map);
} else {
return cljs.core.dissoc.call(null,dependency,key);
}
});
npm_force_resolutions.core.patch_dependency = (function npm_force_resolutions$core$patch_dependency(resolutions,key,dependency){
if(cljs.core.contains_QMARK_.call(null,dependency,"requires")){
return npm_force_resolutions.core.sort_or_remove_map.call(null,"requires",npm_force_resolutions.core.sort_or_remove_map.call(null,"dependencies",npm_force_resolutions.core.patch_all_dependencies.call(null,resolutions,npm_force_resolutions.core.fix_existing_dependency.call(null,resolutions,key,npm_force_resolutions.core.remove_from_requires.call(null,resolutions,npm_force_resolutions.core.add_dependencies.call(null,resolutions,dependency))))));
} else {
return npm_force_resolutions.core.fix_existing_dependency.call(null,resolutions,key,dependency);
}
});
npm_force_resolutions.core.patch_all_dependencies = (function npm_force_resolutions$core$patch_all_dependencies(resolutions,package_lock){
return cljs.core.update.call(null,package_lock,"dependencies",(function (dependencies){
return npm_force_resolutions.core.map_vals.call(null,(function (p1__709_SHARP_,p2__710_SHARP_){
return npm_force_resolutions.core.patch_dependency.call(null,resolutions,p1__709_SHARP_,p2__710_SHARP_);
}),dependencies);
}));
});
npm_force_resolutions.core.update_package_lock = (function npm_force_resolutions$core$update_package_lock(folder){
var package_lock = npm_force_resolutions.core.read_json.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(folder),"/package-lock.json"].join(''));
var resolutions = npm_force_resolutions.core.find_resolutions.call(null,folder);
return npm_force_resolutions.core.sort_or_remove_map.call(null,"dependencies",npm_force_resolutions.core.patch_all_dependencies.call(null,resolutions,package_lock));
});
npm_force_resolutions.core.indent_json = (function npm_force_resolutions$core$indent_json(json){
var json_format = cljs.nodejs.require.call(null,"json-format");
return clojure.string.replace.call(null,clojure.string.replace.call(null,json_format.call(null,JSON.parse(json),(function (){var obj712 = {"type":"space","size":(4)};
return obj712;
})()),/\\\\\^/,"^"),/ +\n/,"");
});
npm_force_resolutions.core.main = (function npm_force_resolutions$core$main(var_args){
var args__4502__auto__ = [];
var len__4499__auto___714 = arguments.length;
var i__4500__auto___715 = (0);
while(true){
if((i__4500__auto___715 < len__4499__auto___714)){
args__4502__auto__.push((arguments[i__4500__auto___715]));

var G__716 = (i__4500__auto___715 + (1));
i__4500__auto___715 = G__716;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return npm_force_resolutions.core.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

npm_force_resolutions.core.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var folder = (function (){var or__3922__auto__ = cljs.core.first.call(null,args);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ".";
}
})();
var package_lock = npm_force_resolutions.core.update_package_lock.call(null,folder);
var package_lock_json = cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531)),package_lock);
return npm_force_resolutions.core.node_spit.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(folder),"/package-lock.json"].join(''),npm_force_resolutions.core.indent_json.call(null,package_lock_json));
});

npm_force_resolutions.core.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
npm_force_resolutions.core.main.cljs$lang$applyTo = (function (seq713){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq713));
});

cljs.core._STAR_main_cli_fn_STAR_ = npm_force_resolutions.core.main;

//# sourceMappingURL=core.js.map
