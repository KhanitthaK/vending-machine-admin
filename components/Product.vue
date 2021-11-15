<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <span>{{name}}</span>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
          <el-dropdown-item v-on:click="logout" class="el-logout-button">Logout</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main class="product-image">
      <el-row>
        <el-col :span="8" v-for="product in products" :key="product" class="card-product">
          <el-card :body-style="{ padding: '12px' }" >
            <img :src="product.image" class="image" fit="scale-down" style="height: 200px">
            <div style="padding: 12px, margin-top: 5px">
              <span style="padding: 10px 5px">{{product.productName}}</span>
              <div class="bottom clearfix">
                <stock class="stock">in stock {{ product.quantity }}</stock>
                  <el-button v-on:click="outerVisible = true" type="primary" plain style="width: 100%">Buy</el-button>
                  <el-dialog title="Are you sure to buy this?" :visible.sync="outerVisible">
                    <el-dialog
                        width="30%"
                        title="Please, Pay."
                        :visible.sync="innerVisible"
                        append-to-body>
                      <el-button type="primary" v-on:click="handleBuy(product)">Payment</el-button>
                    </el-dialog>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="outerVisible = false">Cancel</el-button>
                      <el-button type="primary" v-on:click="innerVisible = true">Confirm</el-button>
                    </div>
                  </el-dialog>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>


<script>
  import axios from 'axios';
  export default {
    data() {
      const products = [{
          productId: 1,
          productName: 'product 1',
          quantity: 11,
          branchCode: "branch1",
          image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          productId: 2,
          productName: 'product 2',
          quantity: 8,
          branchCode: "branch1",
          image: 'https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs'
        },
        {
          productId: 3,
          productName: 'product 3',
          quantity: 4,
          branchCode: "branch1",
          image: 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk'
        },
        {
          productId: 1,
          productName: 'product 1',
          quantity: 3,
          branchCode: "branch2",
          image: 'https://i.picsum.photos/id/1020/4288/2848.jpg?hmac=Jo3ofatg0fee3HGOliAIIkcg4KGXC8UOTO1dm5qIIPc'
        },
        {
          productId: 2,
          productName: 'product 2',
          quantity: 18,
          branchCode: "branch2",
          image: 'https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU'
        },
        {
          productId: 3,
          productName: 'product 3',
          quantity: 24,
          branchCode: "branch3",
          image: 'https://picsum.photos/id/1025/4951/3301'
        }]
      return {
        currentDate: new Date(),
        products,
        num: 1,
        name: this.$auth.user.name,
        outerVisible: false,
        innerVisible: false
      }
    },
    methods: {
    async handleBuy(data) {
      const payload = {
        productId: data.productId,
        branchCode: this.$auth.branchCode
      }
      try {
        console.log('product : ', payload,)
        const buyItem = await axios.post('http://127.0.0.1:8080/e-commerce/stock/buy', payload) 
        console.log('buyItem : ', buyItem.data.data)
      } catch(error) {
        console.log('error : ', error)
      }
      
      
      // await this.$auth.logout();
      // this.$router.push('/login');
    },
    async logout() {
      await this.$auth.logout();
      this.$auth.loggedIn = false
      this.$auth.user = null
      this.$router.push('/login');
    },
  },
  }
</script>

<style>
  .stock {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 10px;
    line-height: 1.5;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    box-sizing: inherit;
    display: table;
    content: "";
  }
  
  .clearfix:after {
    clear: both
  }
  .card-product {
    flex: 0 0 33.3333333333%;
    width: 100%;
    height: 350px;
    max-width: 33.3333333333%;
    padding: 2%;
  }
  .el-logout-button {
    color: red;
  }
</style>