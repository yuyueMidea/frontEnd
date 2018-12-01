(function(){
const STATUS_RUN = 'run';
const STATUS_STOP = 'stop';

//粒子系统基类
class Particle {
    //1. 创建 `canvas` 画布
    constructor(idName, width, height, options) {
        this.canvas = document.getElementById(`${idName}`);
        this.ctx = this.canvas.getContext('2d'); //canvas执行上下文
        this.timer = null; //动画运行定时器，采用requestAnimationFrame
        this.status = STATUS_STOP; //动画执行状态 默认为stop
        this.options = options || {}; //配置（粒子数量，速度等）
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        this.init();
    };
    //2. 初始化粒子
    init() {

    };
    //3. 绘制粒子到画布
    draw() {
        let self = this;
        let { ctx, width, height } = this;
        ctx.clearRect(0, 0, width, height);
        this.moveFunc(ctx, width, height);
        this.timer = requestAnimationFrame(() => {
            self.draw();
        });
    };
    //4. 定义粒子的运动方式
    moveFunc() {

    };
    //5. 控制动画的播放与暂停。
    run() {
        if (this.status !== STATUS_RUN) {
            this.status = STATUS_RUN;
            this.draw();
        }
    };
    stop() {
        this.status = STATUS_STOP;
        cancelAnimationFrame(this.timer);
    };
    //6. 清除画布
    clear() {
        this.stop();
        this.ctx.clearRect(0, 0, this.width, this.height);
    };

};
//
// export {
//     Particle
// }
    window.Particle =Particle;
})()