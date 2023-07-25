const cloud = {
  general: {
    onboarding: 'Вводный курс',
  },
  welcome: {
    page_title: 'Добро пожаловать',
    title: 'Добро пожаловать в облако Logto! Мы хотели бы узнать вас получше.',
    description:
      'Сделайте свой опыт работы с Logto уникальным для вас, узнав вас получше. Ваша информация надежно защищена.',
    project_field: 'Я использую Logto для',
    project_options: {
      personal: 'Личного проекта',
      company: 'Компании',
    },
    title_field: 'Твоя должность',
    title_options: {
      developer: 'Разработчик',
      team_lead: 'Лидер команды',
      ceo: 'Генеральный директор',
      cto: 'Технический директор',
      product: 'Продукт',
      others: 'Другие',
    },
    company_name_field: 'Название компании',
    company_name_placeholder: 'Acme.co',
    company_size_field: 'Какой у вас размер компании?',
    company_options: {
      size_1: '1',
      size_2_49: '2-49',
      size_50_199: '50-199',
      size_200_999: '200-999',
      size_1000_plus: '1000+',
    },
    reason_field: 'Я подписываюсь потому, что',
    reason_options: {
      passwordless:
        'Ищу безопасную аутентификацию без пароля и набор компонентов пользовательского интерфейса',
      efficiency: 'Пытаюсь найти готовую инфраструктуру идентификации',
      access_control: 'Хочу контролировать доступ пользователей на основе ролей и обязанностей',
      multi_tenancy: 'Ищу стратегии для продукта с несколькими арендаторами',
      enterprise: 'Ищу решения для одиночного входа (SSO) для компаний',
      others: 'Другие',
    },
  },

  sie: {
    page_title: 'Настройка опыта входа',
    title: 'Давайте сначала легко настроим ваш опыт входа',
    inspire: {
      title: 'Создайте убедительные примеры',
      description:
        'Чувствуете неуверенность в опыте входа? Просто нажмите «Вдохновить меня» и позвольте волшебству совершиться!',
      inspire_me: 'Вдохнови меня',
    },
    logo_field: 'Логотип приложения',
    color_field: 'Цвет бренда',
    identifier_field: 'Идентификатор',
    identifier_options: {
      email: 'Электронная почта',
      phone: 'Номер телефона',
      user_name: 'Имя пользователя',
    },
    authn_field: 'Аутентификация',
    authn_options: {
      password: 'Пароль',
      verification_code: 'Код подтверждения',
    },
    social_field: 'Вход через социальную сеть',
    finish_and_done: 'Готово',
    preview: {
      mobile_tab: 'Мобильный',
      web_tab: 'Веб',
    },
    connectors: {
      unlocked_later: 'Разблокируется позже',
      unlocked_later_tip:
        'После того, как вы завершите процесс ввода в эксплуатацию и войдете в продукт, вы получите доступ к еще большему количеству методов входа через социальные сети.',
      notice:
        'Пожалуйста, не используйте демонстрационный коннектор для производственных целей. После тестирования удалите демонстрационный коннектор и настройте свой собственный коннектор с вашими учетными данными.',
    },
  },
  socialCallback: {
    title: 'Вход выполнен успешно',
    description:
      'Вы успешно вошли, используя свою учетную запись в социальной сети. Чтобы обеспечить безпроблемную интеграцию и доступ ко всем функциям Logto, рекомендуем настроить свой собственный социальный коннектор.',
  },
  tenant: {
    create_tenant: 'Создать арендатора',
  },
};

export default cloud;
