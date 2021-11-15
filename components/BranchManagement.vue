<template>
  <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
        <el-menu-item-group>
          <template slot="title">Group 1</template>
          <el-menu-item index="1-1">Option 1</el-menu-item>
          <el-menu-item index="1-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="1-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">Option4</template>
          <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
        <el-menu-item-group>
          <template slot="title">Group 1</template>
          <el-menu-item index="2-1">Option 1</el-menu-item>
          <el-menu-item index="2-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="2-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">Option 4</template>
          <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
        <el-menu-item-group>
          <template slot="title">Group 1</template>
          <el-menu-item index="3-1">Option 1</el-menu-item>
          <el-menu-item index="3-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="3-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">Option 4</template>
          <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
          <el-dropdown-item v-on:click="logout" class="el-logout-button">Logout</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{name}}</span>
    </el-header>
    
    <el-main>
      <el-table :data="branches.filter(data => !search || data.branchName.toLowerCase().includes(search.toLowerCase()) || data.branchCode.toLowerCase().includes(search.toLowerCase()))">
        <el-table-column prop="id" label="Branch ID" >
        </el-table-column>
        <el-table-column prop="branchName" label="Branch Name" >
        </el-table-column>
        <el-table-column prop="branchCode" label="Branch Code">
        </el-table-column>
        <el-table-column prop="latitude" label="Latitude">
        </el-table-column>
        <el-table-column prop="longitude" label="Longitude">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="Type to search"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: this.$auth.user.name,
        address: 'No. 189, Grove St, Los Angeles'
      };
      const branches = [{
      id: 1,
      branchCode: 'Branch1',
      branchName: 'Bangna',
      latitude: 26.585630,
      longitude: 91.248199
    },{
      id: 2,
      branchCode: 'Branch2',
      branchName: 'Chatuchak',
      latitude: 13.816350718200532,
      longitude: 100.55606560820995
    },{
      id: 3,
      branchCode: 'Branch3',
      branchName: 'Si-Lom',
      latitude: 13.725492284429217,
      longitude: 100.53192518377219
    }]
      const products = [{
          productId: 1,
          productName: 'product 1',
          quantity: 11,
          branchCode: "branch1"
        },
        {
          productId: 2,
          productName: 'product 2',
          quantity: 8,
          branchCode: "branch1"
        },
        {
          productId: 3,
          productName: 'product 3',
          quantity: 4,
          branchCode: "branch1"
        },
        {
          productId: 1,
          productName: 'product 1',
          quantity: 3,
          branchCode: "branch2"
        },
        {
          productId: 2,
          productName: 'product 2',
          quantity: 18,
          branchCode: "branch2"
        },
        {
          productId: 3,
          productName: 'product 3',
          quantity: 24,
          branchCode: "branch3"
        }]
      return {
        name: this.$auth.user.name,
        // tableData: Array(20).fill(product),\
        tableData: products,
        branches: [],
        branches,
        products,
        search: '',
      }
    },

    methods: {
      async logout() {
        await this.$auth.logout();
        this.$auth.loggedIn = false
        this.$auth.user = null
        this.$router.push('/login');
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      async getData() {
        try {
          const branchesResponse = await this.$http.get('http://127.0.0.1:8080/e-commerce/branches')
          this.branches = branchesResponse.data.data
          console.log('branches : ', this.branches)
          // JSON responses are automatically parsed.
        } catch (error) {
          console.log(error);
        }
      },
      created() {
        this.getData();
      },
    }
  };
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

  .el-logout-button {
    color: red;
  }
</style>
