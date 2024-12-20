package dev.dergoogler.mmrl.compat.stub;

import android.os.ParcelFileDescriptor;

interface IFileManager {
    boolean deleteOnExit(String path);
    void write(String path, String data);
    String read(String path);
    String readAsBase64(String path);
    String list(String path, String delimiter);
    long stat(String path);
    boolean delete(String path);
    boolean exists(String path);
    boolean isAccessRestricted(String path, boolean disable);
}