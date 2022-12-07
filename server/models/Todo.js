// Todo 모델
// sequelize 모델과 mysql todo table 연결
const Todo = (Sequelize, DataTypes) => {
  // Sequelize.define()
  // - param1 : 모델 이름
  // - param2 : 컬럼 정의
  // - param3 : 모델 옵션
  const model = Sequelize.define(
    "todo",
    {
      id: {
        type: DataTypes.INTIGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: "todo",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return model;
};

module.exports = Todo;
