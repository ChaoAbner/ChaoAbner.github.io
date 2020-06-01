(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{374:function(t,a,r){"use strict";r.r(a);var s=r(43),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"mysql架构与历史"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql架构与历史"}},[t._v("#")]),t._v(" MySQL架构与历史")]),t._v(" "),r("h3",{attrs:{id:"mysql逻辑架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql逻辑架构"}},[t._v("#")]),t._v(" MySQL逻辑架构")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573630121897.png",alt:"1573630121897"}})]),t._v(" "),r("h3",{attrs:{id:"并发控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#并发控制"}},[t._v("#")]),t._v(" 并发控制")]),t._v(" "),r("p",[t._v("​\t\t主要在服务器层与存储引擎层来讨论。")]),t._v(" "),r("h4",{attrs:{id:"读写锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#读写锁"}},[t._v("#")]),t._v(" 读写锁")]),t._v(" "),r("p",[t._v("​\t\t用户在并发读取数据的时候不会发生什么问题，但是当一个用户读取数据的时候，另一个用户删除了该数据，那么可能发生生不确定的后果。")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573630236007.png",alt:"1573630236007"}})]),t._v(" "),r("h4",{attrs:{id:"锁粒度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#锁粒度"}},[t._v("#")]),t._v(" 锁粒度")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573630342932.png",alt:"1573630342932"}})]),t._v(" "),r("p",[t._v("​\t\t加锁也需要消耗资源。锁的各种操作，都会增加系统的开销。我们需要了解一些重要的锁策略。")]),t._v(" "),r("h5",{attrs:{id:"表锁（table-lock）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#表锁（table-lock）"}},[t._v("#")]),t._v(" 表锁（table lock）")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573630441778.png",alt:"1573630441778"}})]),t._v(" "),r("h5",{attrs:{id:"行级锁（row-lock）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#行级锁（row-lock）"}},[t._v("#")]),t._v(" 行级锁（row lock）")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573630479193.png",alt:"1573630479193"}})]),t._v(" "),r("h3",{attrs:{id:"事务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" 事务")]),t._v(" "),r("p",[t._v("​\t\t事务的"),r("strong",[t._v("ACID")]),t._v("概念："),r("strong",[t._v("原子性（atomicity），一致性（consistency），隔离性（isolation），持久性（durability）")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573630599393.png",alt:"1573630599393"}})]),t._v(" "),r("h4",{attrs:{id:"隔离级别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别"}},[t._v("#")]),t._v(" 隔离级别")]),t._v(" "),r("p",[t._v("​\t\t隔离级别有4个： "),r("strong",[t._v("未提交读（read uncommited），提交读（read commited），可重复读（repeatable read），可串行化（serializable)")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573630715627.png",alt:"1573630715627"}})]),t._v(" "),r("h4",{attrs:{id:"mysql中的事务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql中的事务"}},[t._v("#")]),t._v(" MySQL中的事务")]),t._v(" "),r("p",[t._v("​\t\tMySQL提供了两种事务性的存储引擎："),r("strong",[t._v("InnoDB和NDB Cluster")]),t._v("。")]),t._v(" "),r("h5",{attrs:{id:"自动提交（autocommit）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自动提交（autocommit）"}},[t._v("#")]),t._v(" 自动提交（autocommit）")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573630832753.png",alt:"1573630832753"}})]),t._v(" "),r("h5",{attrs:{id:"设置隔离级别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置隔离级别"}},[t._v("#")]),t._v(" 设置隔离级别")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573630893802.png",alt:"1573630893802"}})]),t._v(" "),r("h3",{attrs:{id:"多版本并发控制（mvcc）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多版本并发控制（mvcc）"}},[t._v("#")]),t._v(" 多版本并发控制（MVCC）")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573631010472.png",alt:"1573631010472"}})]),t._v(" "),r("p",[t._v("​\t\t"),r("code",[t._v("MVCC")]),t._v("可以理解为行级锁的变种，很多情况下避免了加锁操作，降低了开销，实现了非阻塞的读操作，写操作时只锁定必要的行。")]),t._v(" "),r("p",[t._v("​\t\t"),r("code",[t._v("MVCC")]),t._v("实现的不同的，典型的有"),r("strong",[t._v("乐观并发控制和悲观并发控制。")])]),t._v(" "),r("p",[t._v("​\t\t"),r("code",[t._v("InnoDB")]),t._v("的"),r("code",[t._v("MVCC")]),t._v("通过每行记录后面保存两个隐藏的列来实现。一个保存了行的创建时间，一个保存行的过期时间（或删除时间）。"),r("strong",[t._v("存储的是时间值实际是系统版本号")]),t._v("（system version number）。"),r("strong",[t._v("每开始一个事务，系统版本号都会自动递增。")]),r("img",{attrs:{src:"F:%5CtyporaImg%5C1573631467728.png",alt:"1573631467728"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573631399734.png",alt:"1573631399734"}})]),t._v(" "),r("p",[t._v("​")]),t._v(" "),r("h3",{attrs:{id:"mysql的存储引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql的存储引擎"}},[t._v("#")]),t._v(" MySQL的存储引擎")]),t._v(" "),r("h4",{attrs:{id:"查看表的信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看表的信息"}},[t._v("#")]),t._v(" 查看表的信息")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573631645913.png",alt:"1573631645913"}})]),t._v(" "),r("p",[t._v("​\t\t其中"),r("strong",[t._v("engine")]),t._v("中的信息代表存储引擎的类型。")]),t._v(" "),r("p",[t._v("​\t\t"),r("strong",[t._v("MySQL的默认存储引擎是InnoDB")]),t._v("。我们在选择存储引擎的时候需要考虑多个因素：")]),t._v(" "),r("ul",[r("li",[t._v("事务")]),t._v(" "),r("li",[t._v("备份")]),t._v(" "),r("li",[t._v("崩溃恢复")]),t._v(" "),r("li",[t._v("特有的特性（如MyISAM支持地理空间搜索）")])]),t._v(" "),r("h4",{attrs:{id:"切换表的存储引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#切换表的存储引擎"}},[t._v("#")]),t._v(" 切换表的存储引擎")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573632150281.png",alt:"1573632150281"}})]),t._v(" "),r("h2",{attrs:{id:"mysql基准测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql基准测试"}},[t._v("#")]),t._v(" MySQL基准测试")]),t._v(" "),r("h3",{attrs:{id:"为什么需要基准测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要基准测试"}},[t._v("#")]),t._v(" 为什么需要基准测试")]),t._v(" "),r("p",[t._v("​\t\t基准测试时唯一方便有效的测试系统在给定的工作负载或者不同压力下会发生什么情况。")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573632617131.png",alt:"1573632617131"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573632627650.png",alt:"1573632627650"}})]),t._v(" "),r("h3",{attrs:{id:"基准测试的策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基准测试的策略"}},[t._v("#")]),t._v(" 基准测试的策略")]),t._v(" "),r("p",[t._v("​\t\t有两个策略："),r("strong",[t._v("针对整个系统的整体测试；单独测试MySQL。也成为集成式以及单组件式。")])]),t._v(" "),r("h4",{attrs:{id:"测试指标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试指标"}},[t._v("#")]),t._v(" 测试指标")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("吞吐量")]),t._v(" - 单位时间内的事务处理数")]),t._v(" "),r("li",[r("strong",[t._v("响应时间或延迟")]),t._v(" - 测试任务所需的整体时间")]),t._v(" "),r("li",[r("strong",[t._v("并发性")]),t._v(" - 任意时间有多少同时发生的并发请求")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573633958838.png",alt:"1573633958838"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573633868095.png",alt:"1573633868095"}})]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("可拓展性")]),t._v(" - 系统的性能还可承受多少压力")])]),t._v(" "),r("h3",{attrs:{id:"基准测试方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基准测试方法"}},[t._v("#")]),t._v(" 基准测试方法")]),t._v(" "),r("h3",{attrs:{id:"基准测试工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基准测试工具"}},[t._v("#")]),t._v(" 基准测试工具")]),t._v(" "),r("h4",{attrs:{id:"集成式测试工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#集成式测试工具"}},[t._v("#")]),t._v(" 集成式测试工具")]),t._v(" "),r("ul",[r("li",[t._v("ab")]),t._v(" "),r("li",[t._v("http_load")]),t._v(" "),r("li",[t._v("JMeter")])]),t._v(" "),r("h4",{attrs:{id:"单组件式测试工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单组件式测试工具"}},[t._v("#")]),t._v(" 单组件式测试工具")]),t._v(" "),r("ul",[r("li",[t._v("mysqlslap")]),t._v(" "),r("li",[t._v("sql-bench")]),t._v(" "),r("li",[t._v("super smack")]),t._v(" "),r("li",[t._v("database test suite")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1573634541213.png",alt:"1573634541213"}})]),t._v(" "),r("h2",{attrs:{id:"服务器性能剖析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务器性能剖析"}},[t._v("#")]),t._v(" 服务器性能剖析")]),t._v(" "),r("h2",{attrs:{id:"schema（架构）与数据类型优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#schema（架构）与数据类型优化"}},[t._v("#")]),t._v(" Schema（架构）与数据类型优化")]),t._v(" "),r("h3",{attrs:{id:"选择优化的数据类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择优化的数据类型"}},[t._v("#")]),t._v(" 选择优化的数据类型")]),t._v(" "),r("p",[t._v("​\t\t选择正确的数据类型对于获得高性能来说很重要，通常来说选择应该遵循以下原则：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("更小的通常更好（比如只需要存0-200 则使用tinyint unsigned 更好）")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574232855609.png",alt:"1574232855609"}})])]),t._v(" "),r("li",[r("p",[t._v("简单就好")])])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574232982204.png",alt:"1574232982204"}})]),t._v(" "),r("ul",[r("li",[t._v("尽量避免NULL")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574233096665.png",alt:"1574233096665"}})]),t._v(" "),r("h4",{attrs:{id:"整数类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#整数类型"}},[t._v("#")]),t._v(" 整数类型")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574233439101.png",alt:"1574233439101"}})]),t._v(" "),r("h4",{attrs:{id:"字符串类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串类型"}},[t._v("#")]),t._v(" 字符串类型")]),t._v(" "),r("p",[r("strong",[t._v("分为varchar和char类型")])]),t._v(" "),r("ul",[r("li",[t._v("varchar（存储可变长字符串）")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574233633803.png",alt:"1574233633803"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574233739690.png",alt:"1574233739690"}})]),t._v(" "),r("ul",[r("li",[t._v("char（存储定长字符串）")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574233818183.png",alt:"1574233818183"}})]),t._v(" "),r("h5",{attrs:{id:"blob和text类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#blob和text类型"}},[t._v("#")]),t._v(" BLOB和TEXT类型")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574233995372.png",alt:"1574233995372"}})]),t._v(" "),r("h4",{attrs:{id:"日期和时间类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#日期和时间类型"}},[t._v("#")]),t._v(" 日期和时间类型")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574234504443.png",alt:"1574234504443"}})]),t._v(" "),r("p",[t._v("两种相似的日期类型：datetime和timestamp")]),t._v(" "),r("h4",{attrs:{id:"位数据类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#位数据类型"}},[t._v("#")]),t._v(" 位数据类型")]),t._v(" "),r("p",[t._v("BIT")]),t._v(" "),r("h4",{attrs:{id:"特殊类型数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特殊类型数据"}},[t._v("#")]),t._v(" 特殊类型数据")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574234745540.png",alt:"1574234745540"}})]),t._v(" "),r("h3",{attrs:{id:"加快alter-table操作的速度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#加快alter-table操作的速度"}},[t._v("#")]),t._v(" 加快ALTER TABLE操作的速度")]),t._v(" "),r("h4",{attrs:{id:"快速创建myisam索引"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快速创建myisam索引"}},[t._v("#")]),t._v(" 快速创建MyISAM索引")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574237471164.png",alt:"1574237471164"}})]),t._v(" "),r("h2",{attrs:{id:"创建高性能的索引"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建高性能的索引"}},[t._v("#")]),t._v(" 创建高性能的索引")]),t._v(" "),r("p",[t._v("​\t\t"),r("strong",[t._v("索引是存储引擎快速找到记录的一种数据结构")]),t._v("。数据量小的时候，索引的作用可能不大，当时当数据量大起来的时候，索引的重要性就愈发重要。")]),t._v(" "),r("h3",{attrs:{id:"索引基础"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#索引基础"}},[t._v("#")]),t._v(" 索引基础")]),t._v(" "),r("h4",{attrs:{id:"索引类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#索引类型"}},[t._v("#")]),t._v(" 索引类型")]),t._v(" "),r("ul",[r("li",[t._v("B-Tree索引")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574387893713.png",alt:"1574387893713"}})]),t._v(" "),r("p",[t._v("B-Tree的表示")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574393891039.png",alt:"1574393891039"}})]),t._v(" "),r("ul",[r("li",[t._v("哈希索引")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574407312014.png",alt:"1574407312014"}})]),t._v(" "),r("p",[t._v("加入有以下数据")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574407414051.png",alt:"1574407414051"}})]),t._v(" "),r("p",[t._v("有一个哈希函数f(x)，他返回下面的哈希值")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574407447797.png",alt:"1574407447797"}})]),t._v(" "),r("p",[t._v("则哈希索引的数据结构如下：")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574407465670.png",alt:"1574407465670"}})]),t._v(" "),r("p",[t._v("假如要查询一个数据")]),t._v(" "),r("p",[r("code",[t._v("mysq> select lname from testhash where fname = 'Peter';")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574407562836.png",alt:"1574407562836"}})]),t._v(" "),r("p",[r("strong",[t._v("哈希索引的限制：")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574407661544.png",alt:"1574407661544"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574407671012.png",alt:"1574407671012"}})]),t._v(" "),r("ul",[r("li",[t._v("空间数据索引（R-Tree）")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574585145543.png",alt:"1574585145543"}})]),t._v(" "),r("ul",[r("li",[t._v("全文索引")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574585162306.png",alt:"1574585162306"}})]),t._v(" "),r("h3",{attrs:{id:"索引的优点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#索引的优点"}},[t._v("#")]),t._v(" 索引的优点")]),t._v(" "),r("p",[t._v("总结下来有三个优点：")]),t._v(" "),r("h3",{attrs:{id:"高性能的索引策略🔺"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#高性能的索引策略🔺"}},[t._v("#")]),t._v(" "),r("img",{attrs:{src:"F:%5CtyporaImg%5C1574585197522.png",alt:"1574585197522"}}),t._v("高性能的索引策略🔺")]),t._v(" "),r("h4",{attrs:{id:"独立的列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#独立的列"}},[t._v("#")]),t._v(" 独立的列")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574585649795.png",alt:"1574585649795"}})]),t._v(" "),r("h4",{attrs:{id:"前缀索引和索引选择性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前缀索引和索引选择性"}},[t._v("#")]),t._v(" 前缀索引和索引选择性")]),t._v(" "),r("p",[t._v("​\t\t索引很长的字符串，可以使用哈希索引，不过还不够，还可以使用前缀索引。之索引开始的部分字符，这样可以大大节约索引的空间。从而提高效率。")]),t._v(" "),r("p",[r("strong",[t._v("步骤")]),t._v("：")]),t._v(" "),r("ul",[r("li",[t._v("先找到合适的前缀长度")]),t._v(" "),r("li",[t._v("创建前缀索引")])]),t._v(" "),r("p",[r("strong",[t._v("缺点")]),t._v("：")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574586375203.png",alt:"1574586375203"}})]),t._v(" "),r("h3",{attrs:{id:"多列索引"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多列索引"}},[t._v("#")]),t._v(" 多列索引")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574596833025.png",alt:"1574596833025"}})]),t._v(" "),r("h3",{attrs:{id:"选择合适的索引列顺序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择合适的索引列顺序"}},[t._v("#")]),t._v(" 选择合适的索引列顺序")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574596948004.png",alt:"1574596948004"}})]),t._v(" "),r("p",[t._v("可以先衡量customer_id和staff_id的数据数量，将数据少的索引放前面。")]),t._v(" "),r("h3",{attrs:{id:"聚簇索引🔺"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引🔺"}},[t._v("#")]),t._v(" 聚簇索引🔺")]),t._v(" "),r("p",[t._v("P00")]),t._v(" "),r("h3",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[t._v("​\t\tMySQL大多数情况下使用B-Tree索引。")]),t._v(" "),r("p",[t._v("​\t\t在选择索引和编写利用这些索引查询时，有三个原则：")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1574693773097.png",alt:"1574693773097"}})]),t._v(" "),r("h2",{attrs:{id:"查询性能优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查询性能优化"}},[t._v("#")]),t._v(" 查询性能优化")]),t._v(" "),r("h3",{attrs:{id:"慢查询基础：优化数据访问"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#慢查询基础：优化数据访问"}},[t._v("#")]),t._v(" 慢查询基础：优化数据访问")]),t._v(" "),r("p",[t._v("MySQL能够使用如下三种方式应用where条件，从好到坏一次为：")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1575029172115.png",alt:"1575029172115"}})]),t._v(" "),r("p",[t._v("​\t\t好的索引对于数据的访问来说很重要，可以减少扫描的行数。"),r("strong",[t._v("尽量让扫描的行数和实际返回的行数在数量上接近。")])]),t._v(" "),r("p",[t._v("​\t\t如果扫描很多行，但是却返回很少行的话，我们可以采用以下的优化。")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1575029417174.png",alt:"1575029417174"}})]),t._v(" "),r("h3",{attrs:{id:"重构查询方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重构查询方式"}},[t._v("#")]),t._v(" 重构查询方式")]),t._v(" "),r("h4",{attrs:{id:"复杂查询还是多个检查查询"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复杂查询还是多个检查查询"}},[t._v("#")]),t._v(" 复杂查询还是多个检查查询")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1575030019623.png",alt:"1575030019623"}})]),t._v(" "),r("h4",{attrs:{id:"切分查询（分而治之）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#切分查询（分而治之）"}},[t._v("#")]),t._v(" 切分查询（分而治之）")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1575030100480.png",alt:"1575030100480"}})]),t._v(" "),r("p",[t._v("将一个删除操作分次进行，可以将服务器一次性的压力分散到一个很长的时间段。可以大大减少删除时锁的持有时间。")]),t._v(" "),r("h4",{attrs:{id:"分解关联查询"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分解关联查询"}},[t._v("#")]),t._v(" 分解关联查询")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1575030948156.png",alt:"1575030948156"}})]),t._v(" "),r("p",[t._v("优势如下：")]),t._v(" "),r("ul",[r("li",[t._v("第一次查询的tag=‘mysql’已经缓存，下面的查询就不用再去查询tag了。")]),t._v(" "),r("li",[t._v("拆分可以降低锁的竞争")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1575031079330.png",alt:"1575031079330"}})]),t._v(" "),r("h3",{attrs:{id:"查询的执行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查询的执行"}},[t._v("#")]),t._v(" 查询的执行")]),t._v(" "),r("p",[t._v("​\t\tMySQL的查询过程")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1575031288484.png",alt:"1575031288484"}})]),t._v(" "),r("ol",[r("li",[t._v("先查询缓存，如果之前查过则直接返回。")]),t._v(" "),r("li",[t._v("通过解析器解析SQL，进行预处理，还有优化器生成对应的执行计划。")]),t._v(" "),r("li",[t._v("根据执行计划调用查询引擎的API来执行查询。")]),t._v(" "),r("li",[t._v("返回结果。")])]),t._v(" "),r("h3",{attrs:{id:"mysql客户端-服务端的通信协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql客户端-服务端的通信协议"}},[t._v("#")]),t._v(" MySQL客户端/服务端的通信协议")]),t._v(" "),r("p",[t._v("​\t\t客户端与服务端的通信协议是"),r("strong",[t._v("半双工")]),t._v("的，意味着：")]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1575031461407.png",alt:"1575031461407"}})]),t._v(" "),r("h4",{attrs:{id:"查询优化处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查询优化处理"}},[t._v("#")]),t._v(" 查询优化处理")]),t._v(" "),r("p",[t._v("下面是MySQL能够处理的优化类型：")]),t._v(" "),r("ul",[r("li",[t._v("重新定义关联表的顺序")]),t._v(" "),r("li",[t._v("将外连接转化成内连接")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1575033202103.png",alt:"1575033202103"}})]),t._v(" "),r("ul",[r("li",[t._v("使用等价变换规则")])]),t._v(" "),r("p",[r("img",{attrs:{src:"F:%5CtyporaImg%5C1575033299562.png",alt:"1575033299562"}})]),t._v(" "),r("ul",[r("li",[t._v("优化count(), min(), max()")]),t._v(" "),r("li",[t._v("预估并转化为常数表达式")]),t._v(" "),r("li",[t._v("覆盖索引扫描")]),t._v(" "),r("li",[t._v("子查询优化")]),t._v(" "),r("li",[t._v("提前终止查询")])])])}),[],!1,null,null,null);a.default=v.exports}}]);