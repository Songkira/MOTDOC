package com.roller.doc.db.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.roller.doc.db.entity.Drug;
import com.roller.doc.db.entity.DrugAvoid;
import com.roller.doc.db.entity.DrugDesc;

@Repository
public interface DrugRepository extends JpaRepository<Drug, Long> {

	/**
	 * 이름으로 의약품 검색
	 */
	@Query(value = "SELECT * FROM drug WHERE drug_name LIKE %:drugName%", nativeQuery = true)
	List<Drug> findOneByName(@Param("drugName")String drug_name);

	/**
	 * 조건으로 의약품 검색
	 */
	@Query(value = "SELECT * FROM drug WHERE drug_type =:drugType and drug_line =:drugLine and (drug_colorb =:drugColor or drug_colorf =:drugColor) and (drug_markb =:drugMark or drug_markf =:drugMark)", nativeQuery = true)
	List<Drug> findDrug(@Param("drugType")String drug_type, @Param("drugLine")String drug_line,
		@Param("drugColor")String drug_color, @Param("drugMark")String drug_mark);

	/**
	 * 조건으로 의약품 검색 (drug_line이 없을 때)
	 */
	@Query(value = "SELECT * FROM drug WHERE drug_type =:drugType and drug_line = 'oxo' and (drug_colorb =:drugColor or drug_colorf =:drugColor) and (drug_markb =:drugMark or drug_markf =:drugMark) limit 37", nativeQuery = true)
	List<Drug> findA(@Param("drugType")String drug_type,
						@Param("drugColor")String drug_color, @Param("drugMark")String drug_mark);

	/**
	 * 조건으로 의약품 검색 (drug_line이 +형일 때)
	 */
	@Query(value = "SELECT * FROM drug WHERE drug_type =:drugType and (drug_line = '+xo' or drug_line = '+x+' or drug_line = 'ox+') and (drug_colorb =:drugColor or drug_colorf =:drugColor) and (drug_markb =:drugMark or drug_markf =:drugMark) limit 37", nativeQuery = true)
	List<Drug> findB(@Param("drugType")String drug_type,
					 @Param("drugColor")String drug_color, @Param("drugMark")String drug_mark);

	/**
	 * 조건으로 의약품 검색 (drug_line이 -형일 때)
	 */
	@Query(value = "SELECT * FROM drug WHERE drug_type =:drugType and (drug_line = '-x-' or drug_line = '-xo' or drug_line = 'ox-') and (drug_colorb =:drugColor or drug_colorf =:drugColor) and (drug_markb =:drugMark or drug_markf =:drugMark) limit 37", nativeQuery = true)
	List<Drug> findC(@Param("drugType")String drug_type,
					 @Param("drugColor")String drug_color, @Param("drugMark")String drug_mark);

	/**
	 * 조건으로 의약품 검색 (drug_line이 기타일 때)
	 */
	@Query(value = "SELECT * FROM drug WHERE drug_type =:drugType and not drug_line = 'oxo' and (drug_colorb =:drugColor or drug_colorf =:drugColor) and (drug_markb =:drugMark or drug_markf =:drugMark) limit 37", nativeQuery = true)
	List<Drug> findD(@Param("drugType")String drug_type,
					 @Param("drugColor")String drug_color, @Param("drugMark")String drug_mark);

	/**
	 * 조건으로 의약품 검색 (drug_line이 전체일 때)
	 */
	@Query(value = "SELECT * FROM drug WHERE drug_type =:drugType and (drug_colorb =:drugColor or drug_colorf =:drugColor) and (drug_markb =:drugMark or drug_markf =:drugMark) limit 37", nativeQuery = true)
	List<Drug> findE(@Param("drugType")String drug_type,
					 @Param("drugColor")String drug_color, @Param("drugMark")String drug_mark);

	/**
	 * 의약품 상세정보 출력(drug)
	 */
	@Query(value = "SELECT * FROM drug WHERE drug_id =:drugId", nativeQuery = true)
	Drug selectDrug(@Param("drugId")Long drug_id);
}
