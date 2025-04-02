<template>
  <div class="container">
    <form>
      <div class="place-add__box shadow mt-5">
        <div>
          <div class="add-section__header">
            <h1>Разместите объявление </h1>
            <p>Укажите данные об автомобиле для размещения объявления</p>
          </div>
          <div class="navigation-container">
            <div class="tabs-container">
              <button type="button" v-for="(tab, index) in tabs" :key="index"
                :class="['tab', { active: activeTab === index }]" @click="setActiveTab(index)">
                {{ tab }}
              </button>
            </div>
          </div>
          <a-select ref="select" v-model:value="value14" style="width: 100% ; margin: 20px 0;">
            <a-select-option value="Марка">Марка</a-select-option>
          </a-select>
          <a-select ref="select" v-model:value="value15" style="width: 100%">
            <a-select-option value="Модель">Модель</a-select-option>
          </a-select>
        </div>
        <div class="my-4">
          <h1 class="main-header">Характеристики</h1>

          <div class="input-box" style="border-top: none;">
            <p class="mb-0">Год выпуска</p>
            <a-date-picker v-model:value="dateValue" picker="year" />
          </div>
          <div class="input-box">
            <p class="mb-0">Пробег</p>
            <a-input-number id="inputNumber" v-model:value="value" min="0" prefix="км" />
          </div>
          <div class="input-box">
            <p class="mb-0">Страна</p>
            <a-select ref="select" v-model:value="value1" style="width: 120px">
              <a-select-option value="jack">Usa</a-select-option>
            </a-select>
          </div>
          <div class="input-box">
            <p class="mb-0">Топливо</p>
            <a-select ref="select" v-model:value="value2" style="width: 120px">
              <a-select-option value="Бензин">Бензин</a-select-option>
            </a-select>
          </div>
          <div class="input-box">
            <p class="mb-0">Объем</p>
            <a-input-number id="inputNumber" v-model:value="value3" prefix="л" min="0" step="0.1" />
          </div>
          <div class="input-box">
            <p class="mb-0">Мощность</p>
            <a-input-number id="inputNumber" v-model:value="value4" prefix="л.с" min="0" />
          </div>
          <div class="input-box">
            <p class="mb-0">Привод</p>
            <a-select ref="select" v-model:value="value5" style="width: 120px">
              <a-select-option value="Передний">Передний</a-select-option>
            </a-select>
          </div>
          <div class="input-box">
            <p class="mb-0">КПП</p>
            <a-select ref="select" v-model:value="value6" style="width: 120px">
              <a-select-option value="автомат">автомат</a-select-option>
            </a-select>
          </div>
          <div class="input-box">
            <p class="mb-0">Колличество дверей</p>
            <a-select ref="select" v-model:value="value7" style="width: 120px">
              <a-select-option value="5">5</a-select-option>
            </a-select>
          </div>
          <div class="input-box">
            <p class="mb-0">Кузов</p>
            <a-select ref="select" v-model:value="value8" style="width: 120px">
              <a-select-option value="Седан">Седан</a-select-option>
            </a-select>
          </div>
          <div class="input-box">
            <p class="mb-0">Состояние</p>
            <a-select ref="select" v-model:value="value9" style="width: 120px">
              <a-select-option value="С пробегом">С пробегом</a-select-option>
            </a-select>
          </div>
          <div class="input-box" style="border-bottom: none;">
            <p class="mb-0">Цвет</p>
            <a-select ref="select" v-model:value="value10" style="width: 120px">
              <a-select-option value="Белый">Белый</a-select-option>
            </a-select>
          </div>
          <a-radio-group v-model:value="value11" name="radioGroup" class="mt-3">
            <a-radio value="1">В наличии</a-radio>
            <a-radio value="2">Под заказ</a-radio>
          </a-radio-group>
        </div>
      </div>
      <div class="place-add__box shadow">
        <div class="add-section__header" style="text-align: start;">
          <h1>Фото</h1>
          <p>Загрузите фото вашего автомобиля четко с разных ракурсов!</p>
        </div>
        <div class="clearfix">
          <a-upload v-model:file-list="fileList" list-type="picture-card" @preview="handlePreview">
            <div v-if="fileList.length < 8">
              <PlusOutlined />
              <div style="margin-top: 8px">Upload</div>
            </div>
          </a-upload>
          <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
            <img alt="example" style="width: 100%" :src="previewImage" />
          </a-modal>
        </div>
      </div>
      <div class="place-add__box shadow">
        <div class="add-section__header" style="text-align: start;">
          <h1>Описание</h1>
          <p>Не указывайте ссылки на источники, цены, контакты и не предлагайте другие услуги ! объявление не пройдет
            модерацию</p>
        </div>
        <a-textarea v-model:value="value12" show-count :maxlength="300" :rows="4" style="background-color: #F6F6F6;" />
      </div>
      <div class="place-add__box shadow">
        <div class="add-section__header" style="text-align: start;">
          <h1>Цена</h1>
        </div>
        <a-input-number v-model:value="value13" style="width: 100%;"
          :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
          :parser="value => value.replace(/\$\s?|(,*)/g, '')" />
      </div>
      <div class="place-add__upload">
        <button type="submit">Опубликовать объявление</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';
const tabs = ref(['Автомобили', 'Коммерческий транспорт', 'Мотоциклы']);
const activeTab = ref(1);
//input values
const dateValue = ref()
const value = ref(16000)
const value1 = ref('Usa');
const value2 = ref('Бензин')
const value3 = ref(1.8)
const value4 = ref(133)
const value5 = ref('Передний')
const value6 = ref('автомат')
const value7 = ref(5)
const value8 = ref('Седан')
const value9 = ref('С пробегом')
const value10 = ref('Белый')
const value11 = ref('1')
const value12 = ref('Честно опишите ваше авто')
const value13 = ref(1850000)
const value14 = ref('Марка')
const value15 = ref('Модель')

const formState = reactive({
  id: new Date(),
  color: 'white',
  image: [],
  country: 'USA',
  year: 2025,
  cost: 0,
  engine: 'petrol',
  volume: '',
  horsepower: 133,
  drive: 'AWD',
  checkpoint: 'automatic',
  body: 'hatchback',
  statement: 'new',
  description: '',
  authoremail: '',
  rate: 'cash',
  model: '',
  mark_id: 0
})
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');
const fileList = ref([
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
]);
const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = '';
};
const handlePreview = async file => {
  if (!file.url && !file.preview) {
    file.preview = await getBase64(file.originFileObj);
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
};

const setActiveTab = (index) => {
  activeTab.value = index;
};

</script>
<style scoped>
@import './PlaceAd.css';
</style>
