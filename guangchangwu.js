
$(function(){
    var _ = window._;
    var B = Backbone;
    var gcw = {};

    //内容视图
    gcw.contentView = new B.View.extend({
        initialize : function(){
           var videModel =  B.Model.extend({
               defaults : {
                   'title' : '',        //标题
                   'image' : '',        //图片
                   'placeholder' : '',  //图片占位
                   'host' : '',         //来源
                   'duration' : '',     //时长
                   'brief' : '',        //简介
                   'date' : ''          //日期
               }
           });
           this.collection = new B.Collection.extend({
               model : videModel
           });
           this.collection.on('reset', _.bind(this.collectionReset,this));
        }
    });

    //排行榜视图
    gcw.topView = new B.View.extend({
        initialize : function(){
            this.collection = new B.Collection.extend({
                model : B.Model.extend({
                })
            });
        }
    });

    //选择器视图
    gcw.selectorView = new B.View.extend({
        initialize : function(){
            this.collection = new B.Collection.extend({
                model : B.Model.extend({

                })
            });
        }
    });
});