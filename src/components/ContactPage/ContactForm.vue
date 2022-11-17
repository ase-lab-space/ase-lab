<i18n lang="yaml">
  en:
    name-label: Name
    content-label: Message
    submit-label: submit
    highSchool: High school student
    universityStudent: University student
    employee: Employee
    others: Others
  ja:
    name-label: 名前
    content-label: 内容
    submit-label: 送信
    highSchool: 高校生
    universityStudent: 大学生
    employee: 社会人
    others: その他
</i18n>

<template>
  <section class="form-container">
    <div class="row justify-end">
      <div class="col-12">
        <q-form class="contact-form q-mx-auto form" @submit="send" greedy>
          <q-input
            v-model="name"
            type="text"
            :label="t('name-label')"
            :rules="[rules.required]"
            :dense="q.screen.lt.sm"
          />
          <q-input
            v-model="email"
            type="email"
            label="E-mail"
            :rules="[rules.required]"
            :dense="q.screen.lt.sm"
          />
          <div class="q-gutter-sm">
            <div v-if="q.screen.gt.xs">
              <q-radio
                v-for="(color, s) in STATUS_TYPE"
                :key="s"
                v-model="status"
                :val="s"
                :label="t(s)"
                :color="color"
                :rules="[rules.required]"
              />
            </div>
            <q-select
              v-else
              v-model="status"
              :options="
                Object.keys(STATUS_TYPE).map((key) => ({
                  value: key,
                  label: t(key)
                }))
              "
              label="職業"
              dense
            />
          </div>
          <q-input
            v-model="body"
            type="textarea"
            :label="t('content-label')"
            :rules="[rules.required]"
            :dense="q.screen.lt.sm"
          />
          <div class="row justify-end">
            <q-btn
              outline
              type="submit"
              :label="t('submit-label')"
              :loading="loading"
              color="secondary"
              class="submit"
            />
          </div>
        </q-form>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { QForm, useQuasar } from 'quasar';
import { SlackRepository } from 'src/repositories/slack_repository';
import { EmailJSRepository } from 'src/repositories/emailjs_repository';


const STATUS_TYPE = {
highSchool: 'teal',
universityStudent: 'orange',
employee: 'red',
others: 'cyan',
};

export default defineComponent({
  setup() {
    const form = ref<QForm>();
    const q = useQuasar();
    const { t } = useI18n();

    const name = ref('');
    const email = ref('');
    const status = ref<keyof typeof STATUS_TYPE>();
    const body = ref('');
    const loading = ref(false);

    return {
      form,
      q,
      t,

      name,
      email,
      status,
      body,

      // style
      loading,
      STATUS_TYPE,

      rules: {
        required: (value: string) => !!value || 'この項目は必須です。',
      },

      async send() {
        loading.value = true;

        if (typeof status.value === 'undefined'){
          loading.value = false;
          return;
        }

        const params = {
          name: name.value,
          email: email.value,
          status: t(status.value),
          body: body.value,
        };

        const slackRepository = new SlackRepository();
        const emailjsRepository = new EmailJSRepository();

        try {
          await Promise.all([
            slackRepository.notifyContactForm(params),
            emailjsRepository.notifyContactForm(params),
          ]);
        } catch {
          q.notify(
            '何らかの理由で正常に送信できませんでした。時間を開けてもう一度送るか、ase.lab.academic@gmail.comへ直接ご連絡ください。'
          );
          return;
        } finally {
          loading.value = false;
        }
        q.notify('正常に送信されました。返信をお待ちください。');
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.form-container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
.form {
  > * {
    margin-bottom: 12px;
  }
}
.submit {
  min-width: 80px;
}
</style>
