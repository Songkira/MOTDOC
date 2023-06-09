package com.roller.doc.api.controller;

import com.roller.doc.api.request.HospitalMyListReq;
import com.roller.doc.api.request.HospitalMyReq;
import com.roller.doc.api.request.HospitalMyStatusReq;
import com.roller.doc.api.response.ResponseDTO;
import com.roller.doc.api.response.drug.DrugMyCreateRes;
import com.roller.doc.api.response.drug.DrugMyRes;
import com.roller.doc.api.service.User.UserService;
import com.roller.doc.util.HeaderUtil;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Log4j2
@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * 즐겨찾는 병원 상태변경
     */
    @PutMapping("/hospital/statusmark")
    public ResponseEntity statusHospitalMy(@RequestHeader String Authorization, @RequestBody HospitalMyStatusReq hospitalMyStatusReq) {
        String token = HeaderUtil.getAccessTokenString(Authorization);
        ResponseDTO responseDTO = userService.statusHospitalMy(token, hospitalMyStatusReq.getHospitalId(), hospitalMyStatusReq.isStatus());
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }

    /**
     * 즐겨찾기 여부
     */
    @PostMapping("/hospital/ismark")
    public ResponseEntity isHospitalMy(@RequestHeader String Authorization,@RequestBody HospitalMyReq hospitalMyReq) {
        String token = HeaderUtil.getAccessTokenString(Authorization);
        ResponseDTO responseDTO = userService.isHospitalMy(token, hospitalMyReq.getHospitalId());
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }

    /**
     * 즐겨찾기 리스트
     */
    @PostMapping("/hospital/marklist")
    public ResponseEntity listHospitalMy(@RequestHeader String Authorization, @RequestBody HospitalMyListReq hospitalMyListReq) {
        String token = HeaderUtil.getAccessTokenString(Authorization);
        ResponseDTO responseDTO = userService.listHospitalMy(token, hospitalMyListReq);
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }

    /**
     * 나의 약봉지 목록 조회
     */
    @GetMapping("/drug/my")
    public ResponseEntity findList(@RequestHeader String Authorization) throws Exception {
        String token = HeaderUtil.getAccessTokenString(Authorization);

        ResponseDTO result = userService.findList(token);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    /**
     * 나의 약봉지 추가
     */
    @PostMapping("/drug/plus")
    private ResponseEntity createDrugMy(@RequestHeader String Authorization, @RequestBody DrugMyCreateRes drugMyCreateRes) throws Exception {
        String token = HeaderUtil.getAccessTokenString(Authorization);

        DrugMyRes result = userService.createDrugMy(token, drugMyCreateRes);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
