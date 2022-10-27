import { $fetch } from 'ohmyfetch';

const api = {
  hostname: 'https://api.appworks-school.tw/api/1.0',
  async getProducts(category: string, paging: number) {
    const response = await $fetch(
      `${this.hostname}/products/${category}?paging=${paging}`
    );
    return await response;
  },
  async getCampaigns() {
    const response = await $fetch(`${this.hostname}/marketing/campaigns`);
    console.log(response);
    return await response;
  },
  async searchProducts(keyword: string, paging: number) {
    const response = await $fetch(
      `${this.hostname}/products/search?keyword=${keyword}&paging=${paging}`
    );
    return await response;
  },
  async getProduct(id: string) {
    const response = await $fetch(`${this.hostname}/products/details?id=${id}`);
    return await response;
  },
  async checkout(data: {}, jwtToken: string) {
    const response = await $fetch(`${this.hostname}/order/checkout`, {
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      }),
      method: 'POST',
    });
    return await response;
  },
  async signin(data: {}) {
    const response = await $fetch(`${this.hostname}/user/signin`, {
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'POST',
    });
    return await response;
  },
  async getProfile(jwtToken: string) {
    const response = await $fetch(`${this.hostname}/user/profile`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      }),
    });
    return await response;
  },
};

export default api;
