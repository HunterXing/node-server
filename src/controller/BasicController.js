class BasicController {
  constructor(ctx) {
    this.getAll = async (params) => {
      return ctx.getAll(params);
    }
  
    this.getOne = async (id) => { 
      return ctx.getOne(id);
    }

    this.create = async (params) => {
      return ctx.create(params);
    }

    this.update = async (params) => {
      return ctx.update(params);
    }

    this.delete = async (id) => {
      return ctx.delete(id);
    }
  }
}
module.exports = BasicController;