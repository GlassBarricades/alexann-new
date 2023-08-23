import { useForm, isNotEmpty } from "@mantine/form";
import {
  TextInput,
  NumberInput,
  Group,
  Checkbox,
  Button,
  Textarea,
} from "@mantine/core";
import writeToDatabase from "../../helpers/writeToDataBase";
import submitChangeDataBase from "../../helpers/submitChangeDataBase";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/editSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const AdminVendorsForm = () => {
  const { category } = useParams();
  const edit = useSelector((state) => state.edit.edit);
  const editData = useSelector((state) => state.edit.editData);
  const editUuid = useSelector((state) => state.edit.editUuid);
  const dispatch = useDispatch();

  useEffect(() => {
    if (edit) {
      form.setValues({
        name: editData.name,
        link: editData.link,
        position: editData.position,
        image: editData.image,
        visible: editData.visible,
        delivery: editData.delivery,
        descr: editData.descr,
      });
    }
  }, [edit]);
  const form = useForm({
    initialValues: {
      name: "",
      link: "",
      position: 0,
      image: "",
      visible: false,
      delivery: false,
      descr: "",
    },
    validate: {
      link: isNotEmpty("Поле не должно быть пустым"),
    },
  });

  return (
    <form
      onSubmit={
        !edit
          ? form.onSubmit((values) =>
              writeToDatabase(
                `/${category}/${values.link}`,
                { ...values },
                form.reset,
                () => dispatch(closeModal()),
                false
              )
            )
          : form.onSubmit((values) => {
              submitChangeDataBase(
                values,
                `/${category}/${values.link}`,
                editUuid,
                form.reset,
                () => dispatch(closeModal())
              );
            })
      }
    >
      <TextInput
        placeholder="Название катерогии"
        label="Название категории"
        withAsterisk
        {...form.getInputProps("name")}
      />
      <TextInput
        placeholder="Ссылка для меню"
        label="Ссылка для меню"
        withAsterisk
        disabled={edit ? true : false}
        {...form.getInputProps("link")}
      />
      <NumberInput
        placeholder="Позиция для сортировки"
        label="Позиция для сортировки"
        {...form.getInputProps("position")}
      />
      <TextInput
        label="Картинка"
        placeholder="Картинка"
        {...form.getInputProps("image")}
      />
      <Group>
        <Checkbox
          mt="xs"
          size="md"
          label="Скрыть"
          {...form.getInputProps("visible", { type: "checkbox" })}
        />
        <Checkbox
          mt="xs"
          size="md"
          label="Без доставки"
          {...form.getInputProps("delivery", { type: "checkbox" })}
        />
      </Group>
      <Textarea
        placeholder="Описание производителя"
        label="Описание производителя"
        autosize
        minRows={3}
        {...form.getInputProps("descr")}
      />
      <Button mt="md" type="submit">
        {edit ? "Сохранить" : "Отправить"}
      </Button>
    </form>
  );
};
export default AdminVendorsForm;
