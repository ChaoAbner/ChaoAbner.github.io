(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{377:function(E,t,R){"use strict";R.r(t);var _=R(43),n=Object(_.a)({},(function(){var E=this,t=E.$createElement,R=E._self._c||t;return R("ContentSlotsDistributor",{attrs:{"slot-key":E.$parent.slotKey}},[R("h1",{attrs:{id:"索引优化order-by排序语句"}},[R("a",{staticClass:"header-anchor",attrs:{href:"#索引优化order-by排序语句"}},[E._v("#")]),E._v(" 索引优化ORDER BY排序语句")]),E._v(" "),R("p",[E._v("MySQL索引通常是被用于提高WHERE条件的数据行匹配或者执行联结操作时匹配其它表的数据行的搜索速度。")]),E._v(" "),R("p",[E._v("MySQL也能利用索引来快速地执行ORDER BY和GROUP BY语句的排序和分组操作。")]),E._v(" "),R("p",[E._v("通过索引优化来实现MySQL的ORDER BY语句优化：")]),E._v(" "),R("p",[E._v("1、"),R("code",[E._v("ORDER BY")]),E._v("的索引优化。如果一个SQL语句形如：\n"),R("strong",[E._v("SELECT [column1],[column2],…. FROM [TABLE] ORDER BY [sort];")]),E._v("\n在[sort]这个栏位上建立索引就可以实现利用索引进行order by 优化。")]),E._v(" "),R("p",[E._v("2、"),R("code",[E._v("WHERE + ORDER BY")]),E._v("的索引优化，形如：\n"),R("strong",[E._v("SELECT [column1],[column2],…. FROM [TABLE] WHERE [columnX] = [value] ORDER BY [sort];")]),E._v("\n建立一个联合索引(columnX,sort)来实现order by 优化。")]),E._v(" "),R("p",[R("strong",[E._v("注意")]),E._v("：如果columnX对应多个值，如下面语句就无法利用索引来实现order by的优化\n"),R("strong",[E._v("SELECT [column1],[column2],…. FROM [TABLE] WHERE [columnX] IN ([value1],[value2],…) ORDER BY[sort];")])]),E._v(" "),R("p",[E._v("3、"),R("code",[E._v("WHERE+ 多个字段ORDER BY")]),E._v(" "),R("strong",[E._v("SELECT * FROM [table] WHERE uid=1 ORDER x,y LIMIT 0,10;")]),E._v("\n建立索引(uid,x,y)实现order by的优化,比建立(x,y,uid)索引效果要好得多。")]),E._v(" "),R("p",[E._v("MySQL Order By"),R("strong",[E._v("不能使用索引来优化")]),E._v("排序的情况")]),E._v(" "),R("ul",[R("li",[R("p",[E._v("对不同的索引键做 ORDER BY ：(key1,key2分别建立索引)\n"),R("strong",[E._v("SELECT * FROM t1 ORDER BY key1, key2;")])])]),E._v(" "),R("li",[R("p",[E._v("在非连续的索引键部分上做 ORDER BY：(key_part1,key_part2建立联合索引;key2建立索引)\n"),R("strong",[E._v("SELECT * FROM t1 WHERE key2=constant ORDER BY key_part2;")])])]),E._v(" "),R("li",[R("p",[E._v("同时使用了 ASC 和 DESC：(key_part1,key_part2建立联合索引)\n"),R("strong",[E._v("SELECT * FROM t1 ORDER BY key_part1 DESC, key_part2 ASC;")])])]),E._v(" "),R("li",[R("p",[E._v("用于搜索记录的索引键和做 ORDER BY 的不是同一个：(key1,key2分别建立索引)\n"),R("strong",[E._v("SELECT * FROM t1 WHERE key2=constant ORDER BY key1;")])])]),E._v(" "),R("li",[R("p",[E._v("如果在WHERE和ORDER BY的栏位上应用表达式(函数)时，则无法利用索引来实现order by的优化\n"),R("strong",[E._v("SELECT * FROM t1 ORDER BY YEAR(logindate) LIMIT 0,10;")])])])]),E._v(" "),R("p",[E._v("特别提示:\n1>mysql一次查询只能使用一个索引。如果要对多个字段使用索引，建立复合索引。\n2>在ORDER BY操作中，MySQL只有在排序条件不是一个查询条件表达式的情况下才使用索引。")])])}),[],!1,null,null,null);t.default=n.exports}}]);