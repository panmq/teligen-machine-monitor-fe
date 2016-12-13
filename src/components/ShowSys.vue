<template>
  <div id="showsys">
    <h1>系统信息</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="系统基本信息">
        <ul>
          <li>用户名: {{ sysData.userName }}</li>
          <li>用户的主目录: {{ sysData.userHome }}</li>
          <li>用户的当前工作目录: {{ sysData.userDir }}</li>
          <li>计算机名: {{ sysData.computerName }}</li>
          <li>计算机域名: {{ sysData.userDomain }}</li>
          <li>本地ip地址: {{ sysData.ip }}</li>
          <li>本地主机名: {{ sysData.hostName }}</li>
          <li>操作系统的名称: {{ sysData.osName }}</li>
          <li>操作系统的构架: {{ sysData.osArch }}</li>
          <li>操作系统的版本: {{ sysData.osVersion }}</li>
          <li>JVM可以使用的总内存: {{ sysData.totalMemory }}</li>
          <li>JVM可以使用的剩余内存: {{ sysData.freeMemory }}</li>
          <li>JVM可以使用的处理器个数: {{ sysData.availableProcessors }}</li>
          <li>Java的运行环境版本: {{ sysData.javaVersion }}</li>
          <li>Java的运行环境供应商: {{ sysData.javaVendor }}</li>
          <li>Java供应商的URL: {{ sysData.javaVendorUrl }}</li>
          <li>Java的安装路径: {{ sysData.javaHome }}</li>
          <li>Java的虚拟机规范版本: {{ sysData.jvmSpecVersion }}</li>
          <li>Java的虚拟机规范供应商: {{ sysData.jvmSpecVendor }}</li>
          <li>Java的虚拟机规范名称: {{ sysData.jvmSpecName }}</li>
          <li>Java的虚拟机实现版本: {{ sysData.jvmVersion }}</li>
          <li>Java的虚拟机实现供应商: {{ sysData.jvmVendor }}</li>
          <li>Java的虚拟机实现名称: {{ sysData.jvmName }}</li>
          <li>Java运行时环境规范版本: {{ sysData.javaSpecVersion }}</li>
          <li>Java运行时环境规范供应商: {{ sysData.javaSpecVender }}</li>
          <li>Java运行时环境规范名称: {{ sysData.javaSpecName }}</li>
          <li>Java的类格式版本号: {{ sysData.javaClassVersion }}</li>
          <li>Java的类路径: {{ sysData.javaClassPath }}</li>
          <li>加载库时搜索的路径列表: {{ sysData.javaLibPath }}</li>
          <li>默认的临时文件路径: {{ sysData.javaIoTmpDir }}</li>
          <li>一个或多个扩展目录的路径: {{ sysData.javaExtDirs }}</li>
          <li>文件分隔符: '{{ sysData.fileSeparator }}'</li>
          <li>路径分隔符: '{{ sysData.pathSeparator }}'</li>
          <li>行分隔符: '{{ sysData.lineSeparator }}'</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="CPU情况">
        <h3>CPU信息</h3>
        <el-table :data="sysData.cpuInfoList" border style="width: 100%">
          <el-table-column prop="vendor" label="vendor"></el-table-column>
          <el-table-column prop="model" label="model"></el-table-column>
          <el-table-column prop="mhz" label="mhz"></el-table-column>
          <el-table-column prop="cacheSize" label="cacheSize"></el-table-column>
          <el-table-column prop="totalCores" label="totalCores"></el-table-column>
          <el-table-column prop="totalSockets" label="totalSockets"></el-table-column>
          <el-table-column prop="coresPerSocket" label="coresPerSocket"></el-table-column>
        </el-table>
        <h3>CPU使用率</h3>
          <el-table :data="sysData.cpuPercList" border style="width: 100%">
          <el-table-column prop="user" label="user"></el-table-column>
          <el-table-column prop="sys" label="sys"></el-table-column>
          <el-table-column prop="nice" label="nice"></el-table-column>
          <el-table-column prop="idle" label="idle"></el-table-column>
          <el-table-column prop="wait" label="wait"></el-table-column>
          <el-table-column prop="irq" label="irq"></el-table-column>
          <el-table-column prop="softIrq" label="softIrq"></el-table-column>
          <el-table-column prop="stolen" label="stolen"></el-table-column>
          <el-table-column prop="combined" label="combined"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="内存情况">
        <h3>内存情况</h3>
        <ul>
          <li>total: {{ sysData.mem.total }}</li>
          <li>ram: {{ sysData.mem.ram }}</li>
          <li>used: {{ sysData.mem.used }}</li>
          <li>free: {{ sysData.mem.free }}</li>
          <li>actualUsed: {{ sysData.mem.actualUsed }}</li>
          <li>actualFree: {{ sysData.mem.actualFree }}</li>
          <li>usedPercent: {{ sysData.mem.usedPercent }}</li>
          <li>freePercent: {{ sysData.mem.freePercent }}</li>
        </ul>
        <h3>交换区情况</h3>
        <ul>
          <li>total: {{ sysData.swap.total }}</li>
          <li>used: {{ sysData.swap.used }}</li>
          <li>free: {{ sysData.swap.free }}</li>
          <li>pageIn: {{ sysData.swap.pageIn }}</li>
          <li>pageOut: {{ sysData.swap.pageOut }}</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="磁盘情况">
        <h3>文件系统情况</h3>
        <el-table :data="sysData.fileSystemList" border style="width: 100%">
          <el-table-column prop="dirName" label="dirName"></el-table-column>
          <el-table-column prop="devName" label="devName"></el-table-column>
          <el-table-column prop="typeName" label="typeName"></el-table-column>
          <el-table-column prop="sysTypeName" label="sysTypeName"></el-table-column>
          <el-table-column prop="options" label="options"></el-table-column>
          <el-table-column prop="type" label="type"></el-table-column>
          <el-table-column prop="flags" label="flags"></el-table-column>
        </el-table>
        <h3>文件系统使用情况</h3>
          <el-table :data="sysData.fileSystemUsageList" border style="width: 100%">
          <el-table-column prop="total" label="total"></el-table-column>
          <el-table-column prop="free" label="free"></el-table-column>
          <el-table-column prop="used" label="used"></el-table-column>
          <el-table-column prop="avail" label="avail"></el-table-column>
          <el-table-column prop="files" label="files"></el-table-column>
          <el-table-column prop="freeFiles" label="freeFiles"></el-table-column>
          <el-table-column prop="diskReads" label="diskReads"></el-table-column>
          <el-table-column prop="diskWrites" label="diskWrites"></el-table-column>
          <el-table-column prop="diskReadBytes" label="diskReadBytes"></el-table-column>
          <el-table-column prop="diskWriteBytes" label="diskWriteBytes"></el-table-column>
          <el-table-column prop="diskQueue" label="diskQueue"></el-table-column>
          <el-table-column prop="diskServiceTime" label="diskServiceTime"></el-table-column>
          <el-table-column prop="usePercent" label="usePercent"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="IO情况">
        <el-table :data="sysData.netInterfaceConfigList" border style="width: 100%">
          <el-table-column prop="name" label="name"></el-table-column>
          <el-table-column prop="hwaddr" label="hwaddr"></el-table-column>
          <el-table-column prop="type" label="type"></el-table-column>
          <el-table-column prop="description" label="description"></el-table-column>
          <el-table-column prop="address" label="address"></el-table-column>
          <el-table-column prop="destination" label="destination"></el-table-column>
          <el-table-column prop="broadcast" label="broadcast"></el-table-column>
          <el-table-column prop="netmask" label="netmask"></el-table-column>
          <el-table-column prop="flags" label="flags"></el-table-column>
          <el-table-column prop="mtu" label="mtu"></el-table-column>
          <el-table-column prop="metric" label="metric"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <br/><br/>
    <a href="/showapps">
      <el-button>应用列表</el-button>
    </a>
  </div>
</template>

<script>
import config from './config.json'
export default {
  name: 'showsys',
  data () {
    return {
      sysData: ''
    }
  },
  mounted: function () {
    this.$http.get(config.restBeHost + '/teligen-machine-monitor-be/rest/sys/', {}, {
      headers: {
      },
      emulateJSON: true
    }).then(function (response) {
      // 这里是处理正确的回调
      this.sysData = response.data
    }, function (response) {
      // 这里是处理错误的回调
      console.log(response)
    })
  }
}
</script>

<style>
</style>
