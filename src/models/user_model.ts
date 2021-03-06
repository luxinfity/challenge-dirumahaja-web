export default function (sequelize: any, dataTypes: any): any {
    const user = sequelize.define(
        'User',
        {
            id: {
                type: dataTypes.STRING,
                defaultValue: dataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            uid: {
                type: dataTypes.STRING(255),
                allowNull: false
            },
            name: {
                type: dataTypes.STRING(255),
                allowNull: true
            },
            phone: {
                type: dataTypes.STRING(255),
                allowNull: true
            },
            email: {
                type: dataTypes.STRING(255),
                allowNull: true
            },
            username: {
                type: dataTypes.STRING(255),
                allowNull: false,
                unique: true
            },
            age: {
                type: dataTypes.INTEGER,
                allowNull: true
            },
            gender: {
                type: dataTypes.ENUM('f', 'm'),
                allowNull: true
            },
            coordinate: {
                type: dataTypes.GEOMETRY('POINT'),
                allowNull: false
            },
            location_name: {
                type: dataTypes.STRING(255),
                allowNull: true
            },
            created_at: {
                type: dataTypes.DATE,
                allowNull: true
            },
            updated_at: {
                type: dataTypes.DATE,
                allowNull: true
            },
            deleted_at: {
                type: dataTypes.DATE,
                allowNull: true
            }
        },
        {
            tableName: 'users',
            freezeTableName: true,
            underscored: true,
            paranoid: true /** Soft deletes */
        }
    );

    user.associate = (models: any): void => {
        user.hasMany(models.Session, {
            foreignKey: 'user_id',
            sourceKey: 'id',
            as: 'sessions'
        });
        user.hasOne(models.Session, {
            foreignKey: 'user_id',
            sourceKey: 'id',
            as: 'active_session'
        });
        user.hasMany(models.Relation, {
            foreignKey: 'challenger_id',
            sourceKey: 'id',
            as: 'relations'
        });
        user.hasMany(models.UserEmblem, {
            foreignKey: 'user_id',
            sourceKey: 'id',
            as: 'emblems'
        });
        user.hasOne(models.UserEmblem, {
            foreignKey: 'user_id',
            sourceKey: 'id',
            as: 'active_emblem'
        });
        user.hasMany(models.Notification, {
            foreignKey: 'user_id',
            sourceKey: 'id',
            as: 'notifications'
        });
    };

    return user;
}
