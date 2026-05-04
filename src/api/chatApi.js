import api from './axiosConfig';

export const createRoom = (userId, ownerId) =>
  api.post('/chat/room', {
    userId,
    ownerId,
  });

export const sendMessage = data =>
  api.post('/chat/send', data);

export const getHistory = roomId =>
  api.get(`/chat/history/${roomId}`);

export const typingStatus = data =>
  api.post('/chat/typing', data);

export const acceptedChats = id =>
  api.get(`/chat/accepted/${id}`);