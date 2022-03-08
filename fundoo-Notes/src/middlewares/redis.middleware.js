import HttpStatus from 'http-status-codes';
import {client} from '../config/redis.js';

export const redis_data = async (req, res, next)=>{
    const data = await client.get('getAllNotes')
    if(data){
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: JSON.parse(data),
            message: 'All notes fetched from redis successfully'
  });}
  else{
      next();
  }
    }
    // export const redis_data1 = async (req, res, next)=>{
    //     const data = await client.get('getSingleNote')
    //     if(data){
    //         res.status(HttpStatus.OK).json({
    //             code: HttpStatus.OK,
    //             data: JSON.parse(data),
    //             message: 'single note fetched from redis successfully'
    //   });}
    //   else{
    //       next();
    //   }
    //     }

