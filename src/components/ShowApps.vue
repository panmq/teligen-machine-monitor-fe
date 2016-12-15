<template>
  <div id="showapps">
    <h1>应用列表</h1>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="pid" label="进程ID"></el-table-column>
      <el-table-column prop="name" label="名字"></el-table-column>
      <el-table-column prop="path" label="路径"></el-table-column>
      <el-table-column prop="jvmParm" label="JVM参数"></el-table-column>
      <el-table-column prop="ports" label="占用端口"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column inline-template fixed="right" label="操作" style="width: 10%">
        <span>
          <a v-if="row.pid != ''" target="_blank" @click="openAppMetric(row.pid)">
             <el-button type="text" size="small">应用指标</el-button>
          </a>
          <a v-if="row.pid != ''" target="_blank" @click="openInstancesRanking(row.pid)">
             <el-button type="text" size="small">实例排名</el-button>
          </a>
          <a v-if="row.pid != ''" target="_blank" @click="openThreadsDump(row.pid)">
            <el-button type="text" size="small" href>线程Dump</el-button>
          </a>
          <a v-if="row.pid != ''" @click="dumpHeap(row.pid)">
            <el-button type="text" size="small" href>堆Dump</el-button>
          </a>
          <a v-if="row.pid != ''" href="/">
            <el-button type="text" size="small" href>打包</el-button>
          </a>
          <a v-if="row.pid != '' && row.jvmParm.indexOf('+PrintGC') <= 0"  @click="enableGC(row.pid)">
            <el-button type="text" size="small">启动GC日志</el-button>
          </a>
          <a v-if="row.pid != '' && row.jvmParm.indexOf('+PrintGC') > 0" @click="disableGC(row.pid)">
            <el-button type="text" size="small">关闭GC日志</el-button>
          </a>
          <el-popover v-if="row.pid == ''" trigger="hover" placement="top">
            <p>启动命令: {{ row.startCmd }}</p>
            <div slot="reference">
              <a href="/">
                <el-button type="text" size="small">启动</el-button>
              </a>
            </div>
          </el-popover>
        </span>
      </el-table-column>
    </el-table>
    <br/>
    <a href="/showsys">
      <el-button>系统信息</el-button>
    </a>
  </div>
</template>

<script>
import config from './config.json'
export default {
  name: 'showapps',
  data () {
    return {
      tableData: [],
      respStr: ''
    }
  },
  mounted: function () {
    this.getApps()
  },
  methods: {
    getApps () {
      this.$http.get(config.restBeHost + '/teligen-machine-monitor-be/rest/apps/', {}, {
        headers: {
        },
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        this.tableData = response.data
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    },
    openAppMetric (pid) {
      window.open(config.grafanaHost + '/dashboard/db/jin-cheng-jian-kong')
    },
    openInstancesRanking (pid) {
      window.open(config.restBeHost + '/teligen-machine-monitor-be/rest/apps/rankInstances/' + pid)
    },
    enableGC (pid) {
      this.$http.get(config.restBeHost + '/teligen-machine-monitor-be/rest/apps/enableGC/' + pid, {}, {
        headers: {
        },
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        this.$message({
          showClose: true,
          message: 'GC日志将会添加到应用日志中（可能会有所延迟，请稍后再手动刷新本页面）'
        })
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    },
    disableGC (pid) {
      this.$http.get(config.restBeHost + '/teligen-machine-monitor-be/rest/apps/disableGC/' + pid, {}, {
        headers: {
        },
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        this.$message({
          showClose: true,
          message: 'GC日志已关闭（可能会有所延迟，请稍后再手动刷新本页面）'
        })
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    },
    openThreadsDump (pid) {
      window.open(config.restBeHost + '/teligen-machine-monitor-be/rest/apps/dumpThreads/' + pid)
    },
    dumpHeap (pid) {
      this.$http.get(config.restBeHost + '/teligen-machine-monitor-be/rest/apps/dumpHeap/' + pid, {}, {
        headers: {
        },
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        this.$message({
          showClose: true,
          message: '文件将会保存在以下目录: ' + response.data
        })
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    }
  }
}
</script>

<style>
</style>
