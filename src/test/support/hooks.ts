import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from './world';

/**
 * (Optional) Before hook – dùng để reset state nếu cần
 */
Before(async function (this: CustomWorld) {
  // Ví dụ: clear storage, reset state, etc.
  // Không bắt buộc phải có gì ở đây
});

/**
 * After hook – luôn được gọi sau mỗi scenario
 * → Tự động đóng browser để tránh rò rỉ tài nguyên
 */
After(async function (this: CustomWorld) {
  await this.closeBrowser();
});
