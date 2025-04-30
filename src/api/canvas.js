import { canvases } from './http';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export function getCanvases(params) {
  const payload = Object.assign(
    {
      _sort: 'modifiedAt',
      _order: 'desc',
    },
    params,
  );
  return canvases.get('/', { params: payload });
}

export function createCanvas() {
  const newCanvas = {
    title: uuidv4().substring(0, 4) + '_새로운 린 캔버스',
    modifiedAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    category: '신규',
  };
  return canvases.post('/', newCanvas);
}

//리턴 안할거면 어싱크어웨잇 넣어
export async function deleteCanvas(id) {
  await canvases.delete(`/${id}`);
}

export async function getCanvasById(id) {
  const { data } = await canvases.get(`/${id}`);
  return data;
}

export async function updateTitle(id, title) {
  await canvases.patch(`/${id}`, { title });
}
