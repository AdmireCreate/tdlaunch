BadLion.init(string PackageName,number loadMode); //初始化插件
BadLion.loadJava(string className,string methodName,string code); //加载java 返回执行结果
BadLion.register(string code); //注册插件 参数为启动器作者授予的激活码
GameData.getMinecraftGame(); //获取MinecraftGame 返回值在java中为long
GameData.getLocalPlayer(); //获取本地玩家 返回值在java中为long
GameData.getGuiData(); //获取GuiData 返回值在java中为long
GameData.getServerAllActor(); //获取所有实体 返回值在java中为long[]
GameData.getGameMode(); //获取GameMode 返回值在java中为long

GameMode.attack(long gameMode,long targetActor); //对指定实体进行一次攻击
GameMode.buildBlock(long gameMode,number x,number y,number z,number id,number rot); //在指定坐标指定视角放置一个指定id的方块
GameMode.buildBlock(long gameMode,number x,number y,number z,number rot); //在指定坐标指定视角挖掘方块

Actor.getNameTag(long targetActor); //获取指定实体的名称 返回值为string
Actor.getX(long targetActor); //获取指定实体X坐标 返回值为float(number)
Actor.getY(long targetActor); //获取指定实体Y坐标 返回值为float(number)
Actor.getZ(long targetActor); //获取指定实体Z坐标 返回值为float(number)
Actor.getYaw(long targetActor); //获取指定实体Yaw视角 返回值为float(number)
Actor.getPitch(long targetActor); //获取指定实体Pitch视角 返回值为float(number)

//BadLion类的算法全部ByJony
BadLion.getActorType(long targetActor); //获取玩家的实体类型 id为tdlaunch特有id
BadLion.getActorDistance(long actor1,long ctor2); //获取玩家1和玩家2的距离 返回值为number
BadLion.getPlayer(number distance); //根据距离获取指定一个玩家
BadLion.getActor(number distance); //根据距离获取指定一个实体
........更多API请咨询启动器作者
