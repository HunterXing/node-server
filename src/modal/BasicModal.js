const { getWhere } = require('../utils/mysqlUtils');
const { exec } = require('../db/mysql');

class BasicModal {
  constructor (modalName) {
    this.getAll = async (queryParams) => {
      const whereParams = getWhere(queryParams);
      const sql = `select * from tb_${modalName} ${whereParams}`;
      return exec(sql);
    }
  
    this.getOne = async (queryParams) => {
      const whereParams = getWhere(queryParams);
      const sql = `select * from tb_${modalName} ${whereParams}`;
      let data = []
      try {
        data = await exec(sql);
        if (data && data.length >= 0) {
          return data[0]
        }
        return {}
      } catch (error) {}
      return exec(sql);
    }
  
    this.create = async (params) => {
      // 字段加上反引号，值加上单引号
      const sql = `insert into tb_${modalName} (${Object.keys(params).map(key => `\`${key}\``).join(',')}) values (${Object.values(params).map(value => `'${value}'`).join(',')})`;
      return exec(sql);
    }
  
    this.update = async (params) => {
      const { id, ...rest } = params
      const sql = `update tb_${modalName} set ${Object.keys(rest).map(key => `${key}='${rest[key]}'`).join(',')} where id=${id}`;
      return exec(sql);
    }
  
    this.delete = async (id) => {
      const sql = `delete from tb_${modalName} where id=${id}`;
      return exec(sql);
    }
  }
}

module.exports = BasicModal;