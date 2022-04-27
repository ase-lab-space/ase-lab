<template>
  <section>
    <div class="container row justify-end">
      <div class="col-12">
        <q-form class="contact-form q-mx-auto px-6" @submit="send" greedy>
          <div class="text-h5 text-center pt-4">Contact Form</div>
          <div class="text-caption text-center pb-4">
            ご気軽にお問い合わせください！
          </div>
          <q-input
            v-model="name"
            type="text"
            label="名前"
            outlined
            class="mt-3"
            :rules="[rules.required]"
          />
          <q-input
            v-model="email"
            type="email"
            label="E-mail"
            outlined
            class="mt-3"
            :rules="[rules.required]"
          />
          <q-input
            v-model="body"
            type="textarea"
            label="内容"
            outlined
            class="mt-3"
            :rules="[rules.required]"
          />

          <q-btn
            outline
            type="submit"
            label="送信"
            :loading="loading"
            class="full-width mt-3 mb-6"
            color="secondary"
          />
        </q-form>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import { send } from '@emailjs/browser';

export default defineComponent({
  setup() {
    const q = useQuasar();

    const name = ref('');
    const email = ref('');
    const body = ref('');
    const loading = ref(false);

    return {
      name,
      email,
      body,
      loading,

      rules: {
        required: (value: string) => !!value || 'この項目は必須です。',
      },

      async send() {
        loading.value = true;

        try {
          await send(
            'service_l6niwy4',
            'template_u36ny2r',
            {
              name: name.value,
              email: email.value,
              body: body.value,
            },
            'user_UdBeQl08zUEhs9grdeS90'
          );

          q.notify('正常に送信されました。返信をお待ちください。');

          name.value = '';
          email.value = '';
          body.value = '';
        } catch {
          q.notify(
            '何らかの理由で正常に送信できませんでした。時間を開けてもう一度送るか、ase.lab.academic@gmail.comへ直接ご連絡ください。'
          );
        }

        loading.value = false;
      },
    };
  },
});
</script>
