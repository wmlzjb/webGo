##React 相关要点记录

当应用变大的时候，数据结构可能没有这么简单，这时候需要找到一个较好的结构来设计应用数据，下面是两个 redux 在设计 state 上的 tip:

业务数据和 UI 状态数据分离，尽量避免 UI 状态数据放在 store 中，即便放在 store 中也要和业务数据分离。

避免嵌套，在一个复杂的场景，数据对象可能很深，出现多层，那在设计的时候可以通过 id 的方式来引用，可以参考 normalizr的简化方式

作者：陈学家
链接：https://zhuanlan.zhihu.com/p/21337964
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。