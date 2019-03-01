// src/component/goodItem/goodItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemList: {
      type: Object,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCart: function(e){
      const index = e.currentTarget.dataset.index;
      const list = this.data.itemList;
      const item = list[index];
      this.triggerEvent('addCart', item, {bubbles: false})
    }
  }
})
