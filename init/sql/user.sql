-- 基本用户信息表
CREATE TABLE IF NOT EXISTS  `user_info` (
  `uid` int(8) NOT NULL AUTO_INCREMENT,         -- 用户id
  `username` varchar(16) DEFAULT NULL,          -- 用户正式姓名
  `nickname` varchar(255) DEFAULT NULL,         -- 用户昵称
  `gender` varchar(2) DEFAULT NULL,             -- 用户性别
  `wechat` varchar(64) DEFAULT NULL,            -- 用户微信
  `mobile` varchar(32) DEFAULT NULL,            -- 用户联系方式
  `openid` varchar(255) DEFAULT NULL,           -- 用户openid
  `home` varchar(255) DEFAULT NULL,             -- 家庭住址
  `company` varchar(255) DEFAULT NULL,          -- 公司
  `home_location` varchar(50) DEFAULT NULL,     -- 家庭定位
  `company_location` varchar(50) DEFAULT NULL,  -- 公司定位
  `role` int(2) DEFAULT NULL,                   -- 角色  1默认用户  2乘客 3司机
  `status` int(21) DEFAULT NULL,                -- 用户状态
  `memon` varchar(255) DEFAULT NULL,            -- 个性签名
  `publish_num` int(64) DEFAULT NULL,           -- 发表动态数
  `register_time` varchar(255) DEFAULT NULL,    -- 注册时间
  `avatar` varchar(255) DEFAULT NULL,           -- 头像
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user_info` set role=1, memon='今天心情很好，发个下我的签名吧～';



-- 乘客信息表
CREATE TABLE IF NOT EXISTS `passenger_info` (
    `p_id` int(8) NOT NULL AUTO_INCREMENT,
    `uid` int(8) NOT NULL,
    `nickname` varchar(255) DEFAULT NULL,      -- 用户昵称
    `mobile` varchar(32) DEFAULT NULL,         -- 用户联系方式
    `order_num` int(64) DEFAULT NULL,          -- 用户下单量     
    `comment_num` int(64) DEFAULT NULL,        -- 评论量
    `active_range` int(4) DEFAULT NULL,        -- 活跃度
    PRIMARY KEY (`p_id`),
    FOREIGN KEY (`uid`) references user_info(`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- 车主信息表
CREATE TABLE IF NOT EXISTS `owner_info` (
    `o_id` int(8) NOT NULL AUTO_INCREMENT,
    `uid` int(8) NOT NULL,
    `verified` int(4) DEFAULT NULL,
    `car_no` varchar(32) DEFAULT NULL,         -- 车牌号
    `car_type` varchar(64) DEFAULT NULL,       -- 车型号
    `car_color` varchar(8) DEFAULT NULL,       -- 车颜色
    `car_avatar` varchar(255) DEFAULT NULL,    -- 车图片
    `am_star_time` varchar(32) DEFAULT NULL,   -- 早上发车时间
    `pm_star_time` varchar(32) DEFAULT NULL,   -- 下班发车时间
    `carload` int(4) DEFAULT NULL,             -- 载客量
    `order_no` int(64) DEFAULT NULL,           -- 订单量
    `credit_score` int(8) DEFAULT NULL,        -- 信用分
    `user_num` int(64) DEFAULT NULL,           -- 用户量
    PRIMARY KEY (`o_id`),
    FOREIGN KEY (`uid`) references user_info(`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 车主发车信息表
CREATE TABLE IF NOT EXISTS `dispatch_info` (
    `d_id` int(8) NOT NULL AUTO_INCREMENT,
    `uid` int(8) NOT NULL,  
    `start` varchar(32) DEFAULT NULL,          -- 发车起点
    `start_location` varchar(32) DEFAULT NULL, -- 发车起点位置
    `dest` varchar(32) DEFAULT NULL,           -- 目的地
    `dest_location` varchar(32) DEFAULT NULL,  -- 目的地位置
    `type` varchar(16) DEFAULT NULL,           -- 去上班
    `dispatch_time` varchar(10) DEFAULT NULL,  -- 发车时间
    `empty_seat` int(4) DEFAULT NULL,          -- 空位数
    `status` int(2) DEFAULT NULL,              -- 状态
    `introdution` varchar(255) DEFAULT NULL,   -- 发车说明
    PRIMARY KEY (`d_id`),
    FOREIGN KEY (`uid`) references user_info(`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 乘客乘车信息表
CREATE TABLE IF NOT EXISTS `take_info` (
    `t_id` int(8) NOT NULL AUTO_INCREMENT,
    `uid` int(8) NOT NULL,   
    `start` varchar(32) DEFAULT NULL,          -- 乘车起点
    `start_location` varchar(32) DEFAULT NULL, -- 乘车车起点位置
    `dest` varchar(32) DEFAULT NULL,           -- 目的地
    `dest_location` varchar(32) DEFAULT NULL,  -- 目的地位置
    `type` varchar(16) DEFAULT NULL,           -- 去上班
    `take_time` varchar(10) DEFAULT NULL,      -- 发车时间
    `passenger_num` int(4) DEFAULT NULL,       -- 乘车人数
    `status` int(2) DEFAULT NULL,              -- 状态
    `introdution` varchar(255) DEFAULT NULL,   -- 打车说明
    PRIMARY KEY (`t_id`),
    FOREIGN KEY (`uid`) references user_info(`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 司机订单信息表
CREATE TABLE IF NOT EXISTS `owner_order` (
    `oo_id` int(8) NOT NULL AUTO_INCREMENT,
    `uid` int(8) NOT NULL,
    `c_id` int(8) NOT NULL,
    `order_no` varchar(32) NOT NULL,           -- 订单编号
    `start` varchar(32) DEFAULT NULL,          -- 乘车起点
    `start_location` varchar(32) DEFAULT NULL, -- 乘车车起点位置
    `dest` varchar(32) DEFAULT NULL,           -- 目的地
    `dest_location` varchar(32) DEFAULT NULL,  -- 目的地位置
    `load_num` int(4) DEFAULT NULL,            -- 人数
    `start_time` varchar(32) DEFAULT NULL,     -- 乘车时间
    `passenger_list` varchar(32) DEFAULT NULL, -- 乘客列表
    `status` int(2) DEFAULT NULL,              -- 订单状态
    PRIMARY KEY (`oo_id`),
    FOREIGN KEY (`uid`) references user_info(`uid`),
    FOREIGN KEY (`c_id`) references comment_info(`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 乘客评价表
CREATE TABLE IF NOT EXISTS `comment_info` (
    `c_id` int(8) NOT NULL AUTO_INCREMENT,
    `po_id` int(8) NOT NULL,
    `type` int(2) DEFAULT NULL,                 -- 评价类型     
    `secure_score` int(4) DEFAULT NULL,         -- 安全系数
    `clean_scroe` int(4) DEFAULT NULL,          -- 环境系数
    `time_scroe` int(4) DEFAULT NULL,           -- 守时系数
    `content`  varchar(255) DEFAULT NULL,       -- 评价内容
    PRIMARY KEY (`c_id`)
    -- FOREIGN KEY (`po_id`) references passenger_order(`po_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 乘客订单信息表
CREATE TABLE IF NOT EXISTS `passenger_order` (
    `po_id` int(8) NOT NULL AUTO_INCREMENT,
    `c_id` int(8) NOT NULL,
    `uid` int(8) NOT NULL,
    `order_no` varchar(32) NOT NULL,           -- 订单编号
    `start` varchar(32) DEFAULT NULL,          -- 乘车起点
    `start_location` varchar(32) DEFAULT NULL, -- 乘车车起点位置
    `dest` varchar(32) DEFAULT NULL,           -- 目的地
    `dest_location` varchar(32) DEFAULT NULL,  -- 目的地位置
    `load_num` int(4) DEFAULT NULL,            -- 人数
    `start_time` varchar(32) DEFAULT NULL,     -- 乘车时间
    `status` int(2) DEFAULT NULL,              -- 订单状态
    PRIMARY KEY (`po_id`),
    FOREIGN KEY (`uid`) references user_info(`uid`),
    FOREIGN KEY (`c_id`) references comment_info(`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 用户反馈表
CREATE TABLE IF NOT EXISTS `feedback_info` (
    `f_id` int(8) NOT NULL AUTO_INCREMENT,
    `uid` int(8) NOT NULL,
    `title` varchar(64) DEFAULT NULL,           -- 反馈标题 
    `type`  varchar(64) DEFAULT NULL,           -- 反馈类型 /乘客投诉 /车主投诉 /系统改善意见 /系统问题发现 /失物招领
    `descrition` varchar(255) DEFAULT NULL,     -- 反馈描述
    `images` varchar(255) DEFAULT NULL,         -- 反馈图集
    `reply` varchar(255) DEFAULT NULL,          -- 反馈回复
    `status` int(4) DEFAULT NULL,               -- 反馈状态 /已受理 /已处理 /已完结
    `create_time` varchar(32) DEFAULT NULL,      -- 创建时间
    PRIMARY KEY (`f_id`),
    FOREIGN KEY (`uid`) references user_info(`uid`) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 拼友圈信息表
CREATE TABLE IF NOT EXISTS `moments_info` (
    `m_id` int(8) NOT NULL AUTO_INCREMENT,
    `uid` int(8) NOT NULL,
    `content` varchar(255) DEFAULT NULL,        -- 动态内容
    `images` varchar(255) DEFAULT NULL,         -- 动态图集
    `view_num` int(32) DEFAULT NULL,            -- 浏览量
    `praise_num` int(32) DEFAULT NULL,          -- 点赞数
    `comment_list` varchar(32) DEFAULT NULL,    -- 评价列表
    `status` int(2) DEFAULT NULL,                -- 状态
    PRIMARY KEY (`m_id`),
    FOREIGN KEY (`uid`) references user_info(`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


