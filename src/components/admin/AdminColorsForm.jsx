import { useForm, isNotEmpty } from "@mantine/form";
import {
  TextInput,
  NumberInput,
  Group,
  Checkbox,
  Button,
} from "@mantine/core";
import writeToDatabase from "../../helpers/writeToDataBase";
import submitChangeDataBase from "../../helpers/submitChangeDataBase";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/editSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const AdminColorsForm = () => {
  const { category, vendor, collection } = useParams();
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
        image2: editData.image2,
        image3: editData.image3,
        price: editData.price,
        code: editData.code,
        visible: editData.visible,
      });
    }
  }, [edit]);
  const form = useForm({
    initialValues: {
      name: "",
      link: "",
      position: 0,
      image: "",
      image2: "",
      image3: "",
      price: 0,
      code: "",
      visible: false,
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
                `/${category}/${vendor}/collections/${collection}/colors/${values.link}`,
                { ...values },
                form.reset,
                () => dispatch(closeModal()),
                false
              )
            )
          : form.onSubmit((values) => {
              submitChangeDataBase(
                values,
                `/${category}/${vendor}/collections/${collection}/colors/${values.link}`,
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
      <TextInput
        label="Картинка-2"
        placeholder="Картинка"
        {...form.getInputProps("image2")}
      />
      <TextInput
        label="Картинка-3"
        placeholder="Картинка"
        {...form.getInputProps("image3")}
      />
      <NumberInput
        placeholder="Цена"
        label="Цена"
        {...form.getInputProps("price")}
      />
      <TextInput
        label="Код производителя"
        placeholder="Код производителя"
        {...form.getInputProps("code")}
      />
      <Group>
        <Checkbox
          mt="xs"
          size="md"
          label="Скрыть"
          {...form.getInputProps("visible", { type: "checkbox" })}
        />
      </Group>
      <Button mt="md" type="submit">
        {edit ? "Сохранить" : "Отправить"}
      </Button>
    </form>
  );
};
export default AdminColorsForm;
