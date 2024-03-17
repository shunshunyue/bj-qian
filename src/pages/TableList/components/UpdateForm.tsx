import {
  ModalForm,
  ProFormDateTimePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Modal } from 'antd';
import React from 'react';

export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.RuleListItem>;

export type UpdateFormProps = {
  onCancel: (s: boolean) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalOpen: boolean;
  values: any;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const intl = useIntl();
  function handleUpdate(arg0: API.RuleListItem) {
    throw new Error('Function not implemented.');
  }

  return (
    <ModalForm
      title="修改用户"
      width="400px"
      open={props.updateModalOpen}
      onOpenChange={props.onCancel}
      onFinish={props.onSubmit}
      initialValues={props.values}
    >
      <ProFormText
        rules={[
          {
            required: true,
            message: "用户名不能为空"
          },
        ]}
        width="md"
        name="username"
        label="用户名"

      />
      <ProFormText
        rules={[
          {
            required: true,
            message: "角色不能为空"
          },
        ]}
        width="md"
        name="role"
        label="角色"

      />
      <ProFormText

        width="md"
        name="password"
        label="密码"

      />
    </ModalForm>
  );
};

export default UpdateForm;
