import type {SurauResponse} from "../../src/utils/sorter/sortByHavingImage";

export const surauFactory: SurauResponse[] = [
  {
    id: 'cllzkztw4000ctaxo65ephba1',
    name: 'Surau without image 1',
    unique_name: 'surau-without-image-1-zte',
    brief_direction: 'Test 3',
    is_approved: true,
    is_approved_at: null,
    created_at: new Date('2023-08-31T19:50:55.253Z'),
    updated_at: new Date('2023-08-31T19:50:55.253Z'),
    state_id: 'clildu63s001ii0h0f8i8jehj',
    district_id: 'clildu651001ki0h0q59yg2s1',
    mall_id: null,
    is_qiblat_certified: false,
    state: {
      id: 'clildu63s001ii0h0f8i8jehj',
      name: 'Melaka',
      unique_name: 'melaka'
    },
    district: {
      id: 'clildu651001ki0h0q59yg2s1',
      name: 'Alor Gajah',
      unique_name: 'alor-gajah',
      state_id: 'clildu63s001ii0h0f8i8jehj'
    },
    mall: null,
    images: []
  },
  {
    id: 'cllzkxhil0008taxo43hiqtpx',
    name: 'Example 2',
    unique_name: 'example-2-xfg',
    brief_direction: 'Test Local',
    is_approved: true,
    is_approved_at: null,
    created_at: new Date('2023-08-31T19:49:05.902Z'),
    updated_at: new Date('2023-08-31T19:49:05.902Z'),
    state_id: 'clildu63s001ii0h0f8i8jehj',
    district_id: 'clildu651001ki0h0q59yg2s1',
    mall_id: null,
    is_qiblat_certified: false,
    state: {
      id: 'clildu63s001ii0h0f8i8jehj',
      name: 'Melaka',
      unique_name: 'melaka'
    },
    district: {
      id: 'clildu651001ki0h0q59yg2s1',
      name: 'Alor Gajah',
      unique_name: 'alor-gajah',
      state_id: 'clildu63s001ii0h0f8i8jehj'
    },
    mall: null,
    images: [
      {
        id: 'cllpfpdsk001ymo08c1whjhv6',
        file_path: 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
        caption: null,
        created_at: new Date('2023-08-31T19:52:53.485Z'),
        surau_id: 'cllzkxhil0008taxo43hiqtpx',
        rating_id: null
      }
    ]
  }
]