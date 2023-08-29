import { Divider, Group, Stack, Text } from "@mantine/core";

const AdminDetailsCollection = ({collectionDetails}) => {
    return (
        <Stack spacing={1} mt="md">
          <Group position="apart">
            <Text>Название Коллекции: </Text>
            <Text>{collectionDetails.name}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Позиция в каталоге:</Text>
            <Text>{collectionDetails.position}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Цена:</Text>
            <Text>{collectionDetails.collectionPrice}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Класс истирания:</Text>
            <Text>{collectionDetails.abrasionClass}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Количество в упаковке:</Text>
            <Text>{collectionDetails.amountPackage}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Антистатик:</Text>
            <Text>{collectionDetails.antistatic ? <Text>да</Text> : <Text>нет</Text>}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Структура поверхности:</Text>
            <Text>{collectionDetails.boardSurface}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Фаска:</Text>
            <Text>{collectionDetails.chamfer}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Страна производитель:</Text>
            <Text>{collectionDetails.country}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Доставка:</Text>
            <Text>{collectionDetails.delivery ? <Text>нет</Text> : <Text>да</Text>}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Соответствие европейским нормам:</Text>
            <Text>{collectionDetails.europeanNorms}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Класс эмиссии формальдегида:</Text>
            <Text>{collectionDetails.formaldehydeEmissionClass}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Ссылка:</Text>
            <Text>{collectionDetails.link}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Класс нагрузки:</Text>
            <Text>{collectionDetails.loadClass}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Замок:</Text>
            <Text>{collectionDetails.lock}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Размер панелей:</Text>
            <Text>{collectionDetails.panelSize}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Тип панелей:</Text>
            <Text>{collectionDetails.patternType}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Толщина:</Text>
            <Text>{collectionDetails.thickness}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Код производителя:</Text>
            <Text>{collectionDetails.vendorCode}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Гарантийный период:</Text>
            <Text>{collectionDetails.warrantyPeriod}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Видимость:</Text>
            <Text>{collectionDetails.visible ? <Text>нет</Text> : <Text>да</Text>}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Теплый пол:</Text>
            <Text>{collectionDetails.warmFloor ? <Text>да</Text> : <Text>нет</Text>}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Водостойкость:</Text>
            <Text>{collectionDetails.waterResistance ? <Text>да</Text> : <Text>нет</Text>}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Преимущества:</Text>
            <Text>{collectionDetails.advantages}</Text>
          </Group>
		  <Divider />
		  <Group position="apart">
            <Text>Описание:</Text>
            <Text>{collectionDetails.description}</Text>
          </Group>
		  <Divider />
        </Stack>
    )
}
export default AdminDetailsCollection;