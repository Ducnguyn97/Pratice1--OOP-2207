let tv1 = new TiVi("Samsung", 1,2,false)
let remote = new RemoteControlTV("0801",tv1);
tv1.CheckStatus();
remote.PressTurnOn();
tv1.CheckStatus();
remote.PressVolumeUp();
remote.PressVolumeUp();
remote.PressVolumeUp();
remote.PressVolumeDown();
remote.ChangeChanel(2);
remote.ChangeChanel(4);
remote.PressTurnOff();
tv1.CheckStatus();