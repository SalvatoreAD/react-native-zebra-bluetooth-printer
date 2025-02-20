declare module 'react-native' {
  interface NativeModulesStatic {
    RNZebraBluetoothPrinter: {
      isEnabledBluetooth(): Promise<boolean>;
      enableBluetooth(): Promise<string>;
      scanDevices(): Promise<{
        paired: { name: string; address: string }[];
        found: { name: string; address: string; class: any; type: string }[];
      }>;
      disableBluetooth(): Promise<boolean>;
      pairedDevices(): Promise<
        { name: string; address: string; class: any; type: string }[]
      >;
      unpairDevice(deviceAddress: String): Promise<string>;
      connectDevice(address: String): Promise<string>;
      print(device: string, label: string): Promise<boolean>;
    };
  }
}
