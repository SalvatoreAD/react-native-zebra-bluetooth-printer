import { NativeModules } from 'react-native';

type ZebraDevice = {
  name: string;
  address: string;
  class?: any;
  type?: string;
};

type RNZebraBluetoothPrinterType = {
  isEnabledBluetooth(): Promise<boolean>;
  enableBluetooth(): Promise<string>;
  scanDevices(): Promise<{
    paired: ZebraDevice[];
    found: ZebraDevice[];
  }>;
  disableBluetooth(): Promise<boolean>;
  pairedDevices(): Promise<ZebraDevice[]>;
  unpairDevice(deviceAddress: String): Promise<string>;
  connectDevice(address: String): Promise<string>;
  print(device: string, label: string): Promise<boolean>;
};

const { RNZebraBluetoothPrinter } = NativeModules;

const BluetoothPrinter: RNZebraBluetoothPrinterType = RNZebraBluetoothPrinter
  ? RNZebraBluetoothPrinter
  : {
      print: async () => {
        throw new Error('RNZebraBluetoothPrinter is not linked properly.');
      },
      connect: async () => {
        throw new Error('RNZebraBluetoothPrinter is not linked properly.');
      },
    };

export default BluetoothPrinter;
