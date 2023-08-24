import { useForm, isNotEmpty } from "@mantine/form";
import { TextInput, NumberInput, Group, Checkbox, Button, Grid, Textarea } from "@mantine/core";
import writeToDatabase from "../../helpers/writeToDataBase";
import submitChangeDataBase from "../../helpers/submitChangeDataBase";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/editSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const AdminCollectionForm = () => {
  const { category, vendor } = useParams();
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
        vendorCode: editData.vendorCode,
        description: editData.description,
        advantages: editData.advantages,
        loadClass: editData.loadClass,
        thickness: editData.thickness,
        abrasionClass: editData.abrasionClass,
        panelSize: editData.panelSize,
        amountPackage: editData.amountPackage,
        chamfer: editData.chamfer,
        lock: editData.lock,
        waterResistance: editData.waterResistance,
        warmFloor: editData.warmFloor,
        warrantyPeriod: editData.warrantyPeriod,
        country: editData.country,
        image: editData.image,
        visible: editData.visible,
        delivery: editData.delivery,
        patternType: editData.patternType,
        collectionPrice: editData.collectionPrice,
        antistatic: editData.antistatic,
        formaldehydeEmissionClass: editData.formaldehydeEmissionClass,
        europeanNorms: editData.europeanNorms,
        boardSurface: editData.boardSurface,
      });
    }
  }, [edit]);

  const form = useForm({
    initialValues: {
      name: "",
      link: "",
      position: 0,
      vendorCode: "",
      description: "",
      advantages: "",
      loadClass: "",
      thickness: "",
      abrasionClass: "",
      panelSize: "",
      amountPackage: "",
      chamfer: "",
      lock: "",
      waterResistance: false,
      warmFloor: false,
      warrantyPeriod: "",
      country: "",
      image: "",
      visible: false,
      delivery: false,
      patternType: "",
      collectionPrice: "",
      antistatic: false,
      formaldehydeEmissionClass: "",
      europeanNorms: "",
      boardSurface: "",
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
                `/${category}/${vendor}/collections/${values.link}`,
                { ...values },
                form.reset,
                () => dispatch(closeModal()),
                false
              )
            )
          : form.onSubmit((values) => {
              submitChangeDataBase(
                values,
                `/${category}/${vendor}/collections/${values.link}`,
                editUuid,
                form.reset,
                () => dispatch(closeModal())
              );
            })
      }
    >
      <Grid>
        <Grid.Col md={6}>
          <NumberInput
            placeholder="Позиция для сортировки"
            label="Позиция для сортировки"
            {...form.getInputProps("position")}
          />
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
            placeholder="Цена"
            label="Цена"
            {...form.getInputProps("collectionPrice")}
          />
          <TextInput
            label="Артикул"
            placeholder="Артикул"
            {...form.getInputProps("vendorCode")}
          />
          <TextInput
            label="Соответствие европейским нормам"
            placeholder="Соответствие европейским нормам"
            {...form.getInputProps("europeanNorms")}
          />
          <TextInput
            label="Поверхность доски"
            placeholder="Поверхность доски"
            {...form.getInputProps("boardSurface")}
          />
          <TextInput
            label="Класс эмиссии формальдегида"
            placeholder="Класс эмиссии формальдегида"
            {...form.getInputProps("formaldehydeEmissionClass")}
          />
          <Textarea
            placeholder="Описание коллекции"
            label="Описание коллекции"
            autosize
            minRows={5}
            {...form.getInputProps("description")}
          />
          <Textarea
            placeholder="Преимущества коллекции"
            label="Преимущества коллекции"
            autosize
            minRows={5}
            {...form.getInputProps("advantages")}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <TextInput
            label="Класс нагрузки"
            placeholder="Класс нагрузки"
            {...form.getInputProps("loadClass")}
          />
          <TextInput
            label="Класс истирания"
            placeholder="Класс истирания"
            {...form.getInputProps("abrasionClass")}
          />
          <TextInput
            label="Размер панели"
            placeholder="Размер панели"
            {...form.getInputProps("panelSize")}
          />
          <TextInput
            label="Количество в упаковке"
            placeholder="Количество в упаковке"
            {...form.getInputProps("amountPackage")}
          />
          <TextInput
            label="Фаска"
            placeholder="Фаска"
            {...form.getInputProps("chamfer")}
          />
          <TextInput
            label="Замок"
            placeholder="Замок"
            {...form.getInputProps("lock")}
          />
          <TextInput
            label="Тип рисунка"
            placeholder="Тип рисунка"
            {...form.getInputProps("patternType")}
          />
          <NumberInput
            precision={2}
            placeholder="Толщина"
            label="Толщина"
            {...form.getInputProps("thickness")}
          />
          <Group mt="sm">
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
            <Checkbox
              size="md"
              label="Водостойкость"
              {...form.getInputProps("waterResistance", { type: "checkbox" })}
            />
            <Checkbox
              size="md"
              label="Антистатик"
              {...form.getInputProps("antistatic", { type: "checkbox" })}
            />
            <Checkbox
              size="md"
              label="Совместимость с теплым полом"
              {...form.getInputProps("warmFloor", { type: "checkbox" })}
            />
          </Group>
          <TextInput
            label="Гарантийный срок службы"
            placeholder="Гарантийный срок службы"
            {...form.getInputProps("warrantyPeriod")}
          />
          <TextInput
            label="Страна производитель"
            placeholder="Страна производитель"
            {...form.getInputProps("country")}
          />
          <TextInput
            label="Картинка"
            placeholder="Картинка"
            {...form.getInputProps("image")}
          />
        </Grid.Col>
      </Grid>
      <Button mt="md" type="submit">
        {edit ? "Сохранить" : "Отправить"}
      </Button>
    </form>
  );
};
export default AdminCollectionForm;
